import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({

  rsvp: service(),

  queryParams: {
    uid: {
      replace: true
    },
    name: {
      replace: true
    }
  },

  setupController(controller, model) {
    this._super(...arguments);

    this.set('rsvp.applicationController', controller);

    if (controller.get('uid') && !this.get('rsvp.currentUser')) {
      this.get('rsvp').verifyAndAuthenticate(controller.get('uid'));
    }
  },

});
