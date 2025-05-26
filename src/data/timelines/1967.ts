/**
 * CCCP.PS - 1967 Six Day War Timeline
 * A Palestinian solidarity perspective on the Six Day War and the beginning of occupation
 * Based on analysis from Ilan Pappé, Norman Finkelstein, and Edward Said
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'academic' ? 'high' : type === 'international_org' ? 'high' : type === 'solidarity' ? 'medium' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1967-06-05-israeli-air-strikes',
    title: 'Israeli Preemptive Air Strikes Against Egypt',
    description: 'Israel launched coordinated air strikes against Egyptian airfields, destroying most of Egypt\'s air force on the ground. This marked the beginning of what Palestinians call the "Naksa" (setback), challenging the narrative of defensive war.',
    timestamp: -81273600, // June 5, 1967 00:00 UTC
    dateString: 'June 5, 1967',
    timeString: '07:45 Local',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'The Cairo Review - Ilan Pappé: Myths of the Six-Day War',
        'https://www.thecairoreview.com/wp-content/uploads/2017/05/cr25-pappe.pdf',
        'academic'
      ),
      createSource(
        'Norman Finkelstein: What Really Happened in June 1967',
        'https://www.normanfinkelstein.com/finkelstein-what-really-happened-in-june-1967/',
        'academic'
      )
    ]
  },
  {
    id: '1967-06-05-egyptian-retreat',
    title: 'Egyptian Forces Begin Retreat',
    description: 'Egyptian forces begin retreating from the Sinai Peninsula following the devastating air strikes. The rapid collapse challenges narratives of existential threat to Israel.',
    timestamp: -81259200, // June 5, 1967 04:00 UTC
    dateString: 'June 5, 1967',
    timeString: '11:45 Local',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-05-jordan-syria-enter',
    title: 'Jordan and Syria Enter the War',
    description: 'Despite Israeli assurances through UN mediators that Israel would not attack Jordan if it stayed out of the conflict, Jordan and Syria join the war in solidarity with Egypt.',
    timestamp: -81252000, // June 5, 1967 06:00 UTC
    dateString: 'June 5, 1967',
    timeString: '13:45 Local',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-06-jerusalem-encircled',
    title: 'Israeli Forces Encircle Jerusalem',
    description: 'Israeli troops encircle East Jerusalem, beginning the process that would lead to the occupation and later illegal annexation of the city. This marked the beginning of Israel\'s control over all of historic Palestine.',
    timestamp: -81180000, // June 6, 1967 00:00 UTC
    dateString: 'June 6, 1967',
    timeString: '07:00 Local',
    category: 'displacement',
    significance: 'critical',
    casualties: {
      notes: 'Multiple Palestinian civilian casualties as Israeli forces advance'
    },
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-06-gaza-captured',
    title: 'Gaza Strip Captured by Israeli Forces',
    description: 'Israeli forces complete the capture of the Gaza Strip, bringing the territory and its Palestinian population under Israeli military occupation for the first time since 1948.',
    timestamp: -81162000, // June 6, 1967 05:00 UTC
    dateString: 'June 6, 1967',
    timeString: '12:00 Local',
    category: 'displacement',
    significance: 'critical',
    casualties: {
      palestinian: 100,
      notes: 'Estimated Palestinian casualties during Gaza occupation'
    },
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-07-old-city-captured',
    title: 'Old City of Jerusalem Captured',
    description: 'Israeli forces capture the Old City of Jerusalem, including Al-Aqsa Mosque and the Dome of the Rock. This represents not just territorial loss but a deep spiritual and cultural wound for Palestinians.',
    timestamp: -81093600, // June 7, 1967 00:00 UTC
    dateString: 'June 7, 1967',
    timeString: '10:15 Local',
    category: 'displacement',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      ),
      createSource(
        'The Cairo Review - Ilan Pappé: Myths of the Six-Day War',
        'https://www.thecairoreview.com/wp-content/uploads/2017/05/cr25-pappe.pdf',
        'academic'
      )
    ]
  },
  {
    id: '1967-06-07-west-bank-withdrawal',
    title: 'Jordanian Forces Withdraw from West Bank',
    description: 'Jordanian forces complete their withdrawal from the West Bank, leaving the Palestinian population under Israeli military occupation. This begins the occupation that continues to this day.',
    timestamp: -81079200, // June 7, 1967 04:00 UTC
    dateString: 'June 7, 1967',
    timeString: '14:00 Local',
    category: 'displacement',
    significance: 'critical',
    casualties: {
      palestinian: 200,
      notes: 'Estimated Palestinian casualties during West Bank occupation'
    },
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-08-sinai-captured',
    title: 'Sinai Peninsula Captured',
    description: 'Israeli forces complete the capture of Egypt\'s Sinai Peninsula, reaching the Suez Canal. This gave Israel control over strategic territory and demonstrated the rapid collapse of Arab forces.',
    timestamp: -81000000, // June 8, 1967 00:00 UTC
    dateString: 'June 8, 1967',
    timeString: '16:00 Local',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-08-egypt-ceasefire',
    title: 'Egypt Accepts Ceasefire',
    description: 'Egypt formally accepts the UN-sponsored ceasefire, effectively ending its participation in the war. The speed of defeat shocked the Arab world and exposed the weakness of conventional Arab military forces.',
    timestamp: -80978400, // June 8, 1967 06:00 UTC
    dateString: 'June 8, 1967',
    timeString: '21:00 Local',
    category: 'ceasefire',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-09-golan-attack',
    title: 'Israeli Attack on Golan Heights Begins',
    description: 'Despite ceasefire agreements with Egypt and Jordan, Israel launches attack on Syrian Golan Heights, demonstrating the expansionist nature of the campaign beyond defensive necessity.',
    timestamp: -80920800, // June 9, 1967 00:00 UTC
    dateString: 'June 9, 1967',
    timeString: '11:30 Local',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      ),
      createSource(
        'Norman Finkelstein: What Really Happened in June 1967',
        'https://www.normanfinkelstein.com/finkelstein-what-really-happened-in-june-1967/',
        'academic'
      )
    ]
  },
  {
    id: '1967-06-10-kuneitra-captured',
    title: 'Capture of Kuneitra',
    description: 'Israeli forces capture the Syrian town of Kuneitra in the Golan Heights, completing the territorial conquests of the war. The population was largely expelled, creating more refugees.',
    timestamp: -80841600, // June 10, 1967 00:00 UTC
    dateString: 'June 10, 1967',
    timeString: '14:00 Local',
    category: 'displacement',
    significance: 'major',
    casualties: {
      notes: 'Syrian and Palestinian civilians displaced from Golan Heights'
    },
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ]
  },
  {
    id: '1967-06-10-final-ceasefire',
    title: 'Final Ceasefire - End of Six Day War',
    description: 'Final ceasefire brings the Six Day War to an end. Israel now controls all of historic Palestine, plus the Sinai Peninsula and Golan Heights. Over 300,000 Palestinians are displaced in what becomes known as the "Naksa."',
    timestamp: -80803800, // June 10, 1967 10:30 UTC
    dateString: 'June 10, 1967',
    timeString: '18:30 Local',
    category: 'ceasefire',
    significance: 'critical',
    casualties: {
      palestinian: 413000,
      notes: 'Approximately 413,000 Palestinians displaced during the war, with 280,000-325,000 from West Bank alone'
    },
    sources: [
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      ),
      createSource(
        'Brookings: Dual Effects of 1967 War on Palestinians',
        'https://www.brookings.edu/articles/the-dual-effects-of-the-1967-war-on-palestinians-reverberate-50-years-later/',
        'academic'
      )
    ]
  },
  {
    id: '1967-06-19-cabinet-meetings',
    title: 'Israeli Cabinet Decides Future of Occupied Territories',
    description: 'In crucial cabinet meetings on June 19-20, Israel makes three key decisions: keep the West Bank and Gaza under Israeli rule, allow Palestinians to remain without citizenship, and maintain this status indefinitely. This reveals the permanent nature of the occupation.',
    timestamp: -80092800, // June 19, 1967 00:00 UTC
    dateString: 'June 19, 1967',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'The Cairo Review - Ilan Pappé: Myths of the Six-Day War',
        'https://www.thecairoreview.com/wp-content/uploads/2017/05/cr25-pappe.pdf',
        'academic'
      )
    ],
    metadata: {
      note: 'These decisions demonstrate that occupation was not temporary but planned to be permanent from the beginning'
    }
  },
  {
    id: '1967-11-22-un-resolution-242',
    title: 'UN Resolution 242 Adopted',
    description: 'UN Security Council adopts Resolution 242, emphasizing "the inadmissibility of the acquisition of territory by war" and calling for Israeli withdrawal from occupied territories. Israel\'s interpretation focuses on withdrawal from "territories" rather than "the territories."',
    timestamp: -66614400, // November 22, 1967 00:00 UTC
    dateString: 'November 22, 1967',
    category: 'international',
    significance: 'critical',
    sources: [
      createSource(
        'UN Security Council Resolution 242',
        'https://documents-dds-ny.un.org/doc/RESOLUTION/GEN/NL6/700/35/IMG/NL670035.pdf',
        'international_org'
      ),
      createSource(
        'Al Jazeera: 1967 Arab-Israeli War Timeline',
        'https://www.aljazeera.com/news/2009/7/13/1967-arab-israeli-war-timeline',
        'news'
      )
    ],
    metadata: {
      note: 'Despite this resolution, Israeli occupation continues more than 55 years later'
    }
  }
];

const timeline1967: Timeline = {
  id: '1967',
  name: 'Six Day War (1967)',
  description: 'The Six Day War represents a watershed moment that fundamentally altered Palestinian lives and the Middle East. From a Palestinian solidarity perspective, this was not a defensive war but a calculated expansion of Israeli control over Palestinian land, resulting in the occupation of the West Bank, Gaza Strip, and East Jerusalem that continues today.',
  year: 1967,
  slug: 'six-day-war-1967',
  status: 'historical',
  startTimestamp: -81273600, // June 5, 1967
  endTimestamp: -80803800, // June 10, 1967
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
    duration: 469800, // Actual duration from start to final ceasefire
    startTimestamp: -81273600,
    endTimestamp: -80803800,
    keyOutcomes: [
      'Israeli occupation of West Bank, Gaza Strip, and East Jerusalem begins',
      'Over 413,000 Palestinians displaced in the "Naksa"',
      'Israel controls all of historic Palestine for first time',
      'UN Resolution 242 calls for withdrawal from occupied territories',
      'Palestinian resistance movement transforms from pan-Arab to independent struggle',
      'Settlement expansion and apartheid system institutionalized'
    ]
  },
  context: 'The Six Day War was not merely a brief military conflict but a calculated expansion that established the occupation lasting lifetimes. As Ilan Pappé reveals, Israel had long contemplated occupying the West Bank and Gaza Strip, and the war provided the opportunity to realize these territorial ambitions. The myth of defensive necessity obscures the reality of premeditated expansion and the ongoing denial of Palestinian rights.'
};

export default timeline1967; 