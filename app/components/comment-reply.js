import Ember from 'ember';

export default Ember.Component.extend({
  replyFormIsShowing: false,
  classNames: ['reply-form'],
  actions: {
    showReplyForm() {
      this.set('replyFormIsShowing', true);
    },

    replyToComment(parentComment) {
      console.log(this.get('comment'))
      var params = {
        comment: this.get('comment'),
        date: new Date().getTime(),
        parentComment: this.get('parentComment')
      };
      this.sendAction('replyToComment', params);
      this.set('replyFormIsShowing', false);
    }
  }
});
