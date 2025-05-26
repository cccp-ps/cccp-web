/**
 * CCCP.PS - 2023-Present Timeline
 * Gaza-Israel Conflict: A Comprehensive Timeline from October 7, 2023 - May 26, 2025
 * Documenting the humanitarian crisis and civilian impact in occupied Palestine
 */

import type { Timeline, TimelineEvent, SourceLink } from '../types';

// Helper function to create source links
const createSource = (name: string, url: string, type: 'news' | 'solidarity' | 'human_rights' | 'academic' | 'government' | 'international_org'): SourceLink => ({
  name,
  url,
  type,
  credibility: type === 'human_rights' ? 'high' : type === 'international_org' ? 'high' : type === 'solidarity' ? 'medium' : 'high'
});

const events: TimelineEvent[] = [
  {
    id: '2023-10-07-aqsa-flood',
    title: 'Hamas launches \'Operation Al-Aqsa Flood\'',
    description: 'Hamas launches surprise attack on southern Israel, infiltrating border communities via land, sea, and air. Approximately 1,139 Israelis killed and around 250 taken hostage.',
    timestamp: 1696660200,
    dateString: 'October 7, 2023',
    timeString: '06:30 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      israeli: 1139,
      notes: 'Around 250 taken hostage'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2024/10/7/one-year-of-israels-war-on-gaza-a-simple-guide',
        'news'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/7/palestinian-group-hamas-launches-surprise-attack-on-israel-what-to-know',
        'news'
      )
    ]
  },
  {
    id: '2023-10-07-supernova-attack',
    title: 'Attack on Supernova Music Festival',
    description: 'Hamas militants attack the Supernova Music Festival near Re\'im kibbutz, killing 364 people and abducting 40 others.',
    timestamp: 1696662000,
    dateString: 'October 7, 2023',
    timeString: '07:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      israeli: 364,
      notes: '40 others abducted'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/10/what-to-know-about-deadly-hamas-attack-on-the-israeli-music-festival',
        'news'
      )
    ]
  },
  {
    id: '2023-10-07-swords-of-iron',
    title: 'Israel declares state of war',
    description: 'Israel officially declares a state of war, beginning large-scale aerial bombardment of Gaza. Prime Minister Netanyahu announces \'Operation Swords of Iron\'.',
    timestamp: 1696701600,
    dateString: 'October 7, 2023',
    timeString: '18:00 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/7/world-is-watching-fears-grow-of-a-massive-gaza-invasion-by-israel',
        'news'
      )
    ]
  },
  {
    id: '2023-10-08-mobilization',
    title: 'Israel mobilizes 300,000 reservists',
    description: 'Israel formally declares a state of war under Article 40A for the first time since 1973, calling up 300,000 reservists - the largest mobilization in Israel\'s history.',
    timestamp: 1696766400,
    dateString: 'October 8, 2023',
    timeString: '12:00 UTC',
    category: 'conflict',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/gallery/2023/10/8/intense-battles-as-israel-declares-state-of-war',
        'news'
      )
    ]
  },
  {
    id: '2023-10-09-total-blockade',
    title: 'Total blockade of Gaza announced',
    description: 'Defense Minister Yoav Gallant announces a \'total blockade\' of Gaza, cutting electricity and blocking entry of food, fuel, and water, stating \'We are fighting human animals and we are acting accordingly.\'',
    timestamp: 1696852800,
    dateString: 'October 9, 2023',
    timeString: '12:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/9/israel-announces-total-blockade-on-gaza',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org.uk/files/2023-10/Amnesty%20International%20Briefing%20-%20Crisis%20in%20Israel%20and%20the%20Occupied%20Palestinian%20Territories.pdf',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-10-09-gaza-residential-strikes',
    title: 'Israeli airstrikes target residential areas in Gaza',
    description: 'Israeli airstrikes target residential areas in Gaza City, killing at least 70 Palestinians, including 20 children. Multiple apartment buildings completely destroyed with families buried under rubble.',
    timestamp: 1696860000,
    dateString: 'October 9, 2023',
    timeString: '14:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 70,
      notes: '20 children killed, multiple families buried under rubble'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/9/israel-bombs-gaza-residential-areas',
        'news'
      ),
      createSource(
        'B\'Tselem',
        'https://www.btselem.org/gaza_strip/20231122_israel_deliberately_causing_humanitarian_disaster_in_gaza',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-10-11-power-plant-shutdown',
    title: 'Gaza\'s sole power plant ceases operations',
    description: 'Gaza\'s sole power plant ceases operations after running out of fuel due to Israel\'s blockade, leaving the territory without electricity.',
    timestamp: 1697025600,
    dateString: 'October 11, 2023',
    timeString: '12:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/11/gaza-faces-humanitarian-catastrophe-as-sole-power-plant-runs-out-of-fuel',
        'news'
      ),
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/humanitarian-situation-update-288-gaza-strip',
        'international_org'
      )
    ]
  },
  {
    id: '2023-10-13-evacuation-order',
    title: 'IDF orders 1.1 million Palestinians to evacuate northern Gaza',
    description: 'IDF orders 1.1 million Palestinians in northern Gaza to evacuate south within 24 hours. UN warns of humanitarian catastrophe and urges Israel to rescind the order.',
    timestamp: 1697198400,
    dateString: 'October 13, 2023',
    timeString: '12:00 UTC',
    category: 'displacement',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/13/israel-orders-1-1-million-people-in-gaza-to-move-south-what-to-know',
        'news'
      ),
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/hostilities-gaza-strip-and-israel-flash-update-30',
        'international_org'
      )
    ]
  },
  {
    id: '2023-10-13-evacuation-route-bombed',
    title: 'Evacuation route bombed',
    description: 'An evacuation route on Salah al-Din street is bombed; Gaza health ministry reports 70 dead. Hamas tells Gazans to remain in place despite evacuation orders.',
    timestamp: 1697205600,
    dateString: 'October 13, 2023',
    timeString: '14:00 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 70
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/features/2023/12/23/palestinians-in-central-gaza-flee-along-death-corridor-after-israel-order',
        'news'
      )
    ]
  },
  {
    id: '2023-10-17-al-ahli-hospital',
    title: 'Devastating explosion at Gaza\'s al-Ahli Arab Hospital',
    description: 'Devastating explosion at Gaza\'s al-Ahli Arab Hospital kills nearly 500 people. Palestinian officials blame Israeli airstrike; Israel claims it was a misfired Palestinian rocket.',
    timestamp: 1697569200,
    dateString: 'October 17, 2023',
    timeString: '19:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    casualties: {
      palestinian: 500,
      notes: 'Disputed cause - Palestinian officials blame Israeli airstrike'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/17/blast-at-gaza-hospital-kills-hundreds-palestinian-officials-say',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2023/10/israel-opt-gaza-hospital-blast-must-be-independently-investigated/',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-10-27-communications-blackout',
    title: 'Israel intensifies bombardment as Gaza communications collapse',
    description: 'Israel intensifies bombardment of Gaza, leading to collapse of internet and mobile services, isolating the population and complicating humanitarian coordination.',
    timestamp: 1698408000,
    dateString: 'October 27, 2023',
    timeString: '12:00 UTC',
    category: 'humanitarian',
    significance: 'major',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/27/israel-intensifies-gaza-bombardment-as-internet-and-phone-services-go-down',
        'news'
      ),
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/humanitarian-situation-update-288-gaza-strip',
        'international_org'
      )
    ]
  },
  {
    id: '2023-10-28-ground-invasion',
    title: 'Israel begins ground invasion of Gaza Strip',
    description: 'Israel begins ground invasion of Gaza Strip, launching large-scale assault on towns of Beit Hanoun and Bureij.',
    timestamp: 1698494400,
    dateString: 'October 28, 2023',
    timeString: '12:00 UTC',
    category: 'conflict',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/28/israeli-troops-in-gaza-amid-blackout-hamas-to-counter-with-full-force',
        'news'
      )
    ]
  },
  {
    id: '2023-10-31-jabalia-camp-strike',
    title: 'Israeli airstrike on Jabalia refugee camp',
    description: 'Israel launches airstrike on Jabalia refugee camp, killing over 100 people and causing massive destruction in the densely populated area.',
    timestamp: 1698753600,
    dateString: 'October 31, 2023',
    timeString: '12:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 100,
      notes: 'Massive destruction in densely populated refugee camp'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/10/31/dozens-killed-in-israeli-air-attack-on-gaza-refugee-camp-medical-official',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2023/10/israel-opt-unlawful-israeli-attacks-targeting-civilians-in-gaza-must-be-investigated-as-war-crimes/',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-11-15-al-shifa-raid',
    title: 'Israeli forces storm Al-Shifa Hospital',
    description: 'Israeli forces enter Al-Shifa Hospital, Gaza\'s largest medical facility, after prolonged siege. Medical staff report patients dying due to power cuts and lack of supplies. WHO loses contact with hospital staff.',
    timestamp: 1700038800,
    dateString: 'November 15, 2023',
    timeString: '09:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/11/15/israeli-forces-storm-al-shifa-hospital-gaza',
        'news'
      ),
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/hostilities-gaza-strip-and-israel-flash-update-30',
        'international_org'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org.au/israel-opt-israels-raid-of-al-shifa-hospital-is-a-devastating-attack-on-human-rights-in-gaza-crisis/',
        'human_rights'
      )
    ]
  },
  {
    id: '2023-11-24-ceasefire-begins',
    title: 'First temporary ceasefire begins',
    description: 'First temporary ceasefire begins on day 49 of the war. Aid trucks begin entering Gaza through Rafah Border Crossing. Hamas releases first group of 24 hostages.',
    timestamp: 1700809200,
    dateString: 'November 24, 2023',
    timeString: '07:00 UTC',
    category: 'ceasefire',
    significance: 'critical',
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/11/24/hamas-releases-24-captives-amid-israel-truce-heres-whats-to-know',
        'news'
      )
    ]
  },
  {
    id: '2023-12-01-ceasefire-ends',
    title: 'Seven-day ceasefire formally ends',
    description: 'Seven-day ceasefire formally ends. IDF resumes combat operations at same intensity as before. Gaza Health Ministry reports over 180 people killed as fighting resumes.',
    timestamp: 1701414000,
    dateString: 'December 1, 2023',
    timeString: '07:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 180,
      notes: 'Killed as fighting resumes immediately after ceasefire'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/12/1/the-israel-hamas-truce-has-ended-what-we-know-so-far',
        'news'
      )
    ]
  },
  {
    id: '2023-12-29-south-africa-icj',
    title: 'South Africa files genocide case against Israel at ICJ',
    description: 'South Africa files case against Israel at International Court of Justice, alleging violations of Genocide Convention and requesting provisional measures to prevent further harm.',
    timestamp: 1703851200,
    dateString: 'December 29, 2023',
    timeString: '12:00 UTC',
    category: 'international',
    significance: 'critical',
    sources: [
      createSource(
        'ICJ',
        'https://www.icj-cij.org/node/203454',
        'international_org'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2023/12/29/south-africa-asks-icj-to-order-israel-to-stop-gaza-war',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2023/12/israel-opt-south-africas-icj-case-against-israel-could-mark-a-turning-point-for-accountability/',
        'human_rights'
      )
    ]
  },
  {
    id: '2024-01-26-icj-ruling',
    title: 'ICJ issues interim ruling ordering Israel to prevent genocide',
    description: 'ICJ issues interim ruling ordering Israel to prevent acts of genocide in Gaza and improve humanitarian situation. Court confirms jurisdiction under Genocide Convention but stops short of ordering ceasefire.',
    timestamp: 1706277600,
    dateString: 'January 26, 2024',
    timeString: '14:00 UTC',
    category: 'international',
    significance: 'critical',
    sources: [
      createSource(
        'ICJ',
        'https://www.icj-cij.org/node/203454',
        'international_org'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2024/1/26/icj-orders-israel-to-prevent-acts-of-genocide-in-gaza',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2024/01/israel-opt-icj-ruling-must-be-turning-point-to-stop-relentless-assault-on-gaza/',
        'human_rights'
      )
    ]
  },
  {
    id: '2024-05-24-icj-rafah-ruling',
    title: 'ICJ orders Israel to halt military offensive in Rafah',
    description: 'ICJ issues third set of provisional measures ordering Israel to immediately halt military offensive in Rafah and maintain open border crossing for humanitarian aid. Court finds "real and imminent risk" of irreparable harm to Palestinians.',
    timestamp: 1716562800,
    dateString: 'May 24, 2024',
    timeString: '15:00 UTC',
    category: 'international',
    significance: 'critical',
    sources: [
      createSource(
        'ICJ',
        'https://www.icj-cij.org/node/204091',
        'international_org'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2024/5/24/icj-orders-israel-to-halt-military-offensive-in-rafah',
        'news'
      ),
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2024/05/israel-opt-icj-ruling-on-rafah-must-be-implemented-immediately/',
        'human_rights'
      )
    ]
  },
  {
    id: '2024-10-07-anniversary',
    title: 'First anniversary of October 7 attacks',
    description: 'On the first anniversary of the October 7 attacks, Israel marked the day with memorials while simultaneously intensifying attacks on Gaza and Lebanon. The Gaza death toll reached 41,615 Palestinians, including 16,756 children, with over 97,303 injured.',
    timestamp: 1728295200,
    dateString: 'October 7, 2024',
    timeString: '10:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    casualties: {
      palestinian: 41615,
      notes: '16,756 children killed, 97,303 injured by one-year anniversary'
    },
    sources: [
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/longform/2024/10/8/one-year-of-israels-war-on-gaza-by-the-numbers',
        'news'
      ),
      createSource(
        'B\'Tselem',
        'https://www.btselem.org/statistics/gaza_casualties',
        'human_rights'
      )
    ]
  },
  {
    id: '2025-01-19-ceasefire-agreement',
    title: 'Gaza ceasefire agreement takes effect',
    description: 'A new ceasefire agreement was reached, bringing hope for lasting peace and prisoner exchanges.',
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
      )
    ]
  },
  {
    id: '2025-03-02-full-blockade',
    title: 'Israel imposes full blockade on Gaza',
    description: 'Israel imposed a full blockade on Gaza, bringing humanitarian efforts to a near-standstill. The blockade prevented entry of aid and commercial goods, creating catastrophic conditions for over 2 million civilians and constituting what Amnesty International described as a "genocidal act."',
    timestamp: 1740873600,
    dateString: 'March 2, 2025',
    timeString: '00:00 UTC',
    category: 'humanitarian',
    significance: 'critical',
    sources: [
      createSource(
        'Amnesty International',
        'https://www.amnesty.org/en/latest/news/2025/05/israel-opt-two-months-of-cruel-and-inhumane-siege-are-further-evidence-of-israels-genocidal-intent-in-gaza/',
        'human_rights'
      ),
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/humanitarian-situation-update-288-gaza-strip',
        'international_org'
      ),
      createSource(
        'UNRWA',
        'https://www.unrwa.org/resources/reports/unrwa-situation-report-145-situation-gaza-strip-and-west-bank-including-east-jerusalem',
        'international_org'
      )
    ]
  },
  {
    id: '2025-03-18-ceasefire-collapses',
    title: 'Military escalation resumes in Gaza',
    description: 'Israeli forces escalated military operations across Gaza, resulting in 855 deaths and 1,869 injuries in a single attack. The escalation triggered mass displacement, with over 436,000 people forced to flee again, confined to ever-shrinking spaces with limited access to basic services.',
    timestamp: 1742382000,
    dateString: 'March 18, 2025',
    timeString: '08:00 UTC',
    category: 'conflict',
    significance: 'critical',
    casualties: {
      palestinian: 855,
      injured: 1869,
      notes: 'Over 436,000 people displaced again'
    },
    sources: [
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/humanitarian-situation-update-288-gaza-strip',
        'international_org'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2025/3/18/israel-escalates-attacks-on-gaza-following-ceasefire-collapse',
        'news'
      ),
      createSource(
        'B\'Tselem',
        'https://www.btselem.org/statistics/gaza_casualties',
        'human_rights'
      )
    ]
  },
  {
    id: '2025-05-14-jabalya-strikes',
    title: 'Deadly airstrikes on Jabalya refugee camp',
    description: 'Israeli airstrikes hit a house in Jabalya refugee camp in North Gaza, killing 19 Palestinians, including nine women and nine children. In a separate strike minutes later, 15 people were killed, including nine children and three women, when two apartments were hit in the same area.',
    timestamp: 1747100400,
    dateString: 'May 14, 2025',
    timeString: '01:30 UTC',
    category: 'conflict',
    significance: 'major',
    casualties: {
      palestinian: 34,
      notes: '18 children and 12 women killed in residential strikes'
    },
    sources: [
      createSource(
        'OCHA-oPt',
        'https://www.ochaopt.org/content/humanitarian-situation-update-288-gaza-strip',
        'international_org'
      ),
      createSource(
        'Al Jazeera',
        'https://www.aljazeera.com/news/2025/5/14/israeli-strikes-kill-dozens-in-jabalya-refugee-camp',
        'news'
      ),
      createSource(
        'B\'Tselem',
        'https://www.btselem.org/statistics/gaza_casualties',
        'human_rights'
      )
    ]
  }
];

