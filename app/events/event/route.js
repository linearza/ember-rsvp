import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  model(params) {
    return this.store.findRecord('event', params.event_id);
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('event', model);
  }
});
