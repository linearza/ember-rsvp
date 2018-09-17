import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  rsvp: service(),

  queryParams: {
    uid: {},
    name: {}
  },

  uid: null,
  name: null

});
