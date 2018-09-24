import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';

export default Service.extend({

  store: service(),
  router: service(),

  currentUser: null, // once authenticated we set them here for the duration of the session
  applicationController: null,

  error: null,

  verifyAndAuthenticate(uid) {
    var _this = this;

    this.set('error', null);

    if (!uid) {
      return this.set('error', 'Sorry, you will have to fill in your number.');
    }


    // some simple formatting to normalize uid
    uid = uid.replace(/[- )(]/g, '');
    uid = uid.replace('+27', '0');

    let userId = this.store.query('user', {
      // Only data for fields whose names are in this list will be included in the records.
      fields: ['phoneNumber', 'firstName'],
      // A formula used to filter records.
      filterByFormula: '{phoneNumber} = "' + uid + '"',
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
        _this.get('applicationController').setProperties({
          name: null,
          uid: null
        });
        _this.get('router').transitionTo('rsvp', res.content[0].id);
      } else {
        _this.set('error', 'Unfortunately this number is not on our list.');
      }
    }).catch((e) => {
      _this.set('error', 'Sorry! We probably dont have this number or you made a mistake.');
    });
  },

  saveCurrentUser() {
    this.get('currentUser.users').forEach((user) => {
      user.save();
    });

    this.get('currentUser').save().then(() => {
      console.log('saved!');
    })
  },

  actions: {
    verifyAndAuthenticate(uid) {
      this.verifyAndAuthenticate(uid);
    },

    saveCurrentUser() {
      this.saveCurrentUser();
    }
  }

});
