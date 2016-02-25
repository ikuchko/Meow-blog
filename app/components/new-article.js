import Ember from 'ember';

export default Ember.Component.extend({
  imageList: [],

  getParams() {
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
    return params;
  },

  actions: {
    addImage() {
      this.get('imageList').pushObject({image: this.get('image')});
      this.set('image', '');
    },
    removeImage(image) {
      this.get('imageList').removeObject(image);
    },

    save() {
      // var params = getParams()
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
    },

    update(post) {
      // var params = getParams()
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
      this.sendAction('save', params, post);
    }
  }
});
