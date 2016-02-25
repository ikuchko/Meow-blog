import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
    }
  }
});
