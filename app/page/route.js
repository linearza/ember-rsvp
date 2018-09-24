import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  beforeModel(transition) {
    this._super(...arguments);
    if (!this.get('rsvp.currentUser')) {
      transition.abort();
      this.transitionTo('index');
    }
  },

  model(params) {
    return this.store.findRecord('page', params.id);
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('page', model);
  }
});
