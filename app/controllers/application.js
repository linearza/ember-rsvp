import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({

  queryParams: {
    phoneNumber: {
      as: 'uid'
    },
    name: {
      as: 'name'
    }
  },

  rsvp: service(),

  actions: {
    checkAndProceed() {

      var _this = this;

      let userId = this.store.query('user', {
        // Only data for fields whose names are in this list will be included in the records.
        fields: ['phone', 'name'],
        // A formula used to filter records.
        filterByFormula: '{phone} = "' + this.get('phoneNumber') + '"',
        // filterByFormula: "SEARCH(" + this.get('phoneNumber') + ", {Phone})",
        // The maximum total number of records that will be returned.
        // maxRecords: 50,
        // The number of records returned in each request.
        // pageSize: 10,
        // A list of sort objects that specifies how the records will be ordered.
        // sort: [{
        //   field: "name",
        //   direction: "desc"
        // }]
      }).then((res) => {
        console.log(res.length, _this)
        if (res.content[0].id) {
          _this.transitionToRoute('rsvp', res.content[0].id);
        }
      }).catch((e) => {
        console.log('error! log out message for user');
      });



      // this.store.query('user', {
      //   // Only data for fields whose names are in this list will be included in the records.
      //   fields: ['number'],
      //   // A formula used to filter records.
      //   filterByFormula: "NOT({name} = 'MacBook')",
      //   // The maximum total number of records that will be returned.
      //   maxRecords: 50,
      //   // The number of records returned in each request.
      //   pageSize: 10,
      //   // A list of sort objects that specifies how the records will be ordered.
      //   sort: [{field: "name", direction: "desc"}],
      //   // The name or ID of a view in the table.
      //   view: 'active_products'
      // });
    }
  }
});
