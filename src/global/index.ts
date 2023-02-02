import { USER_DATA } from '$utils/data';

import { SELECTORS } from './constants';

window.Webflow ||= [];
window.Webflow.push(() => {
  const userNameElement = document.querySelector(SELECTORS.userName);
  if (userNameElement) {
    userNameElement.textContent = USER_DATA.name;
  }
});
