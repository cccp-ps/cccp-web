import { describe, it, expect, beforeEach, vi } from 'vitest';

// Import the functions we'll implement
import { 
  calculateElapsedTime, 
  isLeapYear, 
  getDaysInMonth, 
  formatTimeUnit,
  validateTimestamp 
} from './timeCalculations';

// Import types
import type { TimeElapsed } from '../types';

describe('Time Calculation Utilities', () => {
  // Test constants
  const GAZA_WAR_START_TIMESTAMP = 1696809120; // October 8, 2023, 23:52:00 UTC
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;

  describe('calculateElapsedTime', () => {
    it('should calculate elapsed time correctly for basic case', () => {
      // Test case: exactly 1 day later
      const startTime = GAZA_WAR_START_TIMESTAMP;
      const endTime = startTime + SECONDS_IN_DAY;
      
      const result = calculateElapsedTime(startTime, endTime);
      
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalDays: 1,
        totalHours: 24
      });
    });

    it('should calculate elapsed time for multiple time units', () => {
      // Test case: Use a specific known date difference
      const startTime = new Date('2023-01-01T00:00:00Z').getTime() / 1000;
      const endTime = new Date('2023-01-01T04:05:06Z').getTime() / 1000; // 4 hours, 5 minutes, 6 seconds later
      
      const result = calculateElapsedTime(startTime, endTime);
      
      expect(result.years).toBe(0);
      expect(result.months).toBe(0);
      expect(result.days).toBe(0);
      expect(result.hours).toBe(4);
      expect(result.minutes).toBe(5);
      expect(result.seconds).toBe(6);
    });

    it('should handle zero time difference', () => {
      const timestamp = GAZA_WAR_START_TIMESTAMP;
      const result = calculateElapsedTime(timestamp, timestamp);
      
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalDays: 0,
        totalHours: 0
      });
    });

    it('should handle negative time differences gracefully', () => {
      const startTime = GAZA_WAR_START_TIMESTAMP;
      const endTime = startTime - SECONDS_IN_DAY; // 1 day before
      
      const result = calculateElapsedTime(startTime, endTime);
      
      // Should return zero values for negative differences
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalDays: 0,
        totalHours: 0
      });
    });

    it('should handle large time differences without overflow', () => {
      const startTime = 0; // Unix epoch
      const endTime = Date.now() / 1000; // Current time
      
      const result = calculateElapsedTime(startTime, endTime);
      
      expect(result.years).toBeGreaterThan(50); // Should be 50+ years
      expect(result.months).toBeGreaterThanOrEqual(0);
      expect(result.days).toBeGreaterThanOrEqual(0);
      expect(result.hours).toBeGreaterThanOrEqual(0);
      expect(result.minutes).toBeGreaterThanOrEqual(0);
      expect(result.seconds).toBeGreaterThanOrEqual(0);
      expect(result.totalDays).toBeGreaterThan(18000); // Should be 18000+ days
    });

    it('should calculate accurate elapsed time across leap years', () => {
      // Test from Feb 28, 2023 to Feb 29, 2024 (leap year)
      const feb28_2023 = new Date('2023-02-28T00:00:00Z').getTime() / 1000;
      const feb29_2024 = new Date('2024-02-29T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(feb28_2023, feb29_2024);
      
      expect(result.years).toBe(1);
      expect(result.days).toBe(1); // Should account for leap day
    });

    it('should handle month boundaries correctly', () => {
      // Test from Jan 1 to Feb 1 (exactly 1 month)
      const jan1 = new Date('2023-01-01T00:00:00Z').getTime() / 1000;
      const feb1 = new Date('2023-02-01T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(jan1, feb1);
      
      expect(result.months).toBe(1);
      expect(result.days).toBe(0);
      expect(result.hours).toBe(0);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(0);
    });

    it('should handle invalid timestamps', () => {
      expect(() => calculateElapsedTime(NaN, GAZA_WAR_START_TIMESTAMP)).toThrow();
      expect(() => calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, NaN)).toThrow();
      expect(() => calculateElapsedTime(-1, GAZA_WAR_START_TIMESTAMP)).toThrow();
    });
  });

  describe('isLeapYear', () => {
    it('should identify leap years correctly', () => {
      // Leap years divisible by 4
      expect(isLeapYear(2024)).toBe(true);
      expect(isLeapYear(2020)).toBe(true);
      
      // Non-leap years not divisible by 4
      expect(isLeapYear(2023)).toBe(false);
      expect(isLeapYear(2021)).toBe(false);
      
      // Century years divisible by 400 are leap years
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(1600)).toBe(true);
      
      // Century years not divisible by 400 are not leap years
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(1800)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isLeapYear(0)).toBe(true); // Year 0 is a leap year
      expect(isLeapYear(4)).toBe(true);
      expect(isLeapYear(1)).toBe(false);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return correct days for regular months', () => {
      expect(getDaysInMonth(1, 2023)).toBe(31); // January
      expect(getDaysInMonth(3, 2023)).toBe(31); // March
      expect(getDaysInMonth(4, 2023)).toBe(30); // April
      expect(getDaysInMonth(5, 2023)).toBe(31); // May
      expect(getDaysInMonth(6, 2023)).toBe(30); // June
      expect(getDaysInMonth(7, 2023)).toBe(31); // July
      expect(getDaysInMonth(8, 2023)).toBe(31); // August
      expect(getDaysInMonth(9, 2023)).toBe(30); // September
      expect(getDaysInMonth(10, 2023)).toBe(31); // October
      expect(getDaysInMonth(11, 2023)).toBe(30); // November
      expect(getDaysInMonth(12, 2023)).toBe(31); // December
    });

    it('should handle February in non-leap years', () => {
      expect(getDaysInMonth(2, 2023)).toBe(28);
      expect(getDaysInMonth(2, 2021)).toBe(28);
      expect(getDaysInMonth(2, 1900)).toBe(28); // Century non-leap year
    });

    it('should handle February in leap years', () => {
      expect(getDaysInMonth(2, 2024)).toBe(29);
      expect(getDaysInMonth(2, 2020)).toBe(29);
      expect(getDaysInMonth(2, 2000)).toBe(29); // Century leap year
    });

    it('should handle invalid month inputs', () => {
      expect(() => getDaysInMonth(0, 2023)).toThrow();
      expect(() => getDaysInMonth(13, 2023)).toThrow();
      expect(() => getDaysInMonth(-1, 2023)).toThrow();
    });
  });

  describe('formatTimeUnit', () => {
    it('should format single units correctly', () => {
      expect(formatTimeUnit(1, 'year')).toBe('1 year');
      expect(formatTimeUnit(1, 'month')).toBe('1 month');
      expect(formatTimeUnit(1, 'day')).toBe('1 day');
      expect(formatTimeUnit(1, 'hour')).toBe('1 hour');
      expect(formatTimeUnit(1, 'minute')).toBe('1 minute');
      expect(formatTimeUnit(1, 'second')).toBe('1 second');
    });

    it('should format plural units correctly', () => {
      expect(formatTimeUnit(2, 'year')).toBe('2 years');
      expect(formatTimeUnit(5, 'month')).toBe('5 months');
      expect(formatTimeUnit(10, 'day')).toBe('10 days');
      expect(formatTimeUnit(24, 'hour')).toBe('24 hours');
      expect(formatTimeUnit(60, 'minute')).toBe('60 minutes');
      expect(formatTimeUnit(30, 'second')).toBe('30 seconds');
    });

    it('should handle zero values', () => {
      expect(formatTimeUnit(0, 'year')).toBe('0 years');
      expect(formatTimeUnit(0, 'day')).toBe('0 days');
    });

    it('should handle large numbers', () => {
      expect(formatTimeUnit(1000, 'day')).toBe('1000 days');
      expect(formatTimeUnit(999999, 'second')).toBe('999999 seconds');
    });
  });

  describe('validateTimestamp', () => {
    it('should validate correct timestamps', () => {
      expect(validateTimestamp(GAZA_WAR_START_TIMESTAMP)).toBe(true);
      expect(validateTimestamp(0)).toBe(true); // Unix epoch
      expect(validateTimestamp(Date.now() / 1000)).toBe(true);
    });

    it('should reject invalid timestamps', () => {
      expect(validateTimestamp(NaN)).toBe(false);
      expect(validateTimestamp(-1)).toBe(false);
      expect(validateTimestamp(Infinity)).toBe(false);
      expect(validateTimestamp(-Infinity)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(validateTimestamp(0.5)).toBe(true); // Fractional seconds are valid
      expect(validateTimestamp(Number.MAX_SAFE_INTEGER)).toBe(true);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle very large timestamp differences', () => {
      const start = 0; // Unix epoch
      const end = 2147483647; // Max 32-bit signed integer
      
      const result = calculateElapsedTime(start, end);
      
      expect(result.years).toBeGreaterThan(60);
      expect(result.totalDays).toBeGreaterThan(20000);
      expect(result.totalHours).toBeGreaterThan(500000);
    });

    it('should handle fractional timestamps correctly', () => {
      const start = 1696809120.5;
      const end = 1696809121.7;
      
      const result = calculateElapsedTime(start, end);
      
      expect(result.seconds).toBe(1);
      expect(result.minutes).toBe(0);
    });

    it('should handle timestamps at month boundaries', () => {
      // Test February to March transition
      const feb28 = new Date('2023-02-28T23:59:59Z').getTime() / 1000;
      const mar1 = new Date('2023-03-01T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(feb28, mar1);
      
      expect(result.days).toBe(0);
      expect(result.hours).toBe(0);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(1);
    });

    it('should handle year boundaries correctly', () => {
      // Test December 31 to January 1 transition
      const dec31 = new Date('2023-12-31T23:59:59Z').getTime() / 1000;
      const jan1 = new Date('2024-01-01T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(dec31, jan1);
      
      expect(result.years).toBe(0);
      expect(result.months).toBe(0);
      expect(result.days).toBe(0);
      expect(result.hours).toBe(0);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(1);
    });

    it('should handle daylight saving time transitions', () => {
      // Test around DST transition (though we use UTC, this tests robustness)
      const beforeDST = new Date('2023-03-12T06:00:00Z').getTime() / 1000;
      const afterDST = new Date('2023-03-12T08:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(beforeDST, afterDST);
      
      expect(result.hours).toBe(2);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(0);
    });

    it('should handle maximum safe integer timestamps', () => {
      const start = Number.MAX_SAFE_INTEGER - 1000;
      const end = Number.MAX_SAFE_INTEGER;
      
      expect(() => calculateElapsedTime(start, end)).not.toThrow();
    });
  });

  describe('Performance and stress tests', () => {
    it('should calculate elapsed time quickly for normal ranges', () => {
      const start = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, GAZA_WAR_START_TIMESTAMP + i);
      }
      
      const end = performance.now();
      const duration = end - start;
      
      // Should complete 1000 calculations in under 100ms
      expect(duration).toBeLessThan(100);
    });

    it('should handle rapid successive calls', () => {
      const baseTime = GAZA_WAR_START_TIMESTAMP;
      const results: TimeElapsed[] = [];
      
      for (let i = 0; i < 100; i++) {
        results.push(calculateElapsedTime(baseTime, baseTime + i));
      }
      
      // Verify results are consistent - total seconds should be increasing
      for (let i = 1; i < results.length; i++) {
        const prevTotal = results[i - 1].seconds + results[i - 1].minutes * 60 + results[i - 1].hours * 3600;
        const currTotal = results[i].seconds + results[i].minutes * 60 + results[i].hours * 3600;
        expect(currTotal).toBeGreaterThanOrEqual(prevTotal);
      }
    });
  });

  describe('Type safety and TypeScript integration', () => {
    it('should return correct TypeScript types', () => {
      const result = calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, GAZA_WAR_START_TIMESTAMP + 1);
      
      // Verify all properties exist and are numbers
      expect(typeof result.years).toBe('number');
      expect(typeof result.months).toBe('number');
      expect(typeof result.days).toBe('number');
      expect(typeof result.hours).toBe('number');
      expect(typeof result.minutes).toBe('number');
      expect(typeof result.seconds).toBe('number');
      expect(typeof result.totalDays).toBe('number');
      expect(typeof result.totalHours).toBe('number');
    });

    it('should work with TimeElapsed interface', () => {
      const result: TimeElapsed = calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, GAZA_WAR_START_TIMESTAMP + 3661);
      
      // Should have exactly 1 hour, 1 minute, 1 second
      expect(result.hours).toBe(1);
      expect(result.minutes).toBe(1);
      expect(result.seconds).toBe(1);
    });
  });

  describe('Integration tests', () => {
    it('should calculate elapsed time from Gaza war start to known date', () => {
      // Test with a known date: January 1, 2024, 00:00:00 UTC
      const jan1_2024 = new Date('2024-01-01T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, jan1_2024);
      
      // Should be approximately 2 months and some days
      expect(result.months).toBeGreaterThanOrEqual(2);
      expect(result.years).toBe(0);
    });

    it('should maintain accuracy over long periods', () => {
      // Test accuracy over a 10-year period
      const start = new Date('2020-01-01T00:00:00Z').getTime() / 1000;
      const end = new Date('2030-01-01T00:00:00Z').getTime() / 1000;
      
      const result = calculateElapsedTime(start, end);
      
      expect(result.years).toBe(10);
      expect(result.months).toBe(0);
      expect(result.days).toBe(0);
      expect(result.hours).toBe(0);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(0);
    });

    it('should handle real-time counter simulation', () => {
      // Simulate real-time updates
      const baseTime = GAZA_WAR_START_TIMESTAMP;
      
      for (let i = 0; i < 10; i++) {
        const currentTime = baseTime + i;
        const result = calculateElapsedTime(baseTime, currentTime);
        
        expect(result.seconds).toBe(i);
        expect(result.minutes).toBe(0);
        expect(result.hours).toBe(0);
        expect(result.days).toBe(0);
      }
    });

    it('should work correctly with all utility functions together', () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const result = calculateElapsedTime(GAZA_WAR_START_TIMESTAMP, currentTime);
      
      // Verify all helper functions work together
      expect(validateTimestamp(GAZA_WAR_START_TIMESTAMP)).toBe(true);
      expect(validateTimestamp(currentTime)).toBe(true);
      
      // Test formatting
      expect(formatTimeUnit(result.years, 'year')).toMatch(/^\d+ years?$/);
      expect(formatTimeUnit(result.months, 'month')).toMatch(/^\d+ months?$/);
      expect(formatTimeUnit(result.days, 'day')).toMatch(/^\d+ days?$/);
      
      // Test leap year and month calculations
      const currentDate = new Date(currentTime * 1000);
      const currentYear = currentDate.getUTCFullYear();
      expect(typeof isLeapYear(currentYear)).toBe('boolean');
      expect(getDaysInMonth(currentDate.getUTCMonth() + 1, currentYear)).toBeGreaterThan(27);
    });
  });
});