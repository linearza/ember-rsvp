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
  dressCode: DS.attr(),

  locationName: DS.attr(),
  locationLink: DS.attr()
});
