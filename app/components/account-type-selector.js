export default Ember.Component.extend({

  didInsertElement: function () {
    var self = this;

    this.$('input[value=%@]'.fmt(this.get('accountType')))
      .attr('checked', true);

    this.$('input').on('change', function (e) {
      self.set('accountType', $(this).val());
    });
  },

  updateSelection: function () {
    this.$('input[value=%@]'.fmt(this.get('accountType')))
      .attr('checked', true);
  }.observes('accountType'),

  willDestroyElement: function () {
    this('input').off('change');
  }

});
