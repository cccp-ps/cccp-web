// Basic test to verify testing setup
import { describe, it, expect } from 'vitest';

describe('Test Setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true);
  });

  it('should have access to TypeScript types', () => {
    const testNumber: number = 42;
    expect(typeof testNumber).toBe('number');
  });
});