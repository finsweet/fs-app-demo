import { HIDE_ATTRIBUTE_KEY } from './constants';

/**
 * Shows/hides an element.
 * @param element The element to show/hide.
 * @param display `true` to show, `false` to hide.
 */
export const displayElement = (element: Element, display = true) => {
  if (display) {
    element.removeAttribute(HIDE_ATTRIBUTE_KEY);
  } else {
    element.setAttribute(HIDE_ATTRIBUTE_KEY, 'true');
  }
};

/**
 * Redirects the user to the homepage.
 */
export const redirectToHome = () => window.location.replace('/');
