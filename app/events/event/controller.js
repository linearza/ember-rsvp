import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  alias
} from '@ember/object/computed';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  rsvp: service(),
  currentUser: alias('rsvp.currentUser'),

  event: null,

  addingNote: false,
  removingNote: false,

  userEventNotes: computed('currentUser.eventNotes.@each', 'event', function() {
    // TO DO: check if user was verified in current session for extra safety
    if (this.get('currentUser') && this.get('currentUser.eventNotes')) {
      return this.get('currentUser.eventNotes').filterBy('event.id', this.get('event.id'));
    }
  }),

  actions: {
    newNote() {
      if (this.get('addingNote')) {
        return;
      }

      this.set('addingNote', true);
      this.store.createRecord('event-note').save().then((note) => {
        note.setProperties({
          event: this.get('event'),
          user: this.get('currentUser')
        });

        this.set('addingNote', false);
      });

    },

    removeNote(note) {
      if (this.get('removingNote')) {
        return;
      }

      this.set('removingNote', true);

      this.get('currentUser.eventNotes').removeObject(note);
      note.deleteRecord();

      this.set('removingNote', false);
    }
  }
});
