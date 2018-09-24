import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';

import {
  alias
} from '@ember/object/computed';

export default Component.extend({
  classNames: ['x-menu'],
  tagName: 'ul',

  rsvp: service(),
  currentUser: alias('rsvp.currentUser')

});
