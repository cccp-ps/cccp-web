/**
 * CCCP.PS - 2023-Present Timeline
 * Current conflict events starting with Al-Aqsa Flood operation
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'human_rights' ? 'high' : type === 'solidarity' ? 'medium' : 'high'
});

const events: TimelineEvent[] = [
  {
    id: '2023-10-07-aqsa-flood',
    title: 'Hamas Insurgence (al-Aqsa Flood)',
    description: 'The beginning of the current escalation in Gaza and the West Bank.',
    timestamp: 1696656600,
    dateString: 'October 7, 2023',
    timeString: '05:30 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/7/what-happened-in-israel-a-breakdown-of-how-the-hamas-attack-unfolded',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/content/hamas-fighters-gaza-storm-israel-capture-and-kill-soldiers/38631',
        'solidarity'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/mde15-8803-2024-en/',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-10-27-ground-invasion',
    title: 'Israel Ground Invasion',
    description: 'Israel began its ground invasion of Gaza, escalating the conflict significantly.',
    timestamp: 1698434400,
    dateString: 'October 27, 2023',
    timeString: '19:20 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/27/israel-conducts-second-ground-raid-into-northern-gaza-with-air-support',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/blogs/ali-abunimah/gaza-communications-blackout-israel-intensifies-attack',
        'solidarity'
      ),
      createSource(
        'Democracy Now!',
        'https://www.democracynow.org/2023/10/27/headlines',
        'news'
      )
    ]
  },
  {
    id: '2023-11-24-ceasefire-begins',
    title: 'First Major Ceasefire Begins',
    description: 'A temporary ceasefire began, offering brief hope for peace and humanitarian aid delivery.',
    timestamp: 1700805600,
    dateString: 'November 24, 2023',
    timeString: '06:00 UTC',
    category: 'ceasefire',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/11/24/first-truce-begins-in-israels-war-on-gaza',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/updates/2023/11/24',
        'solidarity'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/petition/demand-a-ceasefire-by-all-parties-to-end-civilian-suffering/',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-12-01-ceasefire-ends',
    title: 'First Ceasefire Ends',
    description: 'The brief ceasefire collapsed, and hostilities resumed with devastating consequences.',
    timestamp: 1701403200,
    dateString: 'December 1, 2023',
    timeString: '04:00 UTC',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/12/1/the-israel-hamas-truce-has-ended-what-we-know-so-far',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/updates/2023/12/1',
        'solidarity'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2023/12/israel-opt-urgent-need-for-a-sustained-ceasefire-to-end-civilian-bloodshed-and-mass-suffering-as-fighting-resumes/',
        'human_rights'
      )
    ]
  },
  {
    id: '2025-01-19-ceasefire-agreement',
    title: 'Ceasefire Agreement',
    description: 'A new ceasefire agreement was reached, bringing hope for lasting peace.',
    timestamp: 1737244800,
    dateString: 'January 19, 2025',
    timeString: '00:00 UTC',
    category: 'ceasefire',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2025/1/19/israel-hamas-ceasefire-takes-effect-in-gaza',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/blogs/tamara-nassar/day-1-gaza-ceasefire',
        'solidarity'
      ),
      createSource(
        'Democracy Now!',
        'https://www.democracynow.org/2025/1/16/headlines/ceasefire_terms_include_prisoner_exchange_surge_of_aid_into_gaza_israeli_withdrawal',
        'news'
      )
    ]
  },
  {
    id: '2025-03-18-ceasefire-collapses',
    title: 'Ceasefire Collapses',
    description: 'The ceasefire agreement collapsed, demonstrating the fragility of peace in the region.',
    timestamp: 1742256000,
    dateString: 'March 18, 2025',
    timeString: '00:00 UTC',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2025/3/18/why-did-israel-break-the-ceasefire-in-gaza',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/gaza-ceasefire',
        'solidarity'
      ),
      createSource(
        'Democracy Now!',
        'https://www.democracynow.org/2025/3/18/headlines',
        'news'
      )
    ]
  }
];

const timeline2023: Timeline = {
  id: '2023',
  name: 'Palestine Under Siege (2023-Present)',
  description: 'Live timeline tracking the ongoing humanitarian crisis and civilian impact in occupied Palestine, beginning with the Al-Aqsa Flood operation.',
  year: 2023,
  slug: '2023-present',
  status: 'ongoing',
  startTimestamp: 1696656600, // October 7, 2023
  endTimestamp: undefined, // Ongoing
  theme: {
    primary: 'red-500',
    secondary: 'green-500',
    gradient: ['from-red-500/20', 'to-red-600/20'],
    border: 'red-500/30',
    text: 'red-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: Math.floor(Date.now() / 1000) - 1696656600,
    startTimestamp: 1696656600,
    keyOutcomes: [
      'Ongoing humanitarian crisis in Gaza',
      'Multiple ceasefire attempts and failures', 
      'International diplomatic efforts continue',
      'Significant civilian casualties on both sides'
    ]
  },
  context: 'This timeline tracks the current escalation in Palestine/Israel that began with Hamas\'s Al-Aqsa Flood operation on October 7, 2023. The conflict has resulted in a severe humanitarian crisis, particularly in Gaza, with ongoing international efforts to broker lasting peace.'
};

export default timeline2023; 