/**
 * CCCP.PS - 2000 Second Intifada Timeline
 * Documentation of the Al-Aqsa Intifada (Second Palestinian Uprising)
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
    id: '2000-09-28-sharon-visit',
    title: 'Ariel Sharon\'s Temple Mount Visit',
    description: 'Israeli opposition leader Ariel Sharon visits the Temple Mount/Haram al-Sharif with heavy security, sparking widespread Palestinian protests.',
    timestamp: 970099200, // September 28, 2000
    dateString: 'September 28, 2000',
    timeString: '07:30',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'News Archive (Placeholder)',
        '#',
        'news'
      )
    ]
  },
  {
    id: '2000-09-30-mohammed-al-durrah',
    title: 'Death of Mohammed al-Durrah',
    description: 'Twelve-year-old Mohammed al-Durrah is killed in crossfire between Israeli forces and Palestinian gunmen, becoming a symbol of the intifada.',
    timestamp: 970272000, // September 30, 2000
    dateString: 'September 30, 2000',
    timeString: '15:00',
    category: 'humanitarian',
    significance: 'critical',
    sources: [
      createSource(
        'Human Rights Report (Placeholder)',
        '#',
        'human_rights'
      )
    ]
  },
  {
    id: '2002-03-27-passover-massacre',
    title: 'Passover Massacre',
    description: 'Suicide bombing at Park Hotel in Netanya kills 30 Israeli civilians, leading to Israeli military operation "Defensive Shield."',
    timestamp: 1017187200, // March 27, 2002
    dateString: 'March 27, 2002',
    timeString: '19:30',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'News Archive (Placeholder)',
        '#',
        'news'
      )
    ]
  },
  {
    id: '2005-01-09-abbas-elected',
    title: 'Mahmoud Abbas Elected',
    description: 'Mahmoud Abbas is elected Palestinian Authority President, signaling potential for renewed peace negotiations.',
    timestamp: 1105228800, // January 9, 2005
    dateString: 'January 9, 2005',
    timeString: '20:00',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Electoral Commission (Placeholder)',
        '#',
        'government'
      )
    ]
  }
];

const timeline2000: Timeline = {
  id: '2000',
  name: 'Second Intifada (2000-2005)',
  description: 'Documentation of the Al-Aqsa Intifada, marked by increased violence and the breakdown of the Oslo peace process.',
  year: 2000,
  slug: 'second-intifada-2000',
  status: 'historical',
  startTimestamp: 970099200, // September 28, 2000
  endTimestamp: 1107734400, // February 8, 2005 (Sharm el-Sheikh Summit)
  theme: {
    primary: 'red-800',
    secondary: 'red-600',
    gradient: ['from-red-800/20', 'to-red-900/20'],
    border: 'red-800/30',
    text: 'red-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 137635200, // Approximately 4 years and 4 months
    startTimestamp: 970099200,
    endTimestamp: 1107734400,
    keyOutcomes: [
      'Collapse of Oslo peace process',
      'Construction of separation barrier begins',
      'Israeli withdrawal from Gaza (2005)',
      'Over 3,000 Palestinian and 1,000 Israeli deaths'
    ]
  },
  context: 'The Second Intifada, also known as the Al-Aqsa Intifada, was characterized by increased violence compared to the first uprising. It marked the collapse of the Oslo peace process and led to significant military operations, suicide bombings, and civilian casualties on both sides.'
};

export default timeline2000; 