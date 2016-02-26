import Ember from 'ember';

export default Ember.Component.extend({
  updateFormIsShowing: false,
  classNames: ['comment-tile'],

  actions: {
    showUpdateForm() {
      this.set('updateFormIsShowing', true);
    },

    updateComment(commentToUpdate) {
      this.set('updateFormIsShowing', false)
      var params = {
        comment: this.get('updatedComment'),
      };
      this.set('updatedComment', '');
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          commentToUpdate.set(key,params[key]);
        }
      });
      commentToUpdate.save();
    },

    deleteComment(commentToDelete) {
      commentToDelete.destroyRecord();
    },

    replyToComment(params) {
      this.sendAction('replyToComment', params);
    }
  }
});
