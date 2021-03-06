import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  this.route('post', {path: '/post/:post_id'});
  this.route('update', {path: '/post/:post_id/update'});
});

export default Router;
