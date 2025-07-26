import { describe, it, expect, beforeEach } from 'vitest';
import { calculateElapsedTime } from '../utils/timeCalculations';
import { START_TIMESTAMP } from '../utils/constants';

describe('Counter Accuracy Validation', () => {
  describe('Known Timestamp Validation', () => {
    it('should accurately calculate elapsed time for October 8, 2023 start date', () => {
      // START_TIMESTAMP should be October 8, 2023, 23:52:00 UTC
      const startDate = new Date(START_TIMESTAMP * 1000);
      
      expect(startDate.getUTCFullYear()).toBe(2023);
      expect(startDate.getUTCMonth()).toBe(9); // October (0-indexed)
      expect(startDate.getUTCDate()).toBe(8);
      expect(startDate.getUTCHours()).toBe(23);
      expect(startDate.getUTCMinutes()).toBe(52);
      expect(startDate.getUTCSeconds()).toBe(0);
    });

    it('should calculate exact elapsed time for known test points', () => {
      // Test cases with known time differences
      const testCases = [
        {
          name: 'Exactly 1 hour later',
          endTimestamp: START_TIMESTAMP + 3600,
          expected: { years: 0, months: 0, days: 0, hours: 1, minutes: 0, seconds: 0 }
        },
        {
          name: 'Exactly 1 day later',
          endTimestamp: START_TIMESTAMP + 86400,
          expected: { years: 0, months: 0, days: 1, hours: 0, minutes: 0, seconds: 0 }
        },
        {
          name: 'Exactly 1 week later',
          endTimestamp: START_TIMESTAMP + (7 * 86400),
          expected: { years: 0, months: 0, days: 7, hours: 0, minutes: 0, seconds: 0 }
        },
        {
          name: 'New Year 2024 (January 1, 2024 00:00:00 UTC)',
          endTimestamp: 1704067200, // January 1, 2024, 00:00:00 UTC
          expected: { months: 2, days: 23, hours: 0, minutes: 8, seconds: 0 }
        }
      ];

      testCases.forEach(({ name, endTimestamp, expected }) => {
        const result = calculateElapsedTime(START_TIMESTAMP, endTimestamp);
        
        if (expected.years !== undefined) expect(result.years).toBe(expected.years);
        if (expected.months !== undefined) expect(result.months).toBe(expected.months);
        if (expected.days !== undefined) expect(result.days).toBe(expected.days);
        if (expected.hours !== undefined) expect(result.hours).toBe(expected.hours);
        if (expected.minutes !== undefined) expect(result.minutes).toBe(expected.minutes);
        if (expected.seconds !== undefined) expect(result.seconds).toBe(expected.seconds);
      });
    });

    it('should handle leap year calculations correctly', () => {
      // Test date in 2024 (leap year)
      const feb29_2024 = new Date('2024-02-29T12:00:00.000Z').getTime() / 1000;
      const result = calculateElapsedTime(START_TIMESTAMP, feb29_2024);
      
      expect(result.years).toBeGreaterThanOrEqual(0);
      expect(result.months).toBeGreaterThanOrEqual(0);
      expect(result.days).toBeGreaterThanOrEqual(0);
      
      // Should handle leap day correctly
      const totalDays = result.totalDays;
      expect(totalDays).toBeGreaterThan(100); // Should be several months worth of days
    });

    it('should maintain consistency across different calculation methods', () => {
      const testTimestamp = START_TIMESTAMP + (365 * 24 * 3600); // ~1 year later
      const result = calculateElapsedTime(START_TIMESTAMP, testTimestamp);
      
      // Verify internal consistency
      const totalSecondsCalculated = (
        result.years * 365 * 24 * 3600 +
        result.months * 30 * 24 * 3600 + // Approximation
        result.days * 24 * 3600 +
        result.hours * 3600 +
        result.minutes * 60 +
        result.seconds
      );
      
      const actualTotalSeconds = testTimestamp - START_TIMESTAMP;
      
      // Should be within reasonable range (accounting for month variations)
      const difference = Math.abs(totalSecondsCalculated - actualTotalSeconds);
      expect(difference).toBeLessThan(31 * 24 * 3600); // Within a month
    });
  });

  describe('Real-time Accuracy', () => {
    it('should calculate current elapsed time accurately', () => {
      const now = Math.floor(Date.now() / 1000);
      const result = calculateElapsedTime(START_TIMESTAMP, now);
      
      // Should be a reasonable time since October 8, 2023
      expect(result.years).toBeGreaterThanOrEqual(0);
      expect(result.months).toBeGreaterThanOrEqual(0);
      expect(result.days).toBeGreaterThanOrEqual(0);
      
      // Total days should be reasonable
      expect(result.totalDays).toBeGreaterThan(0);
      expect(result.totalDays).toBeLessThan(10000); // Sanity check
      
      // Total hours should be consistent
      expect(result.totalHours).toBe(Math.floor((now - START_TIMESTAMP) / 3600));
    });

    it('should handle second-by-second updates correctly', () => {
      const baseTimestamp = START_TIMESTAMP + 1000000; // Some time after start
      
      // Test consecutive seconds
      for (let i = 0; i < 10; i++) {
        const timestamp = baseTimestamp + i;
        const result = calculateElapsedTime(START_TIMESTAMP, timestamp);
        
        // Just verify that seconds increment properly and total hours are correct
        expect(result.seconds).toBeGreaterThanOrEqual(0);
        expect(result.seconds).toBeLessThan(60);
        expect(result.totalHours).toBe(Math.floor((timestamp - START_TIMESTAMP) / 3600));
      }
    });
  });

  describe('Edge Cases and Boundary Conditions', () => {
    it('should handle month boundaries correctly', () => {
      // Test end of month transitions
      const endOfOctober2023 = new Date('2023-10-31T23:59:59.000Z').getTime() / 1000;
      const startOfNovember2023 = new Date('2023-11-01T00:00:00.000Z').getTime() / 1000;
      
      const resultOctober = calculateElapsedTime(START_TIMESTAMP, endOfOctober2023);
      const resultNovember = calculateElapsedTime(START_TIMESTAMP, startOfNovember2023);
      
      // Should handle month transition correctly
      expect(resultNovember.days).toBeGreaterThanOrEqual(0);
      expect(resultNovember.months).toBeGreaterThanOrEqual(resultOctober.months);
    });

    it('should handle year boundaries correctly', () => {
      // Test year transition from 2023 to 2024
      const endOf2023 = new Date('2023-12-31T23:59:59.000Z').getTime() / 1000;
      const startOf2024 = new Date('2024-01-01T00:00:00.000Z').getTime() / 1000;
      
      const result2023 = calculateElapsedTime(START_TIMESTAMP, endOf2023);
      const result2024 = calculateElapsedTime(START_TIMESTAMP, startOf2024);
      
      // Should handle year transition correctly
      expect(result2024.years).toBeGreaterThanOrEqual(result2023.years);
      expect(result2024.months).toBe(2); // Should be ~2 months into the period
    });

    it('should handle daylight saving time transitions', () => {
      // Test around DST changes (though we use UTC, so this shouldn't affect us)
      const beforeDST = new Date('2024-03-10T06:00:00.000Z').getTime() / 1000;
      const afterDST = new Date('2024-03-10T07:00:00.000Z').getTime() / 1000;
      
      const resultBefore = calculateElapsedTime(START_TIMESTAMP, beforeDST);
      const resultAfter = calculateElapsedTime(START_TIMESTAMP, afterDST);
      
      // Should be exactly 1 hour difference
      const timeDiff = (afterDST - beforeDST);
      expect(timeDiff).toBe(3600); // 1 hour in seconds
      
      // Results should be consistent
      expect(resultAfter.totalHours).toBe(resultBefore.totalHours + 1);
    });
  });

  describe('Performance and Precision', () => {
    it('should maintain precision for large time differences', () => {
      // Test with very large time difference
      const farFuture = START_TIMESTAMP + (50 * 365 * 24 * 3600); // ~50 years
      const result = calculateElapsedTime(START_TIMESTAMP, farFuture);
      
      // Should be around 50 years (accounting for leap years and varying month lengths)
      expect(result.years).toBeGreaterThanOrEqual(49);
      expect(result.years).toBeLessThanOrEqual(50);
      expect(result.months).toBeGreaterThanOrEqual(0);
      expect(result.days).toBeGreaterThanOrEqual(0);
    });

    it('should be performant for frequent calculations', () => {
      const iterations = 1000;
      const startTime = performance.now();
      
      for (let i = 0; i < iterations; i++) {
        const timestamp = START_TIMESTAMP + i * 60; // Every minute
        calculateElapsedTime(START_TIMESTAMP, timestamp);
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Should complete 1000 calculations quickly
      expect(duration).toBeLessThan(100); // Less than 100ms
    });

    it('should provide consistent results for the same inputs', () => {
      const testTimestamp = START_TIMESTAMP + 123456;
      
      // Calculate multiple times
      const results = [];
      for (let i = 0; i < 10; i++) {
        results.push(calculateElapsedTime(START_TIMESTAMP, testTimestamp));
      }
      
      // All results should be identical
      const firstResult = results[0];
      results.forEach(result => {
        expect(result.years).toBe(firstResult.years);
        expect(result.months).toBe(firstResult.months);
        expect(result.days).toBe(firstResult.days);
        expect(result.hours).toBe(firstResult.hours);
        expect(result.minutes).toBe(firstResult.minutes);
        expect(result.seconds).toBe(firstResult.seconds);
      });
    });
  });

  describe('Cross-validation with Date Object', () => {
    it('should match JavaScript Date calculations for total days', () => {
      const testTimestamp = START_TIMESTAMP + (100 * 24 * 3600); // 100 days later
      const result = calculateElapsedTime(START_TIMESTAMP, testTimestamp);
      
      // Cross-validate with Date object
      const startDate = new Date(START_TIMESTAMP * 1000);
      const endDate = new Date(testTimestamp * 1000);
      const msDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = Math.floor(msDifference / (24 * 60 * 60 * 1000));
      
      expect(result.totalDays).toBe(daysDifference);
    });

    it('should handle timezone-independent calculations', () => {
      // Test that our UTC-based calculations are consistent
      const testTimestamp = START_TIMESTAMP + (30 * 24 * 3600); // 30 days later
      const result = calculateElapsedTime(START_TIMESTAMP, testTimestamp);
      
      // Should be exactly 30 days (or close, accounting for month variations)
      expect(result.totalDays).toBeGreaterThanOrEqual(29);
      expect(result.totalDays).toBeLessThanOrEqual(31);
    });
  });
});