import Ember from 'ember';

export function rating(params/*, hash*/) {
  var comments = params[0];
  var pawCount = '';
  if (comments.get('length') > 25){
    pawCount += '<i class="fa fa-paw"></i>'
  }
  if (comments.get('length') > 20){
    pawCount += '<i class="fa fa-paw"></i>'
  }
  if (comments.get('length') > 15){
    pawCount += '<i class="fa fa-paw"></i>'
  }
  if (comments.get('length') > 10){
    pawCount += '<i class="fa fa-paw"></i>'
  }
  if (comments.get('length') > 5){
    pawCount += '<i class="fa fa-paw"></i>'
    return Ember.String.htmlSafe(pawCount);
  }
}

export default Ember.Helper.helper(rating);
