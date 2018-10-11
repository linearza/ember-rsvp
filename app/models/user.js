import DS from 'ember-data';
import {
  computed
} from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNumber: DS.attr(),

  isAdmin: DS.attr(),

  party: DS.hasMany('user', {
    inverse: null
  }),

  invitedEvents: DS.hasMany('event', {
    async: true,
    inverse: null
  }),

  attendingEvents: DS.hasMany('event', {
    async: true,
    inverse: null
  }),

  notAttendingEvents: DS.hasMany('event', {
    async: true,
    inverse: null
  }),

  notes: DS.attr(),
  dietaryRequirements: DS.attr(),

  hasLoggedIn: DS.attr(),

  name: computed('firstName', 'lastName', function() {
    if (!this.get('firstName')) {
      return;
    }
    return this.get('firstName') + ' ' + (this.get('lastName') || '');
  })
});
