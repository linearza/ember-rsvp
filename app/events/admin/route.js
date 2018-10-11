import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  beforeModel(transition) {
    if (!this.get('rsvp.currentUser.isAdmin')) {
      transition.abort();
      return this.transitionTo('index');
    }
  },

  model() {
    return {
      events: this.store.findAll('event'),
      users: this.store.findAll('user')
    }
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties({
      events: model.events,
      users: model.users
    });
  }

  // Only if really necessary
  // resetController(controller, isExiting){
  //   if (isExiting){
  //     controller.setProperties({
  //       events: null,
  //       users: null
  //     })
  //   }
  // }

});
