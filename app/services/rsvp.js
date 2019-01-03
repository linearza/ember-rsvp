import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';
import {
  run
} from '@ember/runloop';
import {
  computed
} from '@ember/object';

export default Service.extend({

  store: service(),
  router: service(),
  flashMessages: service(),

  currentUser: null, // once authenticated we set them here for the duration of the session
  applicationController: null,


  /*
    This is bit is hacky and last minute just to get urgent info out to guests
  */

  showPreWeddingUpdate: true, // this needs to be dynamic, maybe based on a date check or boolean

  currentUserIsAttendingCore: computed('currentUser.attendingEvents.[]', function() {
    return this.get('currentUser.attendingEvents').mapBy('id').includes('rec4ePkbbFcgun7ix');
    // TO DO: check if user was verified in current session for extra safety
    // return this.get('currentUser');
  }),


  currentUserIsAttendingExternal: computed('currentUser.attendingEvents.[]', function() {
    return this.get('currentUser.attendingEvents').mapBy('id').includes('rec7zqKxzl2Hg8hpq');
  }),


  /*
    This is bit is hacky and last minute just to get urgent info out to guests
  */

  error: null,

  verifying: false,
  verifiedUser: false,
  saving: false,

  animateLogin: false,

  currentUserVerified: computed('currentUser', 'verifiedUser', function() {
    // TO DO: check if user was verified in current session for extra safety
    return this.get('currentUser');
  }),

  verifyAndAuthenticate(uid) {
    var _this = this;

    if (this.get('verifying')) {
      return;
    }

    this.set('error', null);

    if (!uid) {
      return this.set('error', 'Sorry, you will have to fill in your number.');
    }

    this.set('verifying', true);

    // some simple formatting to normalize uid
    uid = uid.replace(/[- )(]/g, '');
    uid = uid.replace('+27', '0');

    this.store.query('user', {
      // Only data for fields whose names are in this list will be included in the records.
      fields: ['phoneNumber', 'firstName'],
      // A formula used to filter records.
      filterByFormula: '{phoneNumber} = "' + uid + '"'
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

      if (res.content[0].id) {
        _this.get('applicationController').setProperties({
          name: null,
          uid: null
        });


        _this.setProperties({
          verifiedUser: true,
          animateLogin: true
        });

        run.later(() => {
          _this.get('router').transitionTo('events.index', res.content[0].id);
          run.next(() => {
            $('body').scrollTop(0);
            _this.set('animateLogin', false);
          });
        }, 500);

      } else {
        _this.set('error', 'Unfortunately this number is not on our list.');
      }
      _this.set('verifying', false);
    }).catch(() => {
      _this.set('error', 'Sorry! We probably dont have this number or you made a mistake.');
      _this.set('verifying', false);
    });

  },

  saveCurrentUser() {
    var _this = this;

    if (this.get('saving')) {
      return;
    }

    this.set('saving', true);

    this.get('currentUser.party').forEach((member) => {
      member.save();
    });

    this.get('currentUser.eventNotes').forEach((eventNote) => {
      eventNote.save();
    });

    this.get('currentUser').save().then(() => {
      console.log('saved!');
      _this.get('flashMessages').success('Successfully saved!');
      this.set('saving', false);
    }).catch(() => {
      _this.get('flashMessages').danger('Oops! Something went wrong!');
      this.set('saving', false);
    });

  },

  toggleEvent(user, event) {
    if (user.get('attendingEvents').includes(event)) {
      user.get('attendingEvents').removeObject(event);
    } else {
      user.get('attendingEvents').pushObject(event);
    }
  },

  toggleAttending(user, event) {
    if (user.get('notAttendingEvents').includes(event)) {
      user.get('notAttendingEvents').removeObject(event);
    }

    if (user.get('attendingEvents').includes(event)) {
      user.get('attendingEvents').removeObject(event);
    } else {
      user.get('attendingEvents').pushObject(event);
    }
  },

  toggleNotAttending(user, event) {
    if (user.get('attendingEvents').includes(event)) {
      user.get('attendingEvents').removeObject(event);
    }

    if (user.get('notAttendingEvents').includes(event)) {
      user.get('notAttendingEvents').removeObject(event);
    } else {
      user.get('notAttendingEvents').pushObject(event);
    }
  },

  unauthenticate() {
    this.set('currentUser', null);
    this.get('router').transitionTo('index');
  },

  actions: {
    verifyAndAuthenticate(uid) {
      this.verifyAndAuthenticate(uid);
    },

    saveCurrentUser() {
      this.saveCurrentUser();
    },

    toggleEvent(user, event) {
      this.toggleEvent(user, event)
    },

    toggleAttending(user, event) {
      this.toggleAttending(user, event)
    },

    toggleNotAttending(user, event) {
      this.toggleNotAttending(user, event)
    },

    unauthenticate() {
      this.unauthenticate();
    }
  }

});
