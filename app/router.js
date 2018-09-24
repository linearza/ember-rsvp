import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rsvp', {
    path: 'rsvp/:id'
  });
  this.route('page', {
    path: 'page/:id'
  });
});

export default Router;