const timeline2023: Timeline = {
  id: '2023',
  name: 'Gaza-Israel Conflict: Humanitarian Crisis (2023-Present)',
  description: 'Comprehensive documentation of the Gaza-Israel conflict from October 7, 2023, through May 2025, focusing on the unprecedented humanitarian crisis, civilian casualties, infrastructure destruction, and international legal responses.',
  year: 2023,
  slug: '2023-present',
  status: 'ongoing',
  startTimestamp: 1696660200, // October 7, 2023 06:30 UTC
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
    duration: Math.floor(Date.now() / 1000) - 1696660200,
    startTimestamp: 1696660200,
    totalCasualties: {
      palestinian: 52928,
      israeli: 1139,
      injured: 119846,
      civilian: 50000
    },
    keyOutcomes: [
      'Over 52,928 Palestinians killed and 119,846 injured according to Gaza Ministry of Health',
      'Approximately 90% of Gaza\'s population displaced, many multiple times',
      '71% of the Gaza Strip within Israeli-militarized zones or under displacement orders',
      'The entire population of 2.1 million people facing critical food insecurity',
      '470,000 people (22% of the population) experiencing catastrophic hunger (IPC Phase 5)',
      'Only 17 of 36 hospitals partially functional, with 66% of critical infrastructure damaged or destroyed',
      'At least 430 aid workers killed, including 305 UN staff',
      'More than 1,400 healthcare workers killed',
      '62% of school buildings used as shelters directly hit',
      'Total infrastructure damage estimated at $18.5 billion (97% of Gaza\'s GDP)',
      'Multiple ICJ rulings ordering Israel to prevent genocide and improve humanitarian conditions',
      'Ongoing legal proceedings at International Court of Justice for genocide allegations'
    ],
    humanitarianImpacts: [
      'Unprecedented destruction in Gaza with tens of thousands of civilian casualties',
      'Systematic targeting of civilian infrastructure including hospitals, schools, and water facilities',
      'Use of starvation as a method of warfare according to Amnesty International',
      'Creation of conditions described by international legal experts as potential genocide',
      'Complete collapse of healthcare system with only partial functionality remaining',
      'Severe food insecurity affecting entire population with famine conditions developing',
      'Mass displacement with population confined to ever-shrinking safe areas',
      'Targeting of humanitarian workers and UN personnel hampering aid efforts',
      'Deliberate destruction of Palestinian historical records and cultural heritage',
      'International isolation of Gaza through comprehensive blockade of essential supplies'
    ],
    eventsByCategory: {
      conflict: 12,
      humanitarian: 8,
      displacement: 2,
      ceasefire: 2,
      international: 4,
      political: 0
    },
    eventsBySignificance: {
      critical: 18,
      major: 10,
      moderate: 0,
      minor: 0
    }
  },
  context: 'This timeline documents the Gaza-Israel conflict from October 7, 2023, to May 2025, presenting events from a Palestinian-centered perspective focused on humanitarian impact. The conflict began with Hamas\'s Al-Aqsa Flood operation and Israel\'s subsequent military response, resulting in unprecedented destruction in Gaza. The timeline chronicles the evolution from initial attacks through ground invasions, temporary ceasefires, international legal interventions, and ongoing humanitarian catastrophe. International bodies including the ICJ have issued multiple rulings addressing allegations of genocide and ordering protective measures, while humanitarian organizations have documented systematic violations of international law. The Palestinian civilian population has borne the brunt of this conflict, with the vast majority of casualties being civilians, including thousands of children, and the near-total destruction of Gaza\'s infrastructure creating conditions that require years to rebuild.'
};

export default timeline2023; 