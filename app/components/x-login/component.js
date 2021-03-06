import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';

import {
  alias
} from '@ember/object/computed';

export default Component.extend({
  classNameBindings: [':x-login'],

  rsvp: service(),
  currentUser: alias('rsvp.currentUser')
});
