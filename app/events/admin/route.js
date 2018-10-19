import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  model() {
    return {
      events: this.store.findAll('event'),
      users: this.store.findAll('user')
    }
  },


  setupController(controller, model) {
    this._super(...arguments);


    if (!this.get('rsvp.currentUser.isAdmin')) {
      this.transitionTo('index');
    }

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
