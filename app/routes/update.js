import Ember from 'ember';

export default Ember.Route.extend({
  postID: "",
  model(params) {
    this.set('postID', params.post_id);
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    save(params, post) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post', post)
    }
  }
});
