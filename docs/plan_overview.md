# CCCP.PS - Multi-Timeline Architecture Plan

## Project Overview
CCCP.PS is a modular timeline tracking system for Palestinian solidarity, designed to accommodate multiple historical periods and conflicts. The current implementation focuses on the 2023-present escalation, with architecture ready for expansion to include the Nakba (1948), Six Day War (1967), Intifadas, and other significant periods.

## Updated Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── TimelineNavigation.astro
│   ├── timeline/
│   │   ├── TimelineCard.astro
│   │   ├── TimelineList.astro
│   │   ├── TimelineSummary.astro
│   │   └── TimelineCounter.astro
│   ├── shared/
│   │   ├── DateBadge.astro
│   │   ├── CounterDisplay.astro
│   │   └── SourceLinks.astro
│   └── support/
│       ├── HumanitarianOrgs.astro
│       ├── SiteSupport.astro
│       └── SolidarityMessage.astro
├── data/
│   ├── timelines/
│   │   ├── 1948.ts      # Nakba and 1948 events
│   │   ├── 1967.ts      # Six Day War (future)
│   │   ├── 1987.ts      # First Intifada (future)
│   │   ├── 2000.ts      # Second Intifada (future)
│   │   ├── 2023.ts      # Current conflict (2023-present)
│   │   └── index.ts     # Timeline registry
│   └── types.ts         # TypeScript interfaces
├── pages/
│   ├── index.astro      # Homepage with timeline selector
│   └── timeline/
│       ├── [year].astro # Dynamic routing by year
│       ├── 1948.astro   # Nakba timeline
│       └── 2023.astro   # Current conflict timeline
├── scripts/
│   ├── counter.js       # Counter functionality
│   └── timeline-utils.js # Utility functions
└── styles/
    ├── global.css       # Base styles
    └── timeline-themes.css # Year-specific themes
```

## Data Architecture

### Core Types (src/data/types.ts)

```typescript
export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  timestamp: number;
  type: 'conflict' | 'ceasefire' | 'political' | 'humanitarian' | 'displacement';
  utcTime: string;
  sources: SourceLink[];
  context?: string;
  significance: 'critical' | 'major' | 'important' | 'notable';
  casualties?: {
    palestinian?: number;
    israeli?: number;
    civilian?: number;
  };
}

