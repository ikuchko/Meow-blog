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
    },

    deletePost(post) {
      var route = this;
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions)
         .then(function() {
         return post.destroyRecord();
      }).then(function() {
        route.transitionTo('index');
      });
    },

    replyToComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var parentComment = params.parentComment;
      parentComment.get('replies').addObject(newComment);
      newComment.save().then(function() {
        return parentComment.save();
      });
    }
  }
});
