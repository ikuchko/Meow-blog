import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  date: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  replies: DS.hasMany('comment', { async: true , inverse: 'parentComment'}),
  parentComment: DS.belongsTo('comment', { async: true , inverse: 'replies'})
});