export interface Timeline {
  year: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  period: {
    start: number;
    end?: number; // undefined for ongoing
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  events: TimelineEvent[];
  metadata: {
    sources: SourceLink[];
    lastUpdated: string;
    tags: string[];
    status: 'ongoing' | 'historical' | 'archived';
  };
  stats?: {
    totalEvents: number;
    duration: string;
    keyOutcomes: string[];
  };
}

export interface SourceLink {
  name: string;
  url: string;
  type: 'news' | 'academic' | 'official' | 'solidarity' | 'historical';
  credibility: 'high' | 'medium' | 'verified';
}
```

### Timeline Data Organization

#### Current Conflict - 2023 (src/data/timelines/2023.ts)
```typescript
export const timeline2023: Timeline = {
  year: 2023,
  slug: '2023',
  title: 'Palestine Under Siege',
  subtitle: '2023-Present Escalation',
  description: 'Timeline of the current escalation beginning October 7, 2023',
  period: {
    start: 1696656600, // Oct 7, 2023
    end: undefined // ongoing
  },
  theme: {
    primary: 'red',
    secondary: 'green',
    accent: 'white',
    background: 'black'
  },
  events: [
    {
      id: 'al-aqsa-flood',
      date: '2023-10-07',
      title: 'Hamas Insurgence (al-Aqsa Flood)',
      description: 'The beginning of the current escalation in Gaza and the West Bank.',
      timestamp: 1696656600,
      type: 'conflict',
      utcTime: '05:30',
      significance: 'critical',
      sources: [/* current sources */]
    },
    // ... other 2023 events
  ],
  metadata: {
    sources: [/* comprehensive sources */],
    lastUpdated: '2025-01-22',
    tags: ['gaza', 'current', 'siege', 'ongoing'],
    status: 'ongoing'
  },
  stats: {
    totalEvents: 6,
    duration: '15+ months',
    keyOutcomes: ['Ongoing humanitarian crisis', 'International legal proceedings', 'Global solidarity movement']
  }
};
```

#### Nakba - 1948 (src/data/timelines/1948.ts)
```typescript
export const timeline1948: Timeline = {
  year: 1948,
  slug: '1948',
  title: 'The Nakba',
  subtitle: '1948 Palestinian Catastrophe',
  description: 'The systematic expulsion and displacement of Palestinians during the 1948 Arab-Israeli War',
  period: {
    start: -692841600, // May 15, 1948
    end: -671529600   // Dec 31, 1948
  },
  theme: {
    primary: 'orange',
    secondary: 'yellow',
    accent: 'black',
    background: 'slate'
  },
  events: [
    {
      id: 'israel-declaration',
      date: '1948-05-15',
      title: 'Israel Declaration of Independence',
      description: 'The state of Israel was declared, marking the beginning of systematic Palestinian displacement.',
      timestamp: -692841600,
      type: 'political',
      utcTime: '00:00',
      significance: 'critical',
      casualties: {
        palestinian: 15000, // estimated
        civilian: 13000
      },
      sources: [/* historical sources */]
    },
    {
      id: 'deir-yassin-massacre',
      date: '1948-04-09',
      title: 'Deir Yassin Massacre',
      description: 'Zionist militias killed over 100 Palestinian villagers, escalating the ethnic cleansing campaign.',
      timestamp: -696067200,
      type: 'conflict',
      utcTime: '06:00',
      significance: 'critical',
      sources: [/* historical sources */]
    },
    // ... more 1948 events
  ],
  metadata: {
    sources: [/* historical archives */],
    lastUpdated: '2025-01-22',
    tags: ['nakba', '1948', 'displacement', 'historical', 'ethnic-cleansing'],
    status: 'historical'
  },
  stats: {
    totalEvents: 12,
    duration: '8 months',
    keyOutcomes: ['750,000+ Palestinians displaced', '531 villages destroyed', 'Creation of refugee crisis']
  }
};
```

## Routing Strategy

### Dynamic Year-Based Routing (src/pages/timeline/[year].astro)
```astro
---
export async function getStaticPaths() {
  const { getAllTimelines } = await import('../../data/timelines');
  
  return getAllTimelines().map(timeline => ({
    params: { year: timeline.year.toString() }
  }));
}

const { year } = Astro.params;
const { getTimelineByYear } = await import('../../data/timelines');
const timeline = getTimelineByYear(parseInt(year));

if (!timeline) {
  return Astro.redirect('/404');
}
---

<Layout title={`${timeline.title} - CCCP.PS`}>
  <TimelineNavigation currentYear={timeline.year} />
  <main class={`timeline-${timeline.year} theme-${timeline.theme.primary}`}>
    <TimelineList timeline={timeline} />
    <TimelineSummary timeline={timeline} />
  </main>
</Layout>
```

### Homepage (src/pages/index.astro)
```astro
---
const { getAllTimelines } = await import('../data/timelines');
const timelines = getAllTimelines();
const currentTimeline = timelines.find(t => t.metadata.status === 'ongoing');
---

<Layout title="CCCP.PS - Palestine Solidarity Timelines">
  <Header />
  
  <main class="homepage">
    <!-- Featured Current Timeline -->
    {currentTimeline && (
      <section class="featured-timeline">
        <h2>Current Crisis</h2>
        <TimelineCard timeline={currentTimeline} featured={true} />
        <a href={`/timeline/${currentTimeline.year}`} class="cta-button">
          View Full Timeline →
        </a>
      </section>
    )}
    
    <!-- Historical Timelines Grid -->
    <section class="historical-timelines">
      <h2>Historical Timelines</h2>
      <div class="timeline-grid">
        {timelines
          .filter(t => t.metadata.status === 'historical')
          .map(timeline => (
            <TimelineCard timeline={timeline} />
          ))
        }
      </div>
    </section>
    
