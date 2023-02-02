import { SELECTORS_KEY } from '$utils/constants';

export const SELECTORS = {
  eventsSkeleton: `[${SELECTORS_KEY}="events-skeleton"]`,
  eventsList: `[${SELECTORS_KEY}="events-list"]`,
  eventItem: `[${SELECTORS_KEY}="event-item"]`,
  eventTitle: `[${SELECTORS_KEY}="event-title"]`,
  eventLocation: `[${SELECTORS_KEY}="event-location"]`,

  visitsSkeleton: `[${SELECTORS_KEY}="visits-skeleton"]`,
  visitsList: `[${SELECTORS_KEY}="visits-list"]`,
  visitItem: `[${SELECTORS_KEY}="visit-item"]`,
  visitDate: `[${SELECTORS_KEY}="visit-date"]`,
  visitTitle: `[${SELECTORS_KEY}="visit-title"]`,
  visitLocation: `[${SELECTORS_KEY}="visit-location"]`,
};
