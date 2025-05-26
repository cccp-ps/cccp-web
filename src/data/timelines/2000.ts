/**
 * CCCP.PS - 2000 Second Intifada Timeline
 * The Al-Aqsa Intifada: Palestinian resistance against failed peace process and continued occupation
 * Based on Palestinian solidarity sources and Edward Said's analysis
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
    id: '2000-09-28-sharon-al-aqsa-visit',
    title: 'Sharon\'s Provocative Visit to Al-Aqsa Mosque',
    description: 'Ariel Sharon, accompanied by over 1,000 Israeli security forces, makes a provocative visit to the Al-Aqsa Mosque compound (Haram al-Sharif), one of Islam\'s holiest sites. This calculated provocation by the hardline Israeli politician is widely seen as an attempt to assert Israeli sovereignty over the site and inflame tensions.',
    timestamp: 970099200, // September 28, 2000
    dateString: 'September 28, 2000',
    timeString: '11:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/second-intifada',
        'solidarity'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2000-09-29-second-intifada-begins',
    title: 'Second Intifada Begins',
    description: 'The Second Intifada (Al-Aqsa Intifada) erupts as protests spread across Palestine following Sharon\'s provocative visit. Israeli forces respond with excessive force, killing several Palestinians and injuring hundreds. This marks the beginning of a sustained uprising against occupation and the failure of the Oslo peace process.',
    timestamp: 970185600, // September 29, 2000
    dateString: 'September 29, 2000',
    timeString: '08:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 7
    },
    sources: [
      createSource(
        'Palestine Chronicle - The Second Palestinian Intifada',
        'https://www.palestinechronicle.com/the-second-palestinian-intifada/',
        'solidarity'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'UNRWA - The Second Intifada',
        'https://www.unrwa.org/content/second-intifada',
        'international_org'
      )
    ]
  },
  {
    id: '2000-10-17-sharm-el-sheikh-agreement',
    title: 'Sharm El-Sheikh Agreement Fails',
    description: 'The Sharm El-Sheikh agreement, brokered by President Clinton, aimed to cease violence but quickly collapses as Israeli forces continue their operations in Palestinian territories. The agreement\'s failure demonstrates the impossibility of managing the conflict without addressing its root causes.',
    timestamp: 971740800, // October 17, 2000
    dateString: 'October 17, 2000',
    timeString: '14:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2000-11-07-mitchell-commission',
    title: 'Mitchell Commission Established',
    description: 'The U.S. commissions Senator George Mitchell to investigate the causes of violence and propose solutions. The Mitchell Plan later calls for a halt to settlement construction and an end to violence, but Israel continues settlement expansion.',
    timestamp: 973555200, // November 7, 2000
    dateString: 'November 7, 2000',
    timeString: '16:00 UTC',
    category: 'international',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2001-02-06-sharon-elected-pm',
    title: 'Ariel Sharon Elected Israeli Prime Minister',
    description: 'Ariel Sharon is elected Prime Minister of Israel, promising to combat "terrorism" and taking an increasingly hardline approach against Palestinian resistance. His election signals a shift toward more aggressive Israeli policies and military escalation.',
    timestamp: 981417600, // February 6, 2001
    dateString: 'February 6, 2001',
    timeString: '20:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Palestine Chronicle - The Second Palestinian Intifada',
        'https://www.palestinechronicle.com/the-second-palestinian-intifada/',
        'solidarity'
      )
    ]
  },
  {
    id: '2001-05-18-f16-attacks-begin',
    title: 'Israel Uses F-16 Warplanes Against Palestinians',
    description: 'Israel begins using F-16 warplanes against Palestinian targets in Gaza, marking a significant escalation in military tactics and disproportionate use of force. This represents the first use of such advanced military aircraft against a civilian population.',
    timestamp: 990144000, // May 18, 2001
    dateString: 'May 18, 2001',
    timeString: '03:00 UTC',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'B\'Tselem - Statistics on Palestinians killed',
        'https://www.btselem.org/statistics',
        'human_rights'
      )
    ]
  },
  {
    id: '2001-06-01-tel-aviv-disco-bombing',
    title: 'Tel Aviv Disco Bombing',
    description: 'A suicide bombing at a Tel Aviv disco kills 21 Israeli teenagers. Hamas claims responsibility for the attack. The bombing leads to increased Israeli military operations and further escalation of the conflict.',
    timestamp: 991353600, // June 1, 2001
    dateString: 'June 1, 2001',
    timeString: '23:30 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      israeli: 21
    },
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'B\'Tselem - Statistics on Palestinians killed',
        'https://www.btselem.org/statistics',
        'human_rights'
      )
    ]
  },
  {
    id: '2002-03-27-operation-defensive-shield',
    title: 'Operation Defensive Shield Launched',
    description: 'Following a Hamas attack in Netanya that killed 28 Israelis, Israel launches "Operation Defensive Shield," the largest military operation in the West Bank since 1967. The operation includes sieges of major Palestinian cities and the Jenin refugee camp, where significant human rights violations occur.',
    timestamp: 1017187200, // March 27, 2002
    dateString: 'March 27, 2002',
    timeString: '06:00 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Amnesty International - Shielded from scrutiny: IDF violations in Jenin and Nablus',
        'https://www.amnesty.org/en/documents/mde15/143/2002/en/',
        'human_rights'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'B\'Tselem - Statistics on Palestinians killed',
        'https://www.btselem.org/statistics',
        'human_rights'
      )
    ]
  },
  {
    id: '2002-03-29-arafat-compound-siege',
    title: 'Siege of Arafat\'s Compound Begins',
    description: 'Israeli forces besiege Yasser Arafat\'s compound in Ramallah, confining the Palestinian leader there for years until his death. The siege symbolizes Israel\'s strategy of destroying Palestinian leadership and political infrastructure.',
    timestamp: 1017360000, // March 29, 2002
    dateString: 'March 29, 2002',
    timeString: '10:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Democracy Now! - Remembering Palestinian Leader Yasser Arafat',
        'https://www.democracynow.org/2004/11/11/remembering_palestinian_leader_yasser_arafat_a',
        'news'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      )
    ]
  },
  {
    id: '2002-04-02-battle-of-jenin',
    title: 'Battle of Jenin Refugee Camp',
    description: 'Israeli forces invade Jenin refugee camp during Operation Defensive Shield, killing dozens of Palestinians and destroying large portions of the camp. Human rights organizations document numerous violations, including the use of Palestinian civilians as human shields and preventing medical teams from entering for days.',
    timestamp: 1017619200, // April 2, 2002
    dateString: 'April 2-11, 2002',
    timeString: '05:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 52
    },
    sources: [
      createSource(
        'Amnesty International - Shielded from scrutiny: IDF violations in Jenin and Nablus',
        'https://www.amnesty.org/en/documents/mde15/143/2002/en/',
        'human_rights'
      ),
      createSource(
        'Human Rights Watch - Jenin: IDF Military Operations',
        'https://www.hrw.org/reports/2002/israel3/',
        'human_rights'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      )
    ]
  },
  {
    id: '2002-06-16-separation-wall-construction',
    title: 'Construction of Separation Wall Begins',
    description: 'Israel begins construction of the Separation Wall in the West Bank, which the International Court of Justice later rules illegal under international law. The wall confiscates Palestinian land, separates communities, annexes additional territory to Israel, and further fragments Palestinian territory.',
    timestamp: 1024185600, // June 16, 2002
    dateString: 'June 16, 2002',
    timeString: '07:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'International Court of Justice - Legal Consequences of the Construction of a Wall',
        'https://www.icj-cij.org/case/131',
        'international_org'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'B\'Tselem - The Separation Barrier',
        'https://www.btselem.org/separation_barrier',
        'human_rights'
      )
    ]
  },
  {
    id: '2004-03-22-yassin-assassination',
    title: 'Assassination of Sheikh Ahmad Yassin',
    description: 'Israel assassinates Sheikh Ahmad Yassin, the wheelchair-bound spiritual leader of Hamas, in an airstrike that also kills several civilians. Yassin is killed leaving a mosque after morning prayers. This assassination is part of Israel\'s policy of extrajudicial killings of Palestinian leaders.',
    timestamp: 1079913600, // March 22, 2004
    dateString: 'March 22, 2004',
    timeString: '06:30 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 1
    },
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Human Rights Watch - Targeted Killings',
        'https://www.hrw.org/news/2004/03/23/israel-assassination-hamas-leader-violates-international-law',
        'human_rights'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/yassin',
        'solidarity'
      )
    ]
  },
  {
    id: '2004-04-17-rantissi-assassination',
    title: 'Assassination of Abdel Aziz al-Rantissi',
    description: 'Israel assassinates Abdel Aziz al-Rantissi, Sheikh Yassin\'s successor in Hamas, in another airstrike just weeks after Yassin\'s killing. These assassinations represent Israel\'s systematic policy of eliminating Palestinian political and military leadership.',
    timestamp: 1082160000, // April 17, 2004
    dateString: 'April 17, 2004',
    timeString: '18:20 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 1
    },
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Human Rights Watch - Targeted Killings',
        'https://www.hrw.org/news/2004/04/18/israel-rantissi-killing-violates-international-law',
        'human_rights'
      )
    ]
  },
  {
    id: '2004-11-11-arafat-death',
    title: 'Death of Yasser Arafat',
    description: 'Palestinian President Yasser Arafat dies in a French military hospital after being confined to his compound for years by Israeli forces. Many Palestinians believe he was poisoned by Israel, though this remains unproven. His death marks the end of an era in Palestinian leadership.',
    timestamp: 1100131200, // November 11, 2004
    dateString: 'November 11, 2004',
    timeString: '03:30 UTC',
    category: 'political',
    significance: 'critical',
    casualties: {
      palestinian: 1
    },
    sources: [
      createSource(
        'Democracy Now! - Remembering Palestinian Leader Yasser Arafat',
        'https://www.democracynow.org/2004/11/11/remembering_palestinian_leader_yasser_arafat_a',
        'news'
      ),
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2005-01-09-abbas-elected',
    title: 'Mahmoud Abbas Elected PA President',
    description: 'Mahmoud Abbas is elected President of the Palestinian Authority following Arafat\'s death. His election represents a shift toward more moderate Palestinian leadership and opens the door for renewed peace efforts.',
    timestamp: 1105228800, // January 9, 2005
    dateString: 'January 9, 2005',
    timeString: '18:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2005-02-08-sharm-el-sheikh-ceasefire',
    title: 'Sharm El Sheikh Ceasefire - End of Second Intifada',
    description: 'At the Sharm El Sheikh Summit, Israel and the Palestinian Authority declare a ceasefire, effectively ending the Second Intifada. However, the fundamental issues that sparked the uprising - occupation, settlements, and denial of Palestinian rights - remain unresolved.',
    timestamp: 1107820800, // February 8, 2005
    dateString: 'February 8, 2005',
    timeString: '15:00 UTC',
    category: 'ceasefire',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'UNRWA - The Second Intifada',
        'https://www.unrwa.org/content/second-intifada',
        'international_org'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '2005-08-23-gaza-disengagement',
    title: 'Israeli "Disengagement" from Gaza',
    description: 'Israel completes its unilateral "disengagement" from Gaza, removing approximately 8,000 settlers while maintaining control over Gaza\'s borders, airspace, and maritime access. This withdrawal is part of Sharon\'s plan to strengthen Israeli control over the West Bank while abandoning less strategic areas.',
    timestamp: 1124755200, // August 23, 2005
    dateString: 'August 23, 2005',
    timeString: '12:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera - Al-Aqsa Intifada Timeline',
        'https://www.aljazeera.com/news/2005/9/28/al-aqsa-intifada-timeline',
        'news'
      ),
      createSource(
        'B\'Tselem - Disengagement Plan',
        'https://www.btselem.org/gaza_strip',
        'human_rights'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  }
];

const timeline2000: Timeline = {
  id: '2000',
  name: 'Second Intifada (2000-2005)',
  description: 'The Al-Aqsa Intifada emerged from the failure of the Oslo peace process and continued Israeli occupation. As Edward Said observed, this uprising represented Palestinian rejection of a "peace" that maintained occupation and denied fundamental rights. The Second Intifada exposed the contradictions of attempting to achieve peace while maintaining colonial control.',
  year: 2000,
  slug: 'second-intifada-al-aqsa-2000',
  status: 'historical',
  startTimestamp: 970185600, // September 29, 2000
  endTimestamp: 1107820800, // February 8, 2005
  theme: {
    primary: '#991b1b', // Deep red/maroon
    secondary: '#dc2626',
    gradient: ['from-red-900/20', 'to-red-700/20'],
    border: 'red-800/30',
    text: 'red-300'
  },
  events,
  stats: {
    totalEvents: events.length,
    duration: 137635200, // From start to Sharm El Sheikh ceasefire (approximately 4.5 years)
    startTimestamp: 970185600,
    endTimestamp: 1107820800,
    keyOutcomes: [
      'Approximately 3,315 Palestinians killed, including hundreds of children',
      'Around 972 Israelis killed during the uprising',
      'Tens of thousands injured on both sides',
      'Construction of the illegal Separation Wall fragmenting Palestinian territory',
      'Siege and confinement of Yasser Arafat until his death',
      'Systematic destruction of Palestinian infrastructure and institutions',
      'Economic devastation of Palestinian territories through closures and sieges',
      'Assassination of Palestinian political and religious leaders',
      'Expansion of Israeli settlements despite international law',
      'International Court of Justice ruling against the Separation Wall',
      'Failure of multiple peace initiatives and diplomatic efforts',
      'Rightward shift in Israeli politics and militarization of the conflict',
      'Growing international awareness of Palestinian suffering under occupation',
      'Foundation for future BDS movement and international solidarity campaigns'
    ]
  },
  context: 'The Second Intifada erupted from the failure of the Oslo peace process to deliver Palestinian liberation. As Edward Said argued, Oslo represented "Palestinian surrender" rather than genuine peace, creating a "fast-food peace" that managed rather than ended occupation. The uprising began with Sharon\'s provocative visit to Al-Aqsa Mosque and escalated into the most intense period of Palestinian-Israeli conflict since 1967. Unlike the largely civil resistance of the First Intifada, the Second Intifada was characterized by both armed resistance and Israeli military operations using F-16s, tanks, and systematic assassinations. The construction of the Separation Wall and the siege of Palestinian cities demonstrated Israel\'s strategy of unilateral separation rather than negotiated peace. The Intifada ended with a ceasefire in 2005, but the root causes—occupation, settlements, and denial of Palestinian rights—remained unaddressed, setting the stage for future confrontations.'
};

export default timeline2000; 