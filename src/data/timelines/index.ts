/**
 * CCCP.PS - Timeline Registry
 * Central registry for all timeline data with accessor functions
 */

import type { Timeline, TimelineRegistry } from '../types';

// Import all timeline modules
import timeline1948 from './1948';
import timeline1967 from './1967';
import timeline1987 from './1987';
import timeline2000 from './2000';
import timeline2023 from './2023';

// Central timeline collection
const timelines: Timeline[] = [
  timeline1948,
  timeline1967,
  timeline1987,
  timeline2000,
  timeline2023
];

// Create a map for efficient lookups
const timelinesByYear = new Map<number, Timeline>();
const timelinesBySlug = new Map<string, Timeline>();

// Populate lookup maps
timelines.forEach(timeline => {
  timelinesByYear.set(timeline.year, timeline);
  timelinesBySlug.set(timeline.slug, timeline);
});

/**
 * Timeline Registry Implementation
 * Provides all accessor functions for timeline data
 */
export const timelineRegistry: TimelineRegistry = {
  /**
   * Get all available timelines
   * @returns Array of all timeline objects
   */
  getAllTimelines(): Timeline[] {
    return [...timelines]; // Return a copy to prevent mutation
  },

  /**
   * Get timeline by year
   * @param year - Year to look up (e.g., 1948, 1967, 1987, 2000, 2023)
   * @returns Timeline object or null if not found
   */
  getTimelineByYear(year: number): Timeline | null {
    return timelinesByYear.get(year) || null;
  },

  /**
   * Get timeline by slug
   * @param slug - URL slug to look up (e.g., "nakba-1948", "2023-present")
   * @returns Timeline object or null if not found
   */
  getTimelineBySlug(slug: string): Timeline | null {
    return timelinesBySlug.get(slug) || null;
  },

  /**
   * Get all ongoing timelines
   * @returns Array of timelines with status "ongoing"
   */
  getOngoingTimelines(): Timeline[] {
    return timelines.filter(timeline => timeline.status === 'ongoing');
  },

  /**
   * Get all historical timelines
   * @returns Array of timelines with status "historical"
   */
  getHistoricalTimelines(): Timeline[] {
    return timelines.filter(timeline => timeline.status === 'historical');
  },

  /**
   * Get all archived timelines
   * @returns Array of timelines with status "archived"
   */
  getArchivedTimelines(): Timeline[] {
    return timelines.filter(timeline => timeline.status === 'archived');
  }
};

// Export individual functions for convenience
export const {
  getAllTimelines,
  getTimelineByYear,
  getTimelineBySlug,
  getOngoingTimelines,
  getHistoricalTimelines,
  getArchivedTimelines
} = timelineRegistry;

// Export timeline collections for direct access
export { timelines };

// Export individual timelines for direct import
export {
  timeline1948,
  timeline1967,
  timeline1987,
  timeline2000,
  timeline2023
};

// Default export is the registry
export default timelineRegistry; 