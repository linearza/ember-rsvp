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

  this.route('events', {
    path: ':user_id'
  }, function() {
    this.route('index', {
      path: 'events'
    })
    this.route('event', {
      path: 'event/:event_id'
    });
    this.route('admin', {
      path: 'admin'
    });

  });


  this.route('page', {
    path: 'page/:id'
  });
});

export default Router;