    <!-- Coming Soon -->
    <section class="coming-soon">
      <h2>Coming Soon</h2>
      <div class="timeline-previews">
        <div class="timeline-preview">1967 - Six Day War</div>
        <div class="timeline-preview">1987 - First Intifada</div>
        <div class="timeline-preview">2000 - Second Intifada</div>
      </div>
    </section>
  </main>
  
  <HumanitarianOrgs />
  <SolidarityMessage />
  <Footer />
</Layout>
```

## Timeline Registry (src/data/timelines/index.ts)

```typescript
import { timeline1948 } from './1948';
import { timeline2023 } from './2023';
import type { Timeline } from '../types';

export const timelines: Record<number, Timeline> = {
  1948: timeline1948,
  2023: timeline2023,
  // Future timelines:
  // 1967: timeline1967,
  // 1987: timeline1987,
  // 2000: timeline2000,
};

export const getAllTimelines = (): Timeline[] => Object.values(timelines);

export const getTimelineByYear = (year: number): Timeline | undefined => timelines[year];

export const getTimelineBySlug = (slug: string): Timeline | undefined => 
  Object.values(timelines).find(t => t.slug === slug);

export const getOngoingTimelines = (): Timeline[] => 
  getAllTimelines().filter(t => t.metadata.status === 'ongoing');

export const getHistoricalTimelines = (): Timeline[] => 
  getAllTimelines().filter(t => t.metadata.status === 'historical');
```

## Component Architecture

### Timeline Navigation (src/components/layout/TimelineNavigation.astro)
```astro
---
export interface Props {
  currentYear?: number;
}

const { currentYear } = Astro.props;
const { getAllTimelines } = await import('../../data/timelines');
const timelines = getAllTimelines();
---

<nav class="timeline-navigation">
  <div class="nav-header">
    <a href="/" class="logo">CCCP.PS</a>
    <span class="tagline">Palestine Solidarity Timelines</span>
  </div>
  
  <ul class="timeline-menu">
    {timelines.map(timeline => (
      <li>
        <a 
          href={`/timeline/${timeline.year}`}
          class={`timeline-link ${currentYear === timeline.year ? 'active' : ''}`}
          data-theme={timeline.theme.primary}
        >
          <span class="year">{timeline.year}</span>
          <span class="title">{timeline.title}</span>
          <span class="status">{timeline.metadata.status}</span>
        </a>
      </li>
    ))}
  </ul>
</nav>
```

## Implementation Phases

### Phase 1: Data Layer Refactoring (Week 1)
1. Create `src/data/types.ts` with comprehensive interfaces
2. Extract current events to `src/data/timelines/2023.ts`
3. Create timeline registry in `src/data/timelines/index.ts`
4. Update existing components to use new data structure

### Phase 2: Routing & Navigation (Week 2)
1. Implement dynamic routing with `[year].astro`
2. Create timeline navigation component
3. Update homepage to showcase multiple timelines
4. Add timeline-specific themes

### Phase 3: Historical Content (Week 3)
1. Research and create `src/data/timelines/1948.ts`
2. Implement historical counter types (years since events)
3. Add specialized components for historical events
4. Create timeline comparison features

### Phase 4: Enhanced Features (Week 4)
1. Add statistics and key outcomes sections
2. Implement timeline filtering and search
3. Create interactive timeline connections
4. Add accessibility improvements

## Technical Considerations

### Counter Types by Timeline
- **Ongoing (2023)**: Live second-precision counters
- **Historical (1948)**: "X years since" format
- **Mixed**: Some events use different counter types

### SEO & Performance
- Static generation for all timeline pages
- Proper meta tags per timeline
- Optimized images and assets
- Structured data for events

### Accessibility
- Screen reader support for counters
- Keyboard navigation
- High contrast modes
- Proper ARIA labels

## Deployment Strategy
- GitHub Pages compatible
- Netlify deployment ready
- Static site generation
- Environment-based configuration

This architecture provides a scalable foundation for expanding CCCP.PS into a comprehensive Palestinian solidarity timeline platform while maintaining the current functionality and aesthetic.
