/**
 * CCCP.PS - 1948 Nakba Timeline
 * Historical documentation of the Palestinian catastrophe, mass displacement, and the establishment of Israel
 * Drawing from declassified archives and scholarly research by historians like Ilan Pappé
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links with proper academic and historical credibility
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'academic' ? 'high' : type === 'human_rights' ? 'high' : type === 'international_org' ? 'high' : 'medium'
});

const events: TimelineEvent[] = [
  {
    id: '1947-11-29-un-partition',
    title: 'UN Partition Plan (Resolution 181)',
    description: 'The United Nations General Assembly passes Resolution 181, recommending the partition of Palestine into Jewish and Arab states. Despite Jews constituting only one-third of the population and owning less than 6% of the land, the plan allocates 55% of Palestine to the proposed Jewish state.',
    timestamp: -697118400, // November 29, 1947
    dateString: 'November 29, 1947',
    timeString: '15:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'UN Archives - Resolution 181',
        'https://www.un.org/unispal/document/auto-insert-180092/',
        'international_org'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/en/journals/detail/article/75',
        'academic'
      )
    ]
  },
  {
    id: '1947-12-31-baldat-al-sheikh-massacre',
    title: 'Baldat al-Sheikh Massacre',
    description: 'Zionist forces attack the village of Baldat al-Sheikh near Haifa, killing up to 70 Palestinian civilians. This represents one of the first major massacres in the systematic campaign of ethnic cleansing that preceded Israeli statehood.',
    timestamp: -694353600, // December 31, 1947
    dateString: 'December 31, 1947',
    timeString: '04:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 70
    },
    sources: [
      createSource(
        'Benny Morris - The Birth of the Palestinian Refugee Problem',
        'https://www.cambridge.org/core/books/birth-of-the-palestinian-refugee-problem-revisited/0E69E0DD9378D2FAF3D06B772EABDDEF',
        'academic'
      ),
      createSource(
        'Palestinian Academic Society for the Study of International Affairs',
        'https://www.passia.org/',
        'academic'
      ),
      createSource(
        'Al-Haq Human Rights Organization',
        'https://www.alhaq.org/',
        'human_rights'
      )
    ]
  },
  {
    id: '1948-01-04-semiramis-hotel-bombing',
    title: 'Semiramis Hotel Bombing',
    description: 'Zionist Haganah forces bomb the Semiramis Hotel in Jerusalem\'s Katamon neighborhood, killing 24 Palestinian civilians including women and children. The attack was part of a campaign to terrorize Palestinian urban populations.',
    timestamp: -694008000, // January 4, 1948
    dateString: 'January 4, 1948',
    timeString: '02:30 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 24
    },
    sources: [
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Electronic Intifada - Historical Archives',
        'https://electronicintifada.net/tags/nakba',
        'solidarity'
      ),
      createSource(
        'Institute for Middle East Understanding',
        'https://imeu.org/article/palestinian-refugees',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-02-14-sasa-massacre',
    title: 'Sa\'sa\' Massacre',
    description: 'Zionist Palmach forces attack the village of Sa\'sa\' in northern Palestine, blowing up 16 houses with their inhabitants inside and killing 60 Palestinians, including many women and children.',
    timestamp: -690465600, // February 14, 1948
    dateString: 'February 14, 1948',
    timeString: '03:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 60
    },
    sources: [
      createSource(
        'Walid Khalidi - All That Remains',
        'https://www.jstor.org/stable/2537457',
        'academic'
      ),
      createSource(
        'Zochrot - Remembering the Nakba',
        'https://zochrot.org/en',
        'solidarity'
      ),
      createSource(
        'Palestine Remembered',
        'https://www.palestineremembered.com/',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-03-10-plan-dalet',
    title: 'Plan Dalet (Plan D) Adopted',
    description: 'The Haganah leadership formally adopts Plan Dalet, a comprehensive military strategy for the systematic expulsion of Palestinians from areas designated for the Jewish state and beyond. This plan serves as the blueprint for ethnic cleansing operations.',
    timestamp: -688305600, // March 10, 1948
    dateString: 'March 10, 1948',
    timeString: '10:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Israeli State Archives - Declassified Documents',
        'https://www.archives.gov.il/en/',
        'government'
      ),
      createSource(
        'Journal of Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '1948-04-09-deir-yassin-massacre',
    title: 'Deir Yassin Massacre',
    description: 'Irgun and Stern Gang paramilitaries, coordinating with Haganah forces, massacre at least 107 Palestinian villagers in Deir Yassin, a village that had signed a non-aggression pact with Zionist forces. The systematic killing included women, children, and elderly civilians.',
    timestamp: -685713600, // April 9, 1948
    dateString: 'April 9, 1948',
    timeString: '04:30 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 107
    },
    sources: [
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Bir Zeit University - Oral History Archives',
        'https://libraries.birzeit.edu/en',
        'academic'
      ),
      createSource(
        'Deir Yassin Remembered',
        'https://www.deiryassin.org/',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-04-22-haifa-falls',
    title: 'Fall of Haifa - Mass Exodus Begins',
    description: 'After intense bombardment and psychological warfare, Haifa falls to Zionist forces. The majority of Haifa\'s 70,000 Palestinian residents flee in panic, marking the beginning of mass Palestinian displacement.',
    timestamp: -684590400, // April 22, 1948
    dateString: 'April 22, 1948',
    timeString: '14:00 UTC',
    category: 'displacement',
    significance: 'critical',
    sources: [
      createSource(
        'Benny Morris - The Birth of the Palestinian Refugee Problem',
        'https://www.cambridge.org/core/books/birth-of-the-palestinian-refugee-problem-revisited/',
        'academic'
      ),
      createSource(
        'Nur Masalha - Expulsion of the Palestinians',
        'https://www.jstor.org/stable/2537790',
        'academic'
      ),
      createSource(
        'Electronic Intifada',
        'https://electronicintifada.net/tags/haifa',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-05-13-jaffa-falls',
    title: 'Fall of Jaffa',
    description: 'Following heavy bombardment and siege, Jaffa falls to Zionist forces. The ancient Palestinian port city is nearly emptied of its Arab population through forced displacement.',
    timestamp: -682776000, // May 13, 1948
    dateString: 'May 13, 1948',
    timeString: '16:00 UTC',
    category: 'displacement',
    significance: 'major',
    sources: [
      createSource(
        'Salim Tamari - Year of the Locust: Palestine and Syria During WWI',
        'https://www.ucpress.edu/book/9780520241329/year-of-the-locust',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      ),
      createSource(
        'Al-Haq Human Rights Organization',
        'https://www.alhaq.org/',
        'human_rights'
      )
    ]
  },
  {
    id: '1948-05-14-israel-declaration',
    title: 'Declaration of the State of Israel',
    description: 'David Ben-Gurion declares the establishment of the State of Israel at the Tel Aviv Museum. The declaration comes as Zionist forces have already depopulated hundreds of Palestinian villages and towns through systematic ethnic cleansing.',
    timestamp: -682689600, // May 14, 1948
    dateString: 'May 14, 1948',
    timeString: '16:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Israeli State Archives - Declaration of Independence',
        'https://www.archives.gov.il/en/',
        'government'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Journal of Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '1948-05-15-arab-israeli-war-begins',
    title: 'First Arab-Israeli War Begins',
    description: 'Arab armies from Egypt, Jordan, Syria, Lebanon, and Iraq enter Palestine following the end of the British Mandate. However, by this time, Zionist forces have already expelled approximately 400,000 Palestinians.',
    timestamp: -682603200, // May 15, 1948
    dateString: 'May 15, 1948',
    timeString: '00:01 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Eugene Rogan - The Arabs: A History',
        'https://www.basicbooks.com/titles/eugene-rogan/the-arabs/9780465025046/',
        'academic'
      ),
      createSource(
        'Avi Shlaim - The Iron Wall: Israel and the Arab World',
        'https://wwnorton.com/books/9780393321128',
        'academic'
      ),
      createSource(
        'UN Archives - Palestine Commission Reports',
        'https://www.un.org/unispal/',
        'international_org'
      )
    ]
  },
  {
    id: '1948-05-22-tantura-massacre',
    title: 'Tantura Massacre',
    description: 'Israeli Alexandroni Brigade forces capture the coastal village of Tantura and massacre between 70-200 Palestinian villagers. The massacre was covered up for decades until revealed by Israeli historian Teddy Katz.',
    timestamp: -681998400, // May 22, 1948
    dateString: 'May 22, 1948',
    timeString: '10:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 135 // Mid-range estimate
    },
    sources: [
      createSource(
        'Teddy Katz - The Exodus of the Arabs from the Villages at the Foot of Southern Mount Carmel',
        'https://www.jstor.org/stable/2538047',
        'academic'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Electronic Intifada - Tantura Documentary',
        'https://electronicintifada.net/tags/tantura',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-07-11-lydda-ramle-death-march',
    title: 'Lydda and Ramle "Death March"',
    description: 'Israeli forces, under direct orders from Ben-Gurion and carried out by Yitzhak Rabin, expel approximately 50,000 Palestinian residents of Lydda (Lod) and Ramle. Forced to march in extreme heat without water, hundreds die in what becomes known as the "Death March."',
    timestamp: -677678400, // July 11, 1948
    dateString: 'July 11, 1948',
    timeString: '12:00 UTC',
    category: 'displacement',
    significance: 'critical',
    casualties: {
      palestinian: 350 // Deaths during the march
    },
    sources: [
      createSource(
        'Benny Morris - The Birth of the Palestinian Refugee Problem',
        'https://www.cambridge.org/core/books/birth-of-the-palestinian-refugee-problem-revisited/',
        'academic'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Palestine Remembered - Lydda',
        'https://www.palestineremembered.com/Ramla/Lydda/',
        'solidarity'
      )
    ]
  },
  {
    id: '1948-10-29-al-dawayima-massacre',
    title: 'Al-Dawayima Massacre',
    description: 'Israeli forces massacre between 80-100 Palestinians in the village of Al-Dawayima in the Jerusalem hills. UN observers described finding children\'s bodies with crushed skulls and evidence of systematic killing.',
    timestamp: -668174400, // October 29, 1948
    dateString: 'October 29, 1948',
    timeString: '08:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 90
    },
    sources: [
      createSource(
        'UN Archives - Palestine Commission Reports',
        'https://www.un.org/unispal/',
        'international_org'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Walid Khalidi - All That Remains',
        'https://www.jstor.org/stable/2537457',
        'academic'
      )
    ]
  },
  {
    id: '1948-10-31-operation-hiram',
    title: 'Operation Hiram - Galilee Conquest',
    description: 'Israel launches Operation Hiram, completing the conquest of the Galilee region and forcing the remaining Palestinian population to flee to Lebanon and Syria.',
    timestamp: -668001600, // October 31, 1948
    dateString: 'October 31, 1948',
    timeString: '06:00 UTC',
    category: 'displacement',
    significance: 'major',
    sources: [
      createSource(
        'Benny Morris - 1948: A History of the First Arab-Israeli War',
        'https://yalebooks.yale.edu/book/9780300151121/1948/',
        'academic'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Institute for Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '1948-12-11-un-resolution-194',
    title: 'UN Resolution 194 - Right of Return',
    description: 'The UN General Assembly passes Resolution 194, affirming the right of Palestinian refugees to return to their homes and receive compensation. This resolution establishes the legal foundation for Palestinian refugee rights.',
    timestamp: -664459200, // December 11, 1948
    dateString: 'December 11, 1948',
    timeString: '15:00 UTC',
    category: 'international',
    significance: 'critical',
    sources: [
      createSource(
        'UN General Assembly Resolution 194',
        'https://www.un.org/unispal/document/auto-insert-198835/',
        'international_org'
      ),
      createSource(
        'BADIL Resource Center',
        'https://www.badil.org/',
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
    id: '1949-07-20-armistice-agreements',
    title: 'Final Armistice Agreement Signed',
    description: 'The Israel-Syria Armistice Agreement is signed, completing the armistice agreements between Israel and Arab states. By this time, over 750,000 Palestinians have been displaced and approximately 530 Palestinian villages destroyed.',
    timestamp: -645364800, // July 20, 1949
    dateString: 'July 20, 1949',
    timeString: '14:00 UTC',
    category: 'political',
    significance: 'major',
    sources: [
      createSource(
        'UN Archives - Armistice Agreements',
        'https://www.un.org/unispal/',
        'international_org'
      ),
      createSource(
        'Ilan Pappé - The Ethnic Cleansing of Palestine',
        'https://www.versobooks.com/books/1309-the-ethnic-cleansing-of-palestine',
        'academic'
      ),
      createSource(
        'Journal of Palestine Studies',
        'https://www.palestine-studies.org/',
        'academic'
      )
    ]
  },
  {
    id: '1950-12-01-absentee-property-law',
    title: 'Absentee Property Law',
    description: 'Israel passes the Absentee Property Law, legally confiscating the property of Palestinian refugees and internally displaced persons. This law institutionalizes the theft of Palestinian land and property.',
    timestamp: -602251200, // December 1, 1950
    dateString: 'December 1, 1950',
    timeString: '10:00 UTC',
    category: 'political',
    significance: 'critical',
    sources: [
      createSource(
        'Israeli Knesset Records',
        'https://www.knesset.gov.il/laws/special/eng/absentee.htm',
        'government'
      ),
      createSource(
        'Nur Masalha - Expulsion of the Palestinians',
        'https://www.jstor.org/stable/2537790',
        'academic'
      ),
      createSource(
        'Al-Haq Human Rights Organization',
        'https://www.alhaq.org/',
        'human_rights'
      )
    ]
  }
];

const timeline1948: Timeline = {
  id: '1948',
  name: 'The Nakba (1948)',
  description: 'Historical documentation of the Palestinian catastrophe: the systematic ethnic cleansing, mass displacement, and destruction of Palestinian society during the establishment of Israel. Over 750,000 Palestinians were forcibly expelled from their homes, and approximately 530 villages were destroyed.',
  year: 1948,
  slug: 'nakba-1948',
  status: 'historical',
  startTimestamp: -697118400, // November 29, 1947 (UN Partition Plan)
  endTimestamp: -602251200, // December 1, 1950 (Absentee Property Law)
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
    duration: 94867200, // From Partition Plan to Absentee Property Law
    startTimestamp: -697118400,
    endTimestamp: -602251200,
    keyOutcomes: [
      'Over 750,000 Palestinians displaced (75% of Palestinian population)',
      'Approximately 530 Palestinian villages and towns destroyed',
      'Over 70 massacres documented, killing thousands of Palestinians',
      'Systematic implementation of Plan Dalet ethnic cleansing strategy',
      'Establishment of Israel on 78% of historic Palestine',
      'Beginning of Palestinian refugee crisis affecting millions',
      'Legal confiscation of Palestinian property through Absentee Property Law',
      'UN Resolution 194 establishing right of return (repeatedly ignored by Israel)'
    ]
  },
  context: 'The Nakba (Arabic for "catastrophe") refers to the systematic ethnic cleansing and mass displacement of Palestinians during 1947-1950. As documented by Israeli historian Ilan Pappé and others using declassified Israeli archives, this was not a spontaneous result of war but a deliberate strategy implemented through Plan Dalet. The Nakba represents the foundational trauma of Palestinian experience and continues today through ongoing occupation, settlement expansion, and denial of refugee rights. Understanding the Nakba is essential for comprehending the roots of the Palestinian struggle for justice, equality, and the right of return.'
};

export default timeline1948; 