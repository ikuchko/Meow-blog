import Ember from 'ember';

export function commentSort(params/*, hash*/) {
  var comments = params[0];
  var commentList = comments.sortBy('date').reverse();
  return commentList;
}

export default Ember.Helper.helper(commentSort);
