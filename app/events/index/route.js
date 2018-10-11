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

    return this.modelFor('events');
  }
});
