import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('user', params.id);

    // return this.store.query('user', {
    //   // Only data for fields whose names are in this list will be included in the records.
    //   // fields: ['Phone'],
    //   // A formula used to filter records.
    //   // filterByFormula: "FIND(" + this.get('phoneNumber') + ", Phone)",
    //   filterByFormula: "IF({Phone} = " + this.get('phoneNumber') + ", TRUE(), FALSE())",
    //   // The maximum total number of records that will be returned.
    //   // maxRecords: 50,
    //   // The number of records returned in each request.
    //   // pageSize: 10,
    //   // A list of sort objects that specifies how the records will be ordered.
    //   // sort: [{
    //   //   field: "name",
    //   //   direction: "desc"
    //   // }]
    // });
  },

  setupController(controller, model) {
    this._super(...arguments);

    debugger;
  }
});
