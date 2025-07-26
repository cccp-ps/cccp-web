// TypeScript type definitions for the Palestine Solidarity Counter

export interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number; // For alternative display
  totalHours: number; // For alternative display
}

export interface TimeCalculationInput {
  startTimestamp: number; // UNIX timestamp
  currentTimestamp: number; // UNIX timestamp
}

export interface Organization {
  name: string;
  url: string;
  description: string;
  icon?: string;
  category: 'humanitarian' | 'medical' | 'children';
}

export interface LayoutProps {
  title: string;
  description: string;
}