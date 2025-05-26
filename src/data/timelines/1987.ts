/**
 * CCCP.PS - 1987 First Intifada Timeline
 * Palestinian resistance against Israeli occupation and the grassroots uprising that challenged settler colonialism
 * Based on research by Edward Said, Ilan Pappé, and Palestinian solidarity sources
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links with proper academic and solidarity credibility
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'academic' ? 'high' : type === 'human_rights' ? 'high' : type === 'international_org' ? 'high' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1987-12-08-erez-checkpoint-incident',
    title: 'Erez Checkpoint Truck Collision',
    description: 'An Israeli military truck collides with Palestinian vehicles at the Erez checkpoint in Gaza, killing four Palestinians from the Jabalia refugee camp. Palestinians widely believe it was deliberate retaliation for the stabbing of an Israeli businessman in Gaza two days earlier, becoming the immediate trigger for the uprising.',
    timestamp: 565920000, // December 8, 1987
    dateString: 'December 8, 1987',
    timeString: '17:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 4
    },
    sources: [
      createSource(
        'Institute for Middle East Understanding (IMEU)',
        'https://imeu.org/article/25th-anniversary-of-the-first-intifada/',
        'solidarity'
      ),
      createSource(
        'Al Jazeera - The First Intifada',
        'https://www.aljazeera.com/gallery/2023/12/8/history-illustrated-the-first-intifada-against-israel',
        'news'
      ),
      createSource(
        'Edward Said - Intifada and Independence',
        'https://www.jstor.org/stable/466518',
        'academic'
      )
    ]
  },
  {
    id: '1987-12-09-jabalia-uprising-begins',
    title: 'First Intifada Begins in Jabalia',
    description: 'Massive protests erupt in Jabalia refugee camp following the funeral of the four Palestinians killed at Erez. Palestinians throw stones at Israeli military positions. Israeli forces respond with live ammunition, killing several protesters and igniting demonstrations across Gaza. This marks the official beginning of the First Intifada.',
    timestamp: 566006400, // December 9, 1987
    dateString: 'December 9, 1987',
    timeString: '10:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 7
    },
    sources: [
      createSource(
        'Ilan Pappé - The Biggest Prison on Earth',
        'https://www.versobooks.com/books/2640-the-biggest-prison-on-earth',
        'academic'
      ),
      createSource(
        'Institute for Middle East Understanding (IMEU)',
        'https://imeu.org/article/25th-anniversary-of-the-first-intifada/',
        'solidarity'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/first-intifada',
        'solidarity'
      )
    ]
  },
  {
    id: '1988-01-15-hamas-founding',
    title: 'Hamas (Islamic Resistance Movement) Founded',
    description: 'Hamas is founded as the Islamic Resistance Movement, emerging as a significant political-religious force advocating Islamic resistance to Israeli occupation. The organization grows out of the Muslim Brotherhood and becomes a major player in Palestinian resistance.',
    timestamp: 569203200, // January 15, 1988
    dateString: 'January 15, 1988',
    timeString: '12:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'Al Jazeera - Hamas History',
        'https://www.aljazeera.com/gallery/2023/12/8/history-illustrated-the-first-intifada-against-israel',
        'news'
      ),
      createSource(
        'Palestinian Academic Society for International Affairs',
        'https://www.passia.org/',
        'academic'
      )
    ]
  },
  {
    id: '1988-01-rabin-broken-bones-policy',
    title: 'Rabin\'s "Broken Bones" Policy',
    description: 'Israeli Defense Minister Yitzhak Rabin implements the "broken bones" policy, ordering soldiers to break the arms and legs of Palestinian protesters. This brutal policy, captured on international media, generates global condemnation and exposes the violent nature of Israeli occupation.',
    timestamp: 569808000, // January 22, 1988
    dateString: 'January 22, 1988',
    timeString: '14:00 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Amnesty International - Israel Occupied Territories',
        'https://www.amnesty.org/en/latest/news/2017/06/israel-occupation-50-years-of-dispossession/',
        'human_rights'
      ),
      createSource(
        'Ilan Pappé - The Biggest Prison on Earth',
        'https://www.versobooks.com/books/2640-the-biggest-prison-on-earth',
        'academic'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/first-intifada',
        'solidarity'
      )
    ]
  },
  {
    id: '1988-04-16-abu-jihad-assassination',
    title: 'Assassination of Abu Jihad',
    description: 'Israeli forces assassinate Khalil al-Wazir (Abu Jihad), a key PLO military leader and coordinator of the Intifada, in his home in Tunis. The assassination is part of Israel\'s strategy to eliminate Palestinian leadership and suppress the uprising.',
    timestamp: 577152000, // April 16, 1988
    dateString: 'April 16, 1988',
    timeString: '02:30 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 1
    },
    sources: [
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'Al Jazeera - The First Intifada',
        'https://www.aljazeera.com/gallery/2023/12/8/history-illustrated-the-first-intifada-against-israel',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/abu-jihad',
        'solidarity'
      )
    ]
  },
  {
    id: '1988-11-15-palestinian-independence-declaration',
    title: 'Palestinian Independence Declaration',
    description: 'The Palestine National Council declares an independent Palestinian state in exile and officially recognizes Israel\'s right to exist. This represents a major diplomatic shift and significant compromise by Palestinians, accepting only 22% of historic Palestine.',
    timestamp: 595555200, // November 15, 1988
    dateString: 'November 15, 1988',
    timeString: '16:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Edward Said - The End of the Peace Process',
        'https://www.versobooks.com/books/1946-the-end-of-the-peace-process',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'UN Archives - Palestine Declaration',
        'https://www.un.org/unispal/',
        'international_org'
      )
    ]
  },
  {
    id: '1989-05-22-un-condemns-deportations',
    title: 'UN Condemns Israeli Deportations',
    description: 'The UN Security Council condemns Israel\'s deportation of Palestinian activists and calls for the application of the Fourth Geneva Convention to the occupied territories. Israel continues its policy of collective punishment despite international condemnation.',
    timestamp: 611798400, // May 22, 1989
    dateString: 'May 22, 1989',
    timeString: '15:00 UTC',
    category: 'international',
    significance: 'major',
    sources: [
      createSource(
        'UN Security Council Resolution 607',
        'https://www.un.org/unispal/',
        'international_org'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2017/06/israel-occupation-50-years-of-dispossession/',
        'human_rights'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '1990-06-20-us-suspends-plo-dialogue',
    title: 'US Suspends PLO Dialogue',
    description: 'The United States suspends dialogue with the PLO following a failed attack on Israeli beaches by the Palestine Liberation Front. This diplomatic setback damages Palestinian international standing during a critical period of the uprising.',
    timestamp: 645840000, // June 20, 1990
    dateString: 'June 20, 1990',
    timeString: '18:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Edward Said - The End of the Peace Process',
        'https://www.versobooks.com/books/1946-the-end-of-the-peace-process',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'Al Jazeera - The First Intifada',
        'https://www.aljazeera.com/gallery/2023/12/8/history-illustrated-the-first-intifada-against-israel',
        'news'
      )
    ]
  },
  {
    id: '1991-10-30-madrid-peace-conference',
    title: 'Madrid Peace Conference Begins',
    description: 'The Madrid Peace Conference begins, marking the first direct peace negotiations between Israel and Arab states, including a Palestinian delegation (not officially from the PLO). The conference emerges from international pressure created by the Intifada.',
    timestamp: 688780800, // October 30, 1991
    dateString: 'October 30, 1991',
    timeString: '10:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Edward Said - The End of the Peace Process',
        'https://www.versobooks.com/books/1946-the-end-of-the-peace-process',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'UN Archives - Madrid Conference',
        'https://www.un.org/unispal/',
        'international_org'
      )
    ]
  },
  {
    id: '1993-09-13-oslo-accords-signed',
    title: 'Oslo Accords Signed - End of First Intifada',
    description: 'The Oslo Accords are signed on the White House lawn, with Israeli Prime Minister Yitzhak Rabin and PLO Chairman Yasser Arafat shaking hands. The agreement establishes the Palestinian Authority and a framework for limited Palestinian self-governance, officially ending the First Intifada. However, the accords fail to address core issues of occupation, settlements, and refugee rights.',
    timestamp: 747878400, // September 13, 1993
    dateString: 'September 13, 1993',
    timeString: '17:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Edward Said - The End of the Peace Process',
        'https://www.versobooks.com/books/1946-the-end-of-the-peace-process',
        'academic'
      ),
      createSource(
        'Ilan Pappé - The Biggest Prison on Earth',
        'https://www.versobooks.com/books/2640-the-biggest-prison-on-earth',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  }
];

const timeline1987: Timeline = {
  id: '1987',
  name: 'First Intifada (1987-1993)',
  description: 'The Palestinian uprising against Israeli occupation that began in 1987, characterized by popular resistance, civil disobedience, and international solidarity. As Edward Said described it, "the most impressive and disciplined anti-colonial insurrection in this century." The uprising fundamentally altered the dynamics of the conflict but ended with the deeply flawed Oslo Accords.',
  year: 1987,
  slug: 'first-intifada-1987',
  status: 'historical',
  startTimestamp: 565920000, // December 8, 1987 (Erez checkpoint incident)
  endTimestamp: 747878400, // September 13, 1993 (Oslo Accords)
  theme: {
    primary: 'purple-600',
    secondary: 'purple-400',
    gradient: ['from-purple-600/20', 'to-purple-400/20'],
    border: 'purple-600/30',
    text: 'purple-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 181958400, // From Erez incident to Oslo Accords (approximately 6 years)
    startTimestamp: 565920000,
    endTimestamp: 747878400,
    keyOutcomes: [
      'Over 1,100 Palestinians killed, including 250 children',
      'Approximately 120,000 Palestinians imprisoned (10% of adult male population)',
      'Systematic torture documented by human rights organizations',
      'First popular uprising to challenge Israeli occupation internationally',
      'PLO recognition of Israel and acceptance of two-state solution',
      'Oslo Accords signed but failed to end occupation',
      'Beginning of international awareness of Palestinian struggle',
      'Emergence of Hamas as major Palestinian political force',
      'Exposure of Israel\'s "broken bones" policy to global media',
      'Foundation for future Palestinian civil society organizations'
    ]
  },
  context: 'The First Intifada emerged from twenty years of Israeli occupation following the 1967 war. As Ilan Pappé documents, Israel had transformed the occupied territories into "the biggest prison on earth," with systematic oppression, land confiscation, and settlement expansion. The uprising was primarily characterized by civil disobedience, stone-throwing by youth (shabab), and community organization. While it demonstrated Palestinian sumoud (steadfastness) and brought international attention to their struggle, it ultimately ended with the Oslo Accords—what Edward Said called "an instrument of Palestinian surrender" that failed to deliver justice or freedom. The conditions that sparked the First Intifada—occupation, settlement expansion, and denial of rights—continue today.'
};

export default timeline1987; 