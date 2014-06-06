export default Ember.Object.extend({

  name: null,
  base: 10000,
  rate: 5,
  term: 10,

  baseAmount: function (property, value) {
    if (value) {
      this.set('base', parseInt(value, 10));
    }
    return this.get('base');
  }.property('base'),

  interestRate: function (property, value) {
    if (value) {
      this.set('rate', parseInt(value, 10));
    }
    return this.get('rate');
  }.property('rate'),

  termLength: function (property, value) {
    if (value) {
      this.set('term', parseInt(value, 10));
    }
    return this.get('term');
  }.property('term'),

  data: function () {
    var data = [this.get('name')];
    var amount = this.get('base');

    var totalInterest = this.get('final') - this.get('base');
    var annualInterest = totalInterest / this.get('term');

    for (var year = 0; year <= this.get('term'); year++) {
      data.push(amount);
      amount = amount + annualInterest;
    }

    return data;
  }.property('name', 'base', 'term', 'rate', 'final'),

  final: function () {
    return this.get('monthlyPayments') * this.get('months');
  }.property('monthlyPayments', 'months'),

  months: function () {
    return this.get('term') * 12;
  }.property('term'),

  monthlyPayments: function () {
    var interestRate = this.get('rate') / 100;
    var baseAmount = this.get('base');
    var months = this.get('months');

    return ((interestRate/12)*baseAmount) / (1 - Math.pow(1+(interestRate/12), - months));
  }.property('base', 'term', 'rate')

});
