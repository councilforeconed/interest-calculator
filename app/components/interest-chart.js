/* globals c3, numeral, _ */

export default Ember.Component.extend({

  classNames: 'chart interest-chart'.w(),

  didInsertElement: function () {

    var id = this.$().attr('id');

    var chart = c3.generate({
      bindto: '#' + id,
      data: {
        columns: this.get('data')
      },
      axis : {
        x: { label: 'years' },
        y: {
          tick: { format: function (d) { return '$' + numeral(d).format('0,0'); } },
          label: 'amount'
        }
      }
    });
    this.set('names', this.getNames());
    this.set('chart', chart);
  },

  onDataChange: function () {

    var data = this.get('data');

    var storedNames = this.get('names');
    var currentNames = this.getNames();

    var removedNames = _.difference(storedNames, currentNames);

    this.get('chart').load({
      columns: data,
      unload: removedNames
    });

    this.set('names', currentNames);

  }.observes('data'),

  getNames: function () {
    var data = this.get('data');

    var names = [];

    data.forEach(function (account) {
      names.push(account[0]);
    });

    return names;
  },

  something: function () {
    this.get('chart').unload();
  }.on('accountRemoved')

});
