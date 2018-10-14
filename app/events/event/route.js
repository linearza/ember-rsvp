import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';
import {
  alias
} from '@ember/object/computed';

export default Route.extend({

  rsvp: service(),
  currentUser: alias('rsvp.currentUser'),

  model(params) {
    return this.store.findRecord('event', params.event_id);
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('event', model);
  },

  resetController(controller, isExiting) {
    this._super(...arguments);

    // Teardown unsaved notes
    this.get('currentUser.eventNotes').forEach((eventNote) => {
      if (eventNote.get('isNew')) {
        eventNote.deleteRecord();
      }
    });

  }

});
