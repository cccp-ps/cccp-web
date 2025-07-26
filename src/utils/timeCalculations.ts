import type { TimeElapsed } from '../types';

/**
 * Validates if a timestamp is valid
 * @param timestamp - Unix timestamp to validate
 * @returns true if valid, false otherwise
 */
export function validateTimestamp(timestamp: number): boolean {
  return (
    !isNaN(timestamp) &&
    isFinite(timestamp) &&
    timestamp >= 0
  );
}

/**
 * Determines if a given year is a leap year
 * @param year - The year to check
 * @returns true if leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  // A year is a leap year if:
  // - It's divisible by 4 AND
  // - If it's divisible by 100, it must also be divisible by 400
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

/**
 * Gets the number of days in a specific month and year
 * @param month - Month (1-12)
 * @param year - Year
 * @returns Number of days in the month
 */
export function getDaysInMonth(month: number, year: number): number {
  if (month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}. Month must be between 1 and 12.`);
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  
  return daysInMonth[month - 1];
}

/**
 * Formats a time unit with proper singular/plural form
 * @param value - The numeric value
 * @param unit - The time unit name
 * @returns Formatted string
 */
export function formatTimeUnit(value: number, unit: string): string {
  const pluralUnit = value === 1 ? unit : `${unit}s`;
  return `${value} ${pluralUnit}`;
}

/**
 * Calculates elapsed time between two Unix timestamps
 * @param startTimestamp - Start time as Unix timestamp
 * @param endTimestamp - End time as Unix timestamp
 * @returns TimeElapsed object with years, months, days, hours, minutes, seconds
 */
export function calculateElapsedTime(startTimestamp: number, endTimestamp: number): TimeElapsed {
  // Validate inputs
  if (!validateTimestamp(startTimestamp)) {
    throw new Error(`Invalid start timestamp: ${startTimestamp}`);
  }
  if (!validateTimestamp(endTimestamp)) {
    throw new Error(`Invalid end timestamp: ${endTimestamp}`);
  }

  // Handle negative time differences
  if (endTimestamp < startTimestamp) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
      totalHours: 0
    };
  }

  // Calculate total difference in seconds
  const totalSeconds = endTimestamp - startTimestamp;
  const totalDays = Math.floor(totalSeconds / 86400);
  const totalHours = Math.floor(totalSeconds / 3600);

  // Convert timestamps to Date objects in UTC
  const startDate = new Date(startTimestamp * 1000);
  const endDate = new Date(endTimestamp * 1000);

  // Start with the start date and incrementally add time units
  let currentDate = new Date(startDate);
  let years = 0;
  let months = 0;
  let days = 0;

  // Calculate years
  while (true) {
    const nextYear = new Date(currentDate);
    nextYear.setUTCFullYear(nextYear.getUTCFullYear() + 1);
    
    if (nextYear <= endDate) {
      years++;
      currentDate = nextYear;
    } else {
      break;
    }
  }

  // Calculate months
  while (true) {
    const nextMonth = new Date(currentDate);
    nextMonth.setUTCMonth(nextMonth.getUTCMonth() + 1);
    
    if (nextMonth <= endDate) {
      months++;
      currentDate = nextMonth;
    } else {
      break;
    }
  }

  // Calculate remaining days
  while (true) {
    const nextDay = new Date(currentDate);
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);
    
    if (nextDay <= endDate) {
      days++;
      currentDate = nextDay;
    } else {
      break;
    }
  }

  // Calculate remaining hours, minutes, seconds
  const remainingMilliseconds = endDate.getTime() - currentDate.getTime();
  const remainingSeconds = Math.floor(remainingMilliseconds / 1000);
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    totalHours
  };
}