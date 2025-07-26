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

// Component prop types
export interface CounterProps {
  startTimestamp?: number;
  updateInterval?: number;
}

export interface ContextSectionProps {
  className?: string;
}

export interface DonationSectionProps {
  organizations?: Organization[];
  className?: string;
}

// State types for components
export interface CounterState {
  currentTime: Date;
  elapsedTime: TimeElapsed;
  isActive: boolean;
}

// Utility types
export type TimeUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds';

export type OrganizationCategory = 'humanitarian' | 'medical' | 'children';

// Color palette type for design system
export interface ColorPalette {
  palestineRed: string;
  palestineWhite: string;
  palestineBlack: string;
  palestineGreen: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

// Responsive breakpoint types
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}