import { cloneNode, wait } from '@finsweet/ts-utils';

import { EVENTS_DATA } from '$utils/data';
import { displayElement } from '$utils/helpers';
import type { EventData } from '$utils/types';

import { SELECTORS } from './constants';

/**
 * Inits the events component.
 */
export const initEventsComponent = async () => {
  // Query elements
  const eventsList = document.querySelector<HTMLElement>(SELECTORS.eventsList);
  if (!eventsList) {
    return;
  }

  // Query item template
  const eventItemTemplate = eventsList.querySelector<HTMLElement>(SELECTORS.eventItem);
  if (!eventItemTemplate) {
    return;
  }

  eventItemTemplate.remove();

  // Fetch events data
  const eventsData = await fetchEvents();

  // Populate list and display it
  const eventsItems = eventsData.map((eventData) => createEventItem(eventData, eventItemTemplate));

  eventsList.append(...eventsItems);
  displayElement(eventsList);

  // Hide skeleton
  const eventsSkeleton = document.querySelector<HTMLElement>(SELECTORS.eventsSkeleton);
  if (eventsSkeleton) {
    displayElement(eventsSkeleton, false);
  }
};

/**
 * Creates a new event item.
 * @param eventData
 * @param eventItemTemplate
 *
 * @returns A DOM node.
 */
const createEventItem = ({ title, location, color }: EventData, eventItemTemplate: HTMLElement) => {
  // Create new DOM node
  const eventItem = cloneNode(eventItemTemplate);

  // Query child elements
  const titleElement = eventItem.querySelector(SELECTORS.eventTitle);
  const locationElement = eventItem.querySelector(SELECTORS.eventLocation);

  // Populate the data
  if (titleElement) {
    titleElement.textContent = title;
  }

  if (locationElement) {
    locationElement.textContent = location;
  }

  eventItem.style.backgroundColor = color;

  return eventItem;
};

/**
 * Mocks an API call to fetch the events data.
 * @returns An array of {@link EventData} objects.
 */
const fetchEvents = async (): Promise<EventData[]> => {
  await wait(1000);

  return EVENTS_DATA;
};
