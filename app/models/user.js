import DS from 'ember-data';
import {
  computed
} from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNumber: DS.attr(),

  party: DS.hasMany('user'),
  invitedEvents: DS.hasMany('event', {
    async: true,
    inverse: null
  }),
  attendingEvents: DS.hasMany('event', {
    async: true,
    inverse: null
  }),

  notes: DS.attr(),
  dietaryRequirements: DS.attr(),

  hasLoggedIn: DS.attr(),

  name: computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + (this.get('lastName') || '');
  })
});
