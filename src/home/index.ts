import { initEventsComponent } from './events';
import { initVisitsComponent } from './visits';

window.Webflow ||= [];
window.Webflow.push(() => {
  initEventsComponent();
  initVisitsComponent();
});
