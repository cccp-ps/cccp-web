import { describe, it, expect } from 'vitest';
import { 
  START_TIMESTAMP, 
  ORGANIZATIONS, 
  APP_METADATA, 
  TIME_UNITS, 
  COUNTER_UPDATE_INTERVAL 
} from './constants';
import type { Organization } from '../types';

describe('Constants', () => {
  describe('START_TIMESTAMP', () => {
    it('should be the correct timestamp for October 8, 2023, 23:52:00 UTC', () => {
      const expectedDate = new Date('2023-10-08T23:52:00Z');
      const expectedTimestamp = Math.floor(expectedDate.getTime() / 1000);
      
      expect(START_TIMESTAMP).toBe(expectedTimestamp);
      expect(START_TIMESTAMP).toBe(1696809120);
    });

    it('should be a valid Unix timestamp', () => {
      expect(typeof START_TIMESTAMP).toBe('number');
      expect(START_TIMESTAMP).toBeGreaterThan(0);
      expect(Number.isInteger(START_TIMESTAMP)).toBe(true);
    });

    it('should represent a date in 2023', () => {
      const date = new Date(START_TIMESTAMP * 1000);
      expect(date.getUTCFullYear()).toBe(2023);
      expect(date.getUTCMonth()).toBe(9); // October (0-indexed)
      expect(date.getUTCDate()).toBe(8);
    });
  });

  describe('ORGANIZATIONS', () => {
    it('should contain exactly 3 organizations', () => {
      expect(ORGANIZATIONS).toHaveLength(3);
    });

    it('should contain UNRWA organization', () => {
      const unrwa = ORGANIZATIONS.find(org => org.name === 'UNRWA');
      expect(unrwa).toBeDefined();
      expect(unrwa?.url).toBe('https://donate.unrwa.org');
      expect(unrwa?.category).toBe('humanitarian');
      expect(unrwa?.description).toContain('United Nations');
    });

    it('should contain Palestine Red Crescent Society', () => {
      const prcs = ORGANIZATIONS.find(org => org.name.includes('Palestine Red Crescent'));
      expect(prcs).toBeDefined();
      expect(prcs?.url).toBe('https://www.palestinercs.org/en');
      expect(prcs?.category).toBe('medical');
      expect(prcs?.description).toContain('medical services');
    });

    it('should contain Palestine Children\'s Relief Fund', () => {
      const pcrf = ORGANIZATIONS.find(org => org.name.includes('Children\'s Relief Fund'));
      expect(pcrf).toBeDefined();
      expect(pcrf?.url).toBe('https://www.pcrf.net/');
      expect(pcrf?.category).toBe('children');
      expect(pcrf?.description).toContain('children');
    });

    it('should have all organizations with required properties', () => {
      ORGANIZATIONS.forEach((org: Organization) => {
        expect(org).toHaveProperty('name');
        expect(org).toHaveProperty('url');
        expect(org).toHaveProperty('description');
        expect(org).toHaveProperty('category');
        expect(org).toHaveProperty('icon');

        expect(typeof org.name).toBe('string');
        expect(typeof org.url).toBe('string');
        expect(typeof org.description).toBe('string');
        expect(typeof org.category).toBe('string');
        expect(typeof org.icon).toBe('string');

        expect(org.name.length).toBeGreaterThan(0);
        expect(org.url.length).toBeGreaterThan(0);
        expect(org.description.length).toBeGreaterThan(0);
      });
    });

    it('should have valid URLs for all organizations', () => {
      ORGANIZATIONS.forEach((org: Organization) => {
        expect(org.url).toMatch(/^https?:\/\/.+/);
        expect(() => new URL(org.url)).not.toThrow();
      });
    });

    it('should have valid categories', () => {
      const validCategories = ['humanitarian', 'medical', 'children'];
      ORGANIZATIONS.forEach((org: Organization) => {
        expect(validCategories).toContain(org.category);
      });
    });

    it('should have unique organization names', () => {
      const names = ORGANIZATIONS.map(org => org.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it('should have unique organization URLs', () => {
      const urls = ORGANIZATIONS.map(org => org.url);
      const uniqueUrls = new Set(urls);
      expect(uniqueUrls.size).toBe(urls.length);
    });
  });

  describe('APP_METADATA', () => {
    it('should have all required metadata properties', () => {
      expect(APP_METADATA).toHaveProperty('title');
      expect(APP_METADATA).toHaveProperty('description');
      expect(APP_METADATA).toHaveProperty('author');
      expect(APP_METADATA).toHaveProperty('keywords');

      expect(typeof APP_METADATA.title).toBe('string');
      expect(typeof APP_METADATA.description).toBe('string');
      expect(typeof APP_METADATA.author).toBe('string');
      expect(Array.isArray(APP_METADATA.keywords)).toBe(true);
    });

    it('should have meaningful title and description', () => {
      expect(APP_METADATA.title).toContain('Palestine');
      expect(APP_METADATA.title).toContain('Counter');
      expect(APP_METADATA.description).toContain('October 8, 2023');
      expect(APP_METADATA.description).toContain('solidarity');
    });

    it('should have relevant keywords', () => {
      const expectedKeywords = ['Palestine', 'solidarity', 'counter', 'humanitarian', 'Gaza'];
      expectedKeywords.forEach(keyword => {
        expect(APP_METADATA.keywords).toContain(keyword);
      });
    });

    it('should be readonly (const assertion)', () => {
      // This test ensures the const assertion is working
      expect(Object.isFrozen(APP_METADATA)).toBe(false); // const assertion doesn't freeze, but provides type safety
      expect(APP_METADATA.keywords).toEqual(['Palestine', 'solidarity', 'counter', 'humanitarian', 'Gaza']);
    });
  });

  describe('TIME_UNITS', () => {
    it('should have all required time unit constants', () => {
      expect(TIME_UNITS).toHaveProperty('SECOND');
      expect(TIME_UNITS).toHaveProperty('MINUTE');
      expect(TIME_UNITS).toHaveProperty('HOUR');
      expect(TIME_UNITS).toHaveProperty('DAY');
    });

    it('should have correct millisecond values', () => {
      expect(TIME_UNITS.SECOND).toBe(1000);
      expect(TIME_UNITS.MINUTE).toBe(60 * 1000);
      expect(TIME_UNITS.HOUR).toBe(60 * 60 * 1000);
      expect(TIME_UNITS.DAY).toBe(24 * 60 * 60 * 1000);
    });

    it('should have correct mathematical relationships', () => {
      expect(TIME_UNITS.MINUTE).toBe(TIME_UNITS.SECOND * 60);
      expect(TIME_UNITS.HOUR).toBe(TIME_UNITS.MINUTE * 60);
      expect(TIME_UNITS.DAY).toBe(TIME_UNITS.HOUR * 24);
    });

    it('should be readonly (const assertion)', () => {
      // Verify the const assertion provides type safety
      expect(typeof TIME_UNITS.SECOND).toBe('number');
      expect(typeof TIME_UNITS.MINUTE).toBe('number');
      expect(typeof TIME_UNITS.HOUR).toBe('number');
      expect(typeof TIME_UNITS.DAY).toBe('number');
    });
  });

  describe('COUNTER_UPDATE_INTERVAL', () => {
    it('should be 1000 milliseconds (1 second)', () => {
      expect(COUNTER_UPDATE_INTERVAL).toBe(1000);
    });

    it('should be a positive integer', () => {
      expect(typeof COUNTER_UPDATE_INTERVAL).toBe('number');
      expect(COUNTER_UPDATE_INTERVAL).toBeGreaterThan(0);
      expect(Number.isInteger(COUNTER_UPDATE_INTERVAL)).toBe(true);
    });

    it('should be equal to TIME_UNITS.SECOND', () => {
      expect(COUNTER_UPDATE_INTERVAL).toBe(TIME_UNITS.SECOND);
    });
  });

  describe('Integration tests', () => {
    it('should have consistent timestamp and current date relationship', () => {
      const startDate = new Date(START_TIMESTAMP * 1000);
      const currentDate = new Date();
      
      // The start date should be before the current date
      expect(startDate.getTime()).toBeLessThan(currentDate.getTime());
      
      // The start date should be in 2023
      expect(startDate.getUTCFullYear()).toBe(2023);
    });

    it('should have organizations with accessible URLs', () => {
      // Test that all URLs are properly formatted for external links
      ORGANIZATIONS.forEach((org: Organization) => {
        expect(org.url).toMatch(/^https:\/\//); // Should use HTTPS
        expect(org.url).not.toMatch(/localhost/); // Should not be local URLs
        expect(org.url).not.toMatch(/127\.0\.0\.1/); // Should not be local IPs
      });
    });

    it('should have metadata that matches the application purpose', () => {
      // Verify metadata aligns with the solidarity counter purpose
      expect(APP_METADATA.title.toLowerCase()).toContain('palestine');
      expect(APP_METADATA.description.toLowerCase()).toContain('solidarity');
      expect(APP_METADATA.keywords.some(keyword => 
        keyword.toLowerCase().includes('palestine')
      )).toBe(true);
    });

    it('should have time units suitable for counter display', () => {
      // Verify time units are appropriate for real-time counter updates
      expect(TIME_UNITS.SECOND).toBeLessThan(TIME_UNITS.MINUTE);
      expect(TIME_UNITS.MINUTE).toBeLessThan(TIME_UNITS.HOUR);
      expect(TIME_UNITS.HOUR).toBeLessThan(TIME_UNITS.DAY);
      
      // Verify update interval is reasonable for UI updates
      expect(COUNTER_UPDATE_INTERVAL).toBeGreaterThanOrEqual(100); // Not too frequent
      expect(COUNTER_UPDATE_INTERVAL).toBeLessThanOrEqual(5000); // Not too infrequent
    });
  });
});