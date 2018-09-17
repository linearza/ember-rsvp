import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    phoneNumber: {
      replace: true
    },
    name: {
      replace: true
    }
  },

  setupController(controller, model) {
    this._super(...arguments);
    if (controller.get('phoneNumber')) {
      controller.verifyAndAuthenticate();
    }
  },

});
