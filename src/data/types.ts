/**
 * CCCP.PS - Multi-Timeline Architecture Types
 * TypeScript interfaces for timeline events, sources, and configuration
 */

export type EventCategory = 
  | 'conflict' 
  | 'ceasefire' 
  | 'political' 
  | 'humanitarian' 
  | 'displacement'
  | 'international';

export type SourceType = 
  | 'news' 
  | 'solidarity' 
  | 'human_rights' 
  | 'academic' 
  | 'government' 
  | 'international_org';

export type CredibilityLevel = 'high' | 'medium' | 'low';

export type SignificanceLevel = 'critical' | 'major' | 'moderate' | 'minor';

export type TimelineStatus = 'ongoing' | 'historical' | 'archived';

export interface SourceLink {
  /** Display name for the source */
  name: string;
  /** Full URL to the source */
  url: string;
  /** Type of source for categorization */
  type: SourceType;
  /** Credibility assessment of the source */
  credibility: CredibilityLevel;
  /** Optional description of the source content */
  description?: string;
}

export interface CasualtyData {
  /** Number of Palestinian casualties */
  palestinian?: number;
  /** Number of Israeli casualties */
  israeli?: number;
  /** Number of injured */
  injured?: number;
  /** Additional notes about casualties */
  notes?: string;
}

export interface TimelineEvent {
  /** Unique identifier for the event */
  id: string;
  /** Event title/name */
  title: string;
  /** Detailed description of the event */
  description: string;
  /** UNIX timestamp of the event */
  timestamp: number;
  /** Human-readable date string */
  dateString: string;
  /** Time string (e.g., "05:30 UTC") */
  timeString?: string;
  /** Event category for organization */
  category: EventCategory;
  /** Sources documenting this event */
  sources: SourceLink[];
  /** Significance level for prioritization */
  significance: SignificanceLevel;
  /** Optional casualty information */
  casualties?: CasualtyData;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

export interface TimelineTheme {
  /** Primary theme color */
  primary: string;
  /** Secondary theme color */
  secondary?: string;
  /** Background gradient colors */
  gradient: string[];
  /** Border color for components */
  border: string;
  /** Text color for dates/badges */
  text: string;
}

export interface TimelineStats {
  /** Total number of events */
  totalEvents: number;
  /** Duration in seconds */
  duration: number;
  /** Start timestamp */
  startTimestamp: number;
  /** End timestamp (for historical timelines) */
  endTimestamp?: number;
  /** Key statistical outcomes */
  keyOutcomes?: string[];
}

export interface Timeline {
  /** Unique identifier (year) */
  id: string;
  /** Display name of the timeline */
  name: string;
  /** Detailed description */
  description: string;
  /** Year for routing */
  year: number;
  /** URL slug for alternative routing */
  slug: string;
  /** Timeline status */
  status: TimelineStatus;
  /** Start timestamp of the period */
  startTimestamp: number;
  /** End timestamp (null for ongoing) */
  endTimestamp?: number;
  /** Theme configuration */
  theme: TimelineTheme;
  /** Collection of events */
  events: TimelineEvent[];
  /** Statistical summary */
  stats: TimelineStats;
  /** Additional context or background */
  context?: string;
}

export interface TimelineRegistry {
  /** Get all available timelines */
  getAllTimelines(): Timeline[];
  /** Get timeline by year */
  getTimelineByYear(year: number): Timeline | null;
  /** Get timeline by slug */
  getTimelineBySlug(slug: string): Timeline | null;
  /** Get all ongoing timelines */
  getOngoingTimelines(): Timeline[];
  /** Get all historical timelines */
  getHistoricalTimelines(): Timeline[];
  /** Get all archived timelines */
  getArchivedTimelines(): Timeline[];
} 