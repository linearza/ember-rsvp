import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  beforeModel(transition) {
    if (this.get('rsvp.currentUser')) {
      transition.abort();
      return this.transitionTo('events.index', this.get('rsvp.currentUser'));
    }
  }

});
