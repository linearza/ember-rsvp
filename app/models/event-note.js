import DS from 'ember-data';

export default DS.Model.extend({
  note: DS.attr(),

  event: DS.belongsTo('event'),
  user: DS.belongsTo('user')
});
