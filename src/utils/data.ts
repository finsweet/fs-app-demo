import type { EventData, TicketData, UserData } from './types';

export const USER_DATA: UserData = {
  name: 'John Doe',
  email: 'john@doe.com',
};

export const EVENTS_DATA: EventData[] = [
  {
    title: 'Mega Mart',
    location: 'Las Vegas',
    color: 'rgba(0,255,255,0.25)',
  },
  {
    title: 'House of the Eternal Return',
    location: 'Santa Fe',
    color: 'rgba(255,20,147,0.25)',
  },
  {
    title: 'Convergence Station',
    location: 'Dever',
    color: 'rgba(0,128,0,0.25)',
  },
  {
    title: 'The Real Unreal',
    location: 'Grapevine',
    color: 'rgba(75,0,130,0.25)',
  },
];

export const TICKETS_DATA: TicketData[] = [
  {
    id: '001',
    title: 'House of Eternal Return',
    description: 'A house that eternally returns.',
    date: 'Aug 23 - 8:00 PM',
    location: 'Santa Fe',
  },
  {
    id: '002',
    title: 'Omega Mart',
    description: 'This is a random description.',
    date: 'Aug 24 - 8:00 PM',
    location: 'Las Vegas',
  },
];
