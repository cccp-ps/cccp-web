import type { Organization } from '../types/index.js';

// Start timestamp: October 8, 2023, 23:52:00 UTC
// When Israel declared war on Gaza
export const START_TIMESTAMP = 1696809120;

// Organization data for donation section
export const ORGANIZATIONS: Organization[] = [
  {
    name: 'UNRWA',
    url: 'https://donate.unrwa.org',
    description: 'United Nations Relief and Works Agency for Palestine Refugees',
    category: 'humanitarian',
    icon: 'lucide:heart'
  },
  {
    name: 'Palestine Red Crescent Society (PRCS)',
    url: 'https://www.palestinercs.org/en',
    description: 'Emergency medical services and humanitarian aid in Palestine',
    category: 'medical',
    icon: 'lucide:cross'
  },
  {
    name: 'Palestine Children\'s Relief Fund (PCRF)',
    url: 'https://www.pcrf.net/',
    description: 'Medical care and humanitarian relief for Palestinian children',
    category: 'children',
    icon: 'lucide:baby'
  }
];

// Application metadata constants
export const APP_METADATA = {
  title: 'Palestine Solidarity Counter',
  description: 'Real-time counter showing elapsed time since October 8, 2023 - Standing in solidarity with Palestinian victims',
  author: 'Palestine Solidarity Counter',
  keywords: ['Palestine', 'solidarity', 'counter', 'humanitarian', 'Gaza']
} as const;

// Time formatting constants
export const TIME_UNITS = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000
} as const;

// Update interval for real-time counter (in milliseconds)
export const COUNTER_UPDATE_INTERVAL = 1000;