import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  model(params) {
    return this.store.query('page', {
      fields: ['title', 'content'],
      filterByFormula: '{title} = "Registry"'
    })
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('page', model.firstObject);
  }
});
