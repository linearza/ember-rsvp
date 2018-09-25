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

    return this.store.findRecord('user', params.id);

    // return {
    //   firstName: 'Michiel',
    //   phoneNumber: '0824519392'
    // }
  },

  setupController(controller, model) {
    this._super(...arguments);

    // if (!model.get('hasLoggedIn')) {
    //   model.set('hasLoggedIn', true);
    //   model.save();
    // }

    if (!this.get('rsvp.currentUser')) {
      this.set('rsvp.currentUser', model);
    }
  }
});
