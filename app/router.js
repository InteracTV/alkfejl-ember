import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path:'/:task_id'});
    this.route('edit', {path:'/edit/:task_id'});
  });
});

export default Router;
