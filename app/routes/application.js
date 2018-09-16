import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    phoneNumber: {
      replace: true
    },
    name: {
      replace: true
    }
  }
});
