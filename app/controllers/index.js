import ExampleSets from 'appkit/utils/example-sets';
import Account from 'appkit/models/account';

export default Ember.ArrayController.extend({

  accountType: 'loan',
  termLength: 10,

  data: function () {
    var data = [];

    this.get('content').forEach(function (account) {
      data.push(account.get('data'));
    });

    return data;
  }.property('@each.final'),

  isLoan: function () {
    return this.get('accountType') === 'loan';
  }.property('accountType'),

  updateAccountTermLengths: function () {
    var self = this;
    this.get('content').forEach(function (account) {
      account.set('termLength', self.get('termLength'));
    });
  }.observes('termLength'),

  canAddAccount: function () {
    return !!(this.get('newAccountName') && this.get('newAccountBase') && this.get('newAccountRate'));
  }.property('newAccountName', 'newAccountBase', 'newAccountRate'),

  cantAddAccount: function () {
    return !this.get('canAddAccount');
  }.property('canAddAccount'),

  actions: {
    addAccount: function () {

      var newAccount = Account.create({
        name: this.get('newAccountName'),
      });

      newAccount.setProperties({
        baseAmount: this.get('newAccountBase'),
        interestRate: this.get('newAccountRate'),
        termLength: this.get('termLength')
      });

      this.get('content').pushObject(newAccount);

      this.setProperties({
        newAccountName: null,
        newAccountBase: null,
        newAccountRate: null
      });

    },

    clearAccounts: function () {
      this.set('content', []);
    },

    loadExampleSet: function (set) {
      var exampleSet = ExampleSets[set];
      this.set('content', exampleSet);
      if (set === 'savings') {
        this.set('accountType', 'savings');
        this.set('termLength', 10);
      } else if (set === 'autoLoans') {
        this.set('accountType', 'loan');
        this.set('termLength', 4);
      }
    }
  }

});
