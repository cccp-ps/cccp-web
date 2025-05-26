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
│   │   ├── 1967.ts      # Six Day War 
│   │   ├── 1987.ts      # First Intifada 
│   │   ├── 2000.ts      # Second Intifada 
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

### Core Types System (src/data/types.ts)

**TimelineEvent Interface**
- Unique event identification and metadata
- Timestamp-based chronological ordering
- Event categorization (conflict, ceasefire, political, humanitarian, displacement)
- Source attribution and credibility tracking
- Significance levels for prioritization
- Optional casualty data for humanitarian context

**Timeline Interface**
- Year-based organization and routing
- Period definition with start/end timestamps
- Thematic styling configuration per timeline
- Event collection with metadata
- Status tracking (ongoing, historical, archived)
- Statistical summaries and key outcomes

**SourceLink Interface**
- Multi-type source categorization
- Credibility assessment framework
- External link management

### Timeline Data Organization

#### Current Conflict - 2023 (src/data/timelines/2023.ts)
**Design Approach:**
- Real-time tracking with ongoing status
- Live counter functionality for all events
- Red/green/white Palestinian flag theming
- Emphasis on humanitarian crisis and international response
- Sources from solidarity media and human rights organizations

**Key Events Structure:**
- Al-Aqsa Flood operation initiation
- Israeli ground invasion escalation
- Ceasefire negotiations and breakdowns
- Humanitarian milestones and casualties
- International legal and political developments

#### Nakba - 1948 (src/data/timelines/1948.ts)
**Design Approach:**
- Historical perspective with archival documentation
- Orange/yellow/black earth-tone theming representing displacement
- Focus on village destruction and refugee creation
- Long-term impact tracking ("X years since" counters)
- Academic and historical source prioritization

**Key Events Structure:**
- Deir Yassin Massacre and early escalations
- Israeli independence declaration
- Village destructions and mass displacements
- Refugee camp establishments
- International recognition milestones

#### Six Day War - 1967 (src/data/timelines/1967.ts)
**Design Approach:**
- Blue/white theming representing occupation expansion
- West Bank and Gaza occupation focus
- UN Resolution tracking
- Settlement initiation documentation

#### First Intifada - 1987 (src/data/timelines/1987.ts)
**Design Approach:**
- Purple theming representing popular resistance
- Grassroots uprising documentation
- Civil disobedience and collective punishment tracking
- Oslo Accords pathway events

#### Second Intifada - 2000 (src/data/timelines/2000.ts)
**Design Approach:**
- Maroon theming representing intensified conflict
- Breakdown of Oslo process
- Suicide bombing and military operation cycles
- International intervention attempts

## Routing Strategy

### Dynamic Year-Based Routing (src/pages/timeline/[year].astro)
**Architecture:**
- Static path generation from timeline registry
- Year-based parameter extraction and validation
- Timeline data fetching with error handling
- Dynamic theme application based on timeline configuration
- Conditional navigation state management

### Homepage Design (src/pages/index.astro)
**Layout Structure:**
- Featured current timeline with prominent display
- Historical timelines grid with visual hierarchy
- Timeline status differentiation (ongoing vs historical)
- Call-to-action routing to detailed timeline views
- Integration of support components and solidarity messaging

## Timeline Registry (src/data/timelines/index.ts)

**Registry Management:**
- Central timeline import and organization
- Year-based timeline mapping for efficient lookup
- Multiple accessor functions for different use cases
- Status-based filtering (ongoing, historical, archived)
- Type-safe timeline retrieval with fallback handling

**Key Functions:**
- getAllTimelines(): Complete timeline collection
- getTimelineByYear(): Year-based timeline lookup
- getTimelineBySlug(): Alternative slug-based access
- getOngoingTimelines(): Live timeline filtering
- getHistoricalTimelines(): Historical timeline collection

## Component Architecture

### Timeline Navigation (src/components/layout/TimelineNavigation.astro)
**Design Principles:**
- Brand identity integration with CCCP.PS logo
- Dynamic timeline menu generation from registry
- Active state management for current timeline
- Theme-aware styling based on timeline configuration
- Status indication for timeline state (ongoing/historical)

### Timeline Components (src/components/timeline/)
**TimelineCard.astro:**
- Reusable event display component
- Theme-adaptive styling system
- Counter integration for time tracking
- Source attribution and metadata display

**TimelineList.astro:**
- Event collection container
- Chronological ordering and spacing
- Responsive layout management
- Event filtering and search integration

**TimelineSummary.astro:**
- Statistical overview display
- Key outcomes highlighting
- Source compilation table
- Duration and impact metrics

**TimelineCounter.astro:**
- Real-time counter functionality
- Historical vs ongoing counter types
- Multi-format time display (seconds to years)
- JavaScript integration for live updates

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
