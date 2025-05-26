/**
 * CCCP.PS - 1948 Nakba Timeline
 * Historical documentation of the Palestinian Nakba and establishment of Israel
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'academic' ? 'high' : type === 'human_rights' ? 'high' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1948-04-09-deir-yassin',
    title: 'Deir Yassin Massacre',
    description: 'Zionist paramilitary forces killed over 100 Palestinian civilians in the village of Deir Yassin, marking a significant escalation in ethnic cleansing operations.',
    timestamp: -685756800, // April 9, 1948
    dateString: 'April 9, 1948',
    timeString: '04:00',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Academic Source (Placeholder)',
        '#',
        'academic'
      )
    ]
  },
  {
    id: '1948-05-14-israel-declaration',
    title: 'Israeli Independence Declaration',
    description: 'David Ben-Gurion declared the establishment of the State of Israel, leading to immediate regional war and accelerated Palestinian displacement.',
    timestamp: -684633600, // May 14, 1948
    dateString: 'May 14, 1948',
    timeString: '16:00',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Academic Source (Placeholder)',
        '#',
        'academic'
      )
    ]
  },
  {
    id: '1948-07-11-first-truce',
    title: 'First Arab-Israeli War Truce',
    description: 'UN-mediated ceasefire temporarily halted hostilities, but displacement of Palestinians continued.',
    timestamp: -679795200, // July 11, 1948
    dateString: 'July 11, 1948',
    timeString: '18:00',
    category: 'ceasefire',
    significance: 'major',
    sources: [
      createSource(
        'UN Archives (Placeholder)',
        '#',
        'international_org'
      )
    ]
  }
];

const timeline1948: Timeline = {
  id: '1948',
  name: 'The Nakba (1948)',
  description: 'Historical documentation of the Palestinian catastrophe, mass displacement, and the establishment of Israel.',
  year: 1948,
  slug: 'nakba-1948',
  status: 'historical',
  startTimestamp: -694224000, // January 1, 1948
  endTimestamp: -662601600, // December 31, 1948
  theme: {
    primary: 'orange-600',
    secondary: 'yellow-500',
    gradient: ['from-orange-600/20', 'to-yellow-500/20'],
    border: 'orange-600/30',
    text: 'orange-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 31536000, // 1 year in seconds
    startTimestamp: -694224000,
    endTimestamp: -662601600,
    keyOutcomes: [
      'Over 750,000 Palestinians displaced',
      'Approximately 400 Palestinian villages destroyed',
      'Establishment of Israel',
      'Beginning of Palestinian refugee crisis'
    ]
  },
  context: 'The Nakba (Arabic for "catastrophe") refers to the mass displacement and dispossession of Palestinians during the 1948 Arab-Israeli War. This timeline documents key events during this foundational period of the Palestinian-Israeli conflict.'
};

export default timeline1948; 