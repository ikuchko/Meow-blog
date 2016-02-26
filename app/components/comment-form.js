import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        comment: this.get('comment') || '',
        post: this.get('post'),
        date: new Date().getTime()
      };
      this.set('comment', '');
      this.sendAction('saveComment', params);
    },

    replyToComment(params) {
      this.sendAction('replyToComment', params);
    }
  }
});
