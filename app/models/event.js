import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  invitees: DS.hasMany('user'),
  description: DS.attr(),
  date: DS.attr(),

  locationName: DS.attr(),
  locationLink: DS.attr()
});
