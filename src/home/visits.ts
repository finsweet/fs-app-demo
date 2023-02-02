import { cloneNode, wait } from '@finsweet/ts-utils';

import { TICKETS_DATA } from '$utils/data';
import { displayElement } from '$utils/helpers';
import type { TicketData } from '$utils/types';

import { SELECTORS } from './constants';

/**
 * Inits the events component.
 */
export const initVisitsComponent = async () => {
  // Query elements
  const visitsList = document.querySelector<HTMLElement>(SELECTORS.visitsList);
  if (!visitsList) {
    return;
  }

  // Query items template
  const visitItemTemplate = visitsList.querySelector<HTMLAnchorElement>(SELECTORS.visitItem);
  if (!visitItemTemplate) {
    return;
  }

  visitItemTemplate.remove();

  // Fetch tickets data
  const ticketsData = await fetchTickets();

  // Populate list and display it
  const visitsItems = ticketsData.map((ticketData) =>
    createVisitItem(ticketData, visitItemTemplate)
  );

  visitsList.append(...visitsItems);
  displayElement(visitsList);

  // Hide skeleton
  const visitsSkeleton = document.querySelector<HTMLElement>(SELECTORS.visitsSkeleton);
  if (visitsSkeleton) {
    displayElement(visitsSkeleton, false);
  }
};

/**
 * Creates a new visit item.
 * @param ticketData
 * @param visitItemTemplate
 *
 * @returns A DOM node.
 */
const createVisitItem = (
  { id, title, location, date }: TicketData,
  visitItemTemplate: HTMLAnchorElement
) => {
  // Create new DOM node
  const visitItem = cloneNode(visitItemTemplate);

  // Query child elements
  const titleElement = visitItem.querySelector(SELECTORS.visitTitle);
  const locationElement = visitItem.querySelector(SELECTORS.visitLocation);
  const dateElement = visitItem.querySelector(SELECTORS.visitDate);

  // Populate the data
  if (dateElement) {
    dateElement.textContent = date;
  }

  if (titleElement) {
    titleElement.textContent = title;
  }

  if (locationElement) {
    locationElement.textContent = location;
  }

  // Add query params to the item link
  const url = new URL(visitItem.href);

  url.searchParams.append('id', id);

  visitItem.href = url.toString();

  return visitItem;
};

/**
 * Mocks an API call to fetch the tickets data.
 * @returns An array of {@link TicketData} objects.
 */
const fetchTickets = async (): Promise<TicketData[]> => {
  await wait(2000);

  return TICKETS_DATA;
};
