import { wait } from '@finsweet/ts-utils';

import { TICKETS_DATA } from '$utils/data';
import { displayElement, redirectToHome } from '$utils/helpers';
import type { TicketData } from '$utils/types';

import { SELECTORS } from './constants';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const url = new URL(window.location.href);
  const ticketId = url.searchParams.get('id');
  if (!ticketId) {
    return redirectToHome();
  }

  const ticketData = await fetchTicket(ticketId);
  if (!ticketData) {
    return redirectToHome();
  }

  populateTicketTemplate(ticketData);
});

/**
 * Populates the ticket template page.
 * @param ticketData
 */
const populateTicketTemplate = ({ title, description }: TicketData) => {
  // Populate metas
  document.title = `Ticket - ${title}`;

  // Query elements
  const ticketComponent = document.querySelector<HTMLElement>(SELECTORS.ticketComponent);
  if (!ticketComponent) {
    return;
  }

  const titleElement = ticketComponent.querySelector(SELECTORS.ticketTitle);
  const descriptionElement = ticketComponent.querySelector(SELECTORS.ticketDescription);

  // Populate the data
  if (titleElement) {
    titleElement.textContent = title;
  }

  if (descriptionElement) {
    descriptionElement.textContent = description;
  }

  // Display the component
  displayElement(ticketComponent);

  // Hide skeleton
  const ticketSkeleton = document.querySelector<HTMLElement>(SELECTORS.ticketSkeleton);
  if (ticketSkeleton) {
    displayElement(ticketSkeleton, false);
  }
};

/**
 * Mocks a call to fetch a ticket.
 * @param ticketId
 * @returns The ticket data, if found.
 */
const fetchTicket = async (ticketId: string) => {
  await wait(1500);

  return TICKETS_DATA.find(({ id }) => id === ticketId);
};
