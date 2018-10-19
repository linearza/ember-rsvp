import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  model(params) {
    // check for currentUser and just return that instead of querying store
    if (this.get('rsvp.currentUser')) {
      return this.get('rsvp.currentUser');
    }

    return this.store.findRecord('user', params.user_id);
  },

  afterModel(model, transition) {
    if (!model && !this.get('rsvp.currentUser')) {
      transition.abort();
      this.transitionTo('index');
    }
  },

  setupController(controller, model) {
    this._super(...arguments);

    if (!this.get('rsvp.currentUser')) {
      this.set('rsvp.currentUser', model);
    }
  }
});
