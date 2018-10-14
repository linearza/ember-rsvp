import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import Route from '@ember/routing/route';


const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Route.reopen({
  actions: {
    didTransition() {
      this._super(...arguments);
      $('html,body').scrollTop(0);
      return true; // Bubble the didTransition event!
    }
  }
});

Router.map(function() {
  this.route('events', {
    path: ':user_id'
  }, function() {
    this.route('index', {
      path: 'events'
    });
    this.route('event', {
      path: 'event/:event_id'
    });
    this.route('admin', {
      path: 'admin'
    });
    this.route('registry');
  });

  this.route('page', {
    path: 'page/:id'
  });
});

export default Router;
