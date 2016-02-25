import Ember from 'ember';

export default Ember.Component.extend({
  imageList: [],
  actions: {
    addImage() {
      this.get('imageList').pushObject({image: this.get('image')});
      this.set('image', '');
    },
    removeImage(image) {
      this.get('imageList').removeObject(image);
    },

    save() {
      var params = {
        category: this.get('category'),
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('imageList'),
        date: new Date().getTime()
      };
      this.set('category', '');
      this.set('author', '');
      this.set('title', '');
      this.set('image', '');
      this.set('body', '');
      this.set('imageList', []);
      this.sendAction('save', params);
    }
  }
});
