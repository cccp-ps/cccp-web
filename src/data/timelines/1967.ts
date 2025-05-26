/**
 * CCCP.PS - 1967 Six Day War Timeline
 * Documentation of the Six Day War and beginning of occupation of West Bank and Gaza
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'academic' ? 'high' : type === 'international_org' ? 'high' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1967-06-05-war-begins',
    title: 'Six Day War Begins',
    description: 'Israel launched preemptive strikes against Egyptian airfields, beginning the Six Day War.',
    timestamp: -79833600, // June 5, 1967
    dateString: 'June 5, 1967',
    timeString: '07:45',
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
    id: '1967-06-07-jerusalem-occupation',
    title: 'Jerusalem Occupation',
    description: 'Israeli forces captured East Jerusalem and the West Bank, beginning the occupation that continues today.',
    timestamp: -79660800, // June 7, 1967
    dateString: 'June 7, 1967',
    timeString: '10:00',
    category: 'displacement',
    significance: 'critical',
    sources: [
      createSource(
        'UN Records (Placeholder)',
        '#',
        'international_org'
      )
    ]
  },
  {
    id: '1967-06-10-war-ends',
    title: 'Ceasefire Declared',
    description: 'UN-brokered ceasefire ended the Six Day War, with Israel occupying West Bank, Gaza Strip, Sinai Peninsula, and Golan Heights.',
    timestamp: -79401600, // June 10, 1967
    dateString: 'June 10, 1967',
    timeString: '18:30',
    category: 'ceasefire',
    significance: 'critical',
    sources: [
      createSource(
        'UN Archives (Placeholder)',
        '#',
        'international_org'
      )
    ]
  }
];

const timeline1967: Timeline = {
  id: '1967',
  name: 'Six Day War (1967)',
  description: 'Documentation of the 1967 war that resulted in Israeli occupation of the West Bank, Gaza Strip, and East Jerusalem.',
  year: 1967,
  slug: 'six-day-war-1967',
  status: 'historical',
  startTimestamp: -79833600, // June 5, 1967
  endTimestamp: -79401600, // June 10, 1967
  theme: {
    primary: 'blue-600',
    secondary: 'white',
    gradient: ['from-blue-600/20', 'to-blue-800/20'],
    border: 'blue-600/30',
    text: 'blue-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 432000, // 5 days in seconds
    startTimestamp: -79833600,
    endTimestamp: -79401600,
    keyOutcomes: [
      'Israeli occupation of West Bank and Gaza begins',
      'East Jerusalem annexed by Israel',
      'Over 300,000 Palestinian refugees created',
      'UN Resolution 242 calling for withdrawal'
    ]
  },
  context: 'The Six Day War fundamentally changed the geography of the Palestinian-Israeli conflict. Israel\'s victory resulted in the occupation of the West Bank, Gaza Strip, and East Jerusalem, territories that remain under occupation today.'
};

export default timeline1967; 