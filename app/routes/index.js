import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post', {reload: true})
      .then(function(posts) {
        return posts.sortBy('date').reverse();
      }
    );
  },
});
