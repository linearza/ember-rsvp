import {
  helper
} from '@ember/component/helper';

export function eventStatus(params, hash) {

  if (!hash.user.attendingEvents.includes(hash.event) && !hash.user.notAttendingEvents.includes(hash.event)) {
    return 'You still need to RSVP for this event, please';
  }

  if (hash.user.attendingEvents.includes(hash.event)) {
    return 'You are going! We look forward to it!';
  }

  if (hash.user.notAttendingEvents.includes(hash.event)) {
    return "You are not going. Sorry that you can't make it!";
  }

}

export default helper(eventStatus);
