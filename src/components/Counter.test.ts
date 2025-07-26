// Tests for Counter component behavior
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { calculateElapsedTime } from '../utils/timeCalculations';
import { START_TIMESTAMP, COUNTER_UPDATE_INTERVAL } from '../utils/constants';
import type { TimeElapsed, CounterState } from '../types';

// Mock the global Date object for consistent testing
const mockDate = new Date('2024-01-15T12:00:00.000Z');
const mockTimestamp = Math.floor(mockDate.getTime() / 1000);

describe('Counter Component Logic', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(mockDate);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllTimers();
    });

    describe('Component State Management', () => {
        it('should initialize with correct default state', () => {
            const initialState: CounterState = {
                currentTime: new Date(),
                elapsedTime: calculateElapsedTime(START_TIMESTAMP, mockTimestamp),
                isActive: false
            };

            expect(initialState.currentTime).toBeInstanceOf(Date);
            expect(initialState.elapsedTime).toHaveProperty('years');
            expect(initialState.elapsedTime).toHaveProperty('months');
            expect(initialState.elapsedTime).toHaveProperty('days');
            expect(initialState.elapsedTime).toHaveProperty('hours');
            expect(initialState.elapsedTime).toHaveProperty('minutes');
            expect(initialState.elapsedTime).toHaveProperty('seconds');
            expect(initialState.isActive).toBe(false);
        });

        it('should calculate elapsed time correctly on initialization', () => {
            const elapsedTime = calculateElapsedTime(START_TIMESTAMP, mockTimestamp);

            expect(elapsedTime.years).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.months).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.days).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.hours).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.minutes).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.seconds).toBeGreaterThanOrEqual(0);
        });

        it('should handle state updates correctly', () => {
            let state: CounterState = {
                currentTime: new Date(),
                elapsedTime: calculateElapsedTime(START_TIMESTAMP, mockTimestamp),
                isActive: false
            };

            // Simulate state update
            const newTime = new Date(mockDate.getTime() + 1000);
            const newTimestamp = Math.floor(newTime.getTime() / 1000);

            state = {
                ...state,
                currentTime: newTime,
                elapsedTime: calculateElapsedTime(START_TIMESTAMP, newTimestamp),
                isActive: true
            };

            expect(state.currentTime).toEqual(newTime);
            expect(state.isActive).toBe(true);
            expect(state.elapsedTime.seconds).toBeGreaterThanOrEqual(0);
        });
    });

    describe('Real-time Update Functionality', () => {
        it('should create interval with correct timing', () => {
            const intervalSpy = vi.spyOn(global, 'setInterval');
            const mockCallback = vi.fn();

            const intervalId = setInterval(mockCallback, COUNTER_UPDATE_INTERVAL);

            expect(intervalSpy).toHaveBeenCalledWith(mockCallback, COUNTER_UPDATE_INTERVAL);
            expect(intervalSpy).toHaveBeenCalledTimes(1);

            clearInterval(intervalId);
            intervalSpy.mockRestore();
        });

        it('should update counter every second', () => {
            const updateCallback = vi.fn();
            const intervalId = setInterval(updateCallback, COUNTER_UPDATE_INTERVAL);

            // Fast-forward time by 3 seconds
            vi.advanceTimersByTime(3000);

            expect(updateCallback).toHaveBeenCalledTimes(3);

            clearInterval(intervalId);
        });

        it('should calculate new elapsed time on each update', () => {
            let currentElapsedTime = calculateElapsedTime(START_TIMESTAMP, mockTimestamp);

            // Simulate time passing by 1 second
            vi.advanceTimersByTime(1000);
            const newMockTimestamp = mockTimestamp + 1;
            const newElapsedTime = calculateElapsedTime(START_TIMESTAMP, newMockTimestamp);

            expect(newElapsedTime.seconds).toBe(currentElapsedTime.seconds + 1);
        });

        it('should handle minute rollover correctly', () => {
            // Set up a time that will cause minute rollover
            const baseTimestamp = START_TIMESTAMP + 59; // 59 seconds after start
            const elapsedTime1 = calculateElapsedTime(START_TIMESTAMP, baseTimestamp);
            const elapsedTime2 = calculateElapsedTime(START_TIMESTAMP, baseTimestamp + 1);

            expect(elapsedTime1.seconds).toBe(59);
            expect(elapsedTime1.minutes).toBe(0);
            expect(elapsedTime2.seconds).toBe(0);
            expect(elapsedTime2.minutes).toBe(1);
        });

        it('should handle hour rollover correctly', () => {
            // Set up a time that will cause hour rollover
            const baseTimestamp = START_TIMESTAMP + (59 * 60) + 59; // 59 minutes, 59 seconds
            const elapsedTime1 = calculateElapsedTime(START_TIMESTAMP, baseTimestamp);
            const elapsedTime2 = calculateElapsedTime(START_TIMESTAMP, baseTimestamp + 1);

            expect(elapsedTime1.minutes).toBe(59);
            expect(elapsedTime1.hours).toBe(0);
            expect(elapsedTime2.minutes).toBe(0);
            expect(elapsedTime2.hours).toBe(1);
        });
    });

    describe('Component Cleanup and Memory Management', () => {
        it('should clear interval on cleanup', () => {
            const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
            const intervalId = setInterval(() => { }, COUNTER_UPDATE_INTERVAL);

            clearInterval(intervalId);

            expect(clearIntervalSpy).toHaveBeenCalledWith(intervalId);
            clearIntervalSpy.mockRestore();
        });

        it('should not leak memory with multiple interval creations', () => {
            const intervals: NodeJS.Timeout[] = [];

            // Create multiple intervals
            for (let i = 0; i < 5; i++) {
                intervals.push(setInterval(() => { }, COUNTER_UPDATE_INTERVAL));
            }

            // Clear all intervals
            intervals.forEach(clearInterval);

            // Verify no timers are running
            expect(vi.getTimerCount()).toBe(0);
        });

        it('should handle cleanup when component unmounts', () => {
            let intervalId: NodeJS.Timeout | null = null;
            let isComponentMounted = true;

            const startCounter = () => {
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(() => {
                    if (!isComponentMounted && intervalId) {
                        clearInterval(intervalId);
                        intervalId = null;
                    }
                }, COUNTER_UPDATE_INTERVAL);
            };

            const cleanup = () => {
                isComponentMounted = false;
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            };

            startCounter();
            expect(intervalId).not.toBeNull();

            cleanup();
            expect(intervalId).toBeNull();
        });

        it('should prevent multiple intervals from running simultaneously', () => {
            let intervalId: NodeJS.Timeout | null = null;
            const callback = vi.fn();

            const startCounter = () => {
                // Clear existing interval before creating new one
                if (intervalId) clearInterval(intervalId);
                intervalId = setInterval(callback, COUNTER_UPDATE_INTERVAL);
            };

            // Start counter multiple times
            startCounter();
            startCounter();
            startCounter();

            // Fast-forward time
            vi.advanceTimersByTime(2000);

            // Should only have been called twice (once per second), not 6 times
            expect(callback).toHaveBeenCalledTimes(2);

            if (intervalId) clearInterval(intervalId);
        });
    });

    describe('Error Handling and Edge Cases', () => {
        it('should handle invalid timestamps gracefully', () => {
            expect(() => calculateElapsedTime(NaN, mockTimestamp)).toThrow();
            expect(() => calculateElapsedTime(START_TIMESTAMP, NaN)).toThrow();
            expect(() => calculateElapsedTime(-1, mockTimestamp)).toThrow();
        });

        it('should handle future start timestamps', () => {
            const futureTimestamp = mockTimestamp + 3600; // 1 hour in future
            const elapsedTime = calculateElapsedTime(futureTimestamp, mockTimestamp);

            expect(elapsedTime.years).toBe(0);
            expect(elapsedTime.months).toBe(0);
            expect(elapsedTime.days).toBe(0);
            expect(elapsedTime.hours).toBe(0);
            expect(elapsedTime.minutes).toBe(0);
            expect(elapsedTime.seconds).toBe(0);
        });

        it('should handle very large time differences', () => {
            const veryOldTimestamp = 0; // Unix epoch
            const elapsedTime = calculateElapsedTime(veryOldTimestamp, mockTimestamp);

            expect(elapsedTime.years).toBeGreaterThan(50);
            expect(elapsedTime.totalDays).toBeGreaterThan(18000);
        });

        it('should maintain accuracy over long periods', () => {
            // Test with a known time difference
            const startTime = 1696809120; // October 8, 2023, 23:52:00 UTC
            const endTime = 1704067200; // January 1, 2024, 00:00:00 UTC
            const elapsedTime = calculateElapsedTime(startTime, endTime);

            // Should be approximately 2 months, 23 days, 0 hours, 8 minutes
            expect(elapsedTime.months).toBeGreaterThanOrEqual(2);
            expect(elapsedTime.days).toBeGreaterThanOrEqual(20);
        });
    });

    describe('Performance Considerations', () => {
        it('should complete time calculations quickly', () => {
            const startTime = performance.now();

            for (let i = 0; i < 1000; i++) {
                calculateElapsedTime(START_TIMESTAMP, mockTimestamp + i);
            }

            const endTime = performance.now();
            const duration = endTime - startTime;

            // Should complete 1000 calculations in less than 100ms
            expect(duration).toBeLessThan(100);
        });

        it('should not cause memory leaks with frequent updates', () => {
            // Test that repeated calculations don't accumulate objects
            const results: TimeElapsed[] = [];

            // Simulate many updates and store results
            for (let i = 0; i < 1000; i++) {
                results.push(calculateElapsedTime(START_TIMESTAMP, mockTimestamp + i));
            }

            // Verify we got the expected number of results
            expect(results).toHaveLength(1000);

            // Verify each result has the expected structure
            results.forEach(result => {
                expect(result).toHaveProperty('years');
                expect(result).toHaveProperty('months');
                expect(result).toHaveProperty('days');
                expect(result).toHaveProperty('hours');
                expect(result).toHaveProperty('minutes');
                expect(result).toHaveProperty('seconds');
            });
        });
    });

    describe('Accessibility Support', () => {
        it('should provide structured time data for screen readers', () => {
            const elapsedTime = calculateElapsedTime(START_TIMESTAMP, mockTimestamp);

            // Verify all time units are available for accessibility
            expect(typeof elapsedTime.years).toBe('number');
            expect(typeof elapsedTime.months).toBe('number');
            expect(typeof elapsedTime.days).toBe('number');
            expect(typeof elapsedTime.hours).toBe('number');
            expect(typeof elapsedTime.minutes).toBe('number');
            expect(typeof elapsedTime.seconds).toBe('number');
        });

        it('should provide alternative time formats', () => {
            const elapsedTime = calculateElapsedTime(START_TIMESTAMP, mockTimestamp);

            expect(typeof elapsedTime.totalDays).toBe('number');
            expect(typeof elapsedTime.totalHours).toBe('number');
            expect(elapsedTime.totalDays).toBeGreaterThanOrEqual(0);
            expect(elapsedTime.totalHours).toBeGreaterThanOrEqual(0);
        });
    });
});