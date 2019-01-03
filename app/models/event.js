import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  shortName: DS.attr(),
  displayName: DS.attr(),
  invitees: DS.hasMany('user', {
    async: true,
    inverse: null
  }),

  description: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  timeNotes: DS.attr(),

  dressCode: DS.attr(),

  rsvpByDate: DS.attr(),

  cateringNote: DS.attr(),

  locationName: DS.attr(),
  locationLink: DS.attr(),
  locationNotes: DS.attr(),

  isEnabled: DS.attr('boolean'),

  whatToPack: DS.attr(),
  whatToRemember: DS.attr(),

  userNotes: DS.hasMany('event-note', {
    inverse: 'event'
  }),

  userNotesNote: DS.attr()
});
