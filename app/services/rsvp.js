import Service from '@ember/service';

export default Service.extend({

  currentUser: null, // once authenticated we set them here for the duration of the session

});
