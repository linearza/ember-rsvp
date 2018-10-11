import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';

export default Component.extend({
  classNames: ['check-toggle-item'],

  rsvp: service(),

  user: null,
  event: null

});
