/**
 * CCCP.PS - 1987 First Intifada Timeline
 * Documentation of the First Palestinian Intifada (Uprising)
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'human_rights' ? 'high' : type === 'academic' ? 'high' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1987-12-08-intifada-begins',
    title: 'First Intifada Begins',
    description: 'Mass Palestinian uprising against Israeli occupation begins in Gaza and spreads to the West Bank, characterized by civil disobedience and stone-throwing.',
    timestamp: 565747200, // December 8, 1987
    dateString: 'December 8, 1987',
    timeString: '14:00',
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
    id: '1988-11-15-palestinian-declaration',
    title: 'Palestinian Declaration of Independence',
    description: 'PLO declares Palestinian independence at the Palestine National Council meeting in Algiers, recognizing UN Resolution 242.',
    timestamp: 595555200, // November 15, 1988
    dateString: 'November 15, 1988',
    timeString: '16:00',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'PLO Archives (Placeholder)',
        '#',
        'government'
      )
    ]
  },
  {
    id: '1991-10-30-madrid-conference',
    title: 'Madrid Peace Conference',
    description: 'International peace conference begins, marking the first direct negotiations between Israelis and Palestinians.',
    timestamp: 688665600, // October 30, 1991
    dateString: 'October 30, 1991',
    timeString: '10:00',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'International Archives (Placeholder)',
        '#',
        'international_org'
      )
    ]
  }
];

const timeline1987: Timeline = {
  id: '1987',
  name: 'First Intifada (1987-1993)',
  description: 'Documentation of the First Palestinian Intifada, a popular uprising against Israeli occupation characterized by civil disobedience.',
  year: 1987,
  slug: 'first-intifada-1987',
  status: 'historical',
  startTimestamp: 565747200, // December 8, 1987
  endTimestamp: 747414000, // September 13, 1993 (Oslo Accords)
  theme: {
    primary: 'purple-600',
    secondary: 'purple-400',
    gradient: ['from-purple-600/20', 'to-purple-800/20'],
    border: 'purple-600/30',
    text: 'purple-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 181666800, // Approximately 5 years and 9 months
    startTimestamp: 565747200,
    endTimestamp: 747414000,
    keyOutcomes: [
      'International recognition of Palestinian rights',
      'PLO recognition of Israel\'s right to exist',
      'Madrid Peace Conference initiates direct talks',
      'Led to Oslo Accords process'
    ]
  },
  context: 'The First Intifada was a largely non-violent Palestinian uprising against Israeli occupation. It marked a shift from external Palestinian resistance to grassroots popular resistance within the occupied territories, ultimately leading to international recognition and the Oslo peace process.'
};

export default timeline1987; 