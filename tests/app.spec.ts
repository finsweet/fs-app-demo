import { expect, test } from '@playwright/test';

import { EVENTS_DATA, TICKETS_DATA } from '$utils/data.js';

import { SELECTORS as HOME_SELECTORS } from '../src/home/constants.js';
import { SELECTORS as TICKET_SELECTORS } from '../src/ticket-template/constants.js';

test.describe('Homepage', () => {
  test('Events data is populated correctly', async ({ page }) => {
    await page.goto('https://fs-app-demo.webflow.io/');

    const eventsSkeleton = page.locator(HOME_SELECTORS.eventsSkeleton);
    const eventsList = page.locator(HOME_SELECTORS.eventsList);

    await expect(eventsSkeleton).toBeVisible();

    await page.waitForTimeout(1000);

    await expect(eventsSkeleton).not.toBeVisible();
    await expect(eventsList).toBeVisible();

    const firstEventItem = eventsList.locator(HOME_SELECTORS.eventItem).first();
    const firstEventItemTitle = firstEventItem.locator(HOME_SELECTORS.eventTitle);

    await expect(firstEventItemTitle).toHaveText(EVENTS_DATA[0].title);
  });

  test('Visits data is populated correctly', async ({ page }) => {
    await page.goto('https://fs-app-demo.webflow.io/');

    const visitsSkeleton = page.locator(HOME_SELECTORS.visitsSkeleton);
    const visitsList = page.locator(HOME_SELECTORS.visitsList);

    await expect(visitsSkeleton).toBeVisible();

    await page.waitForTimeout(2000);

    await expect(visitsSkeleton).not.toBeVisible();
    await expect(visitsList).toBeVisible();

    const firstVisitItem = visitsList.locator(HOME_SELECTORS.visitItem).first();
    const firstVisitItemTitle = firstVisitItem.locator(HOME_SELECTORS.visitTitle);

    await expect(firstVisitItemTitle).toHaveText(TICKETS_DATA[0].title);
  });
});

test.describe('Ticket Template', () => {
  test('Ticket data is populated correctly', async ({ page }) => {
    await page.goto(`https://fs-app-demo.webflow.io/ticket?id=${TICKETS_DATA[0].id}`);

    const ticketSkeleton = page.locator(TICKET_SELECTORS.ticketSkeleton);
    const ticketComponent = page.locator(TICKET_SELECTORS.ticketComponent);
    const ticketTitle = page.locator(TICKET_SELECTORS.ticketTitle);
    const ticketDescription = page.locator(TICKET_SELECTORS.ticketDescription);

    await expect(ticketSkeleton).toBeVisible();

    await page.waitForTimeout(1500);

    await expect(ticketSkeleton).not.toBeVisible();
    await expect(ticketComponent).toBeVisible();

    await expect(ticketTitle).toHaveText(TICKETS_DATA[0].title);
    await expect(ticketDescription).toHaveText(TICKETS_DATA[0].description);
  });

  test('User is redirected to home when no ticket ID', async ({ page }) => {
    await page.goto('https://fs-app-demo.webflow.io/ticket');

    await page.waitForURL('https://fs-app-demo.webflow.io/');

    expect(page.url()).toBe('https://fs-app-demo.webflow.io/');
  });
});
