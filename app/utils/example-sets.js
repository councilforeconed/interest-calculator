import Account from 'appkit/models/account';

export default {
  autoLoans: [
    Account.create({
      name: 'Midtown Bank',
      base: 20000,
      rate: 4,
      term: 4
    }),
    Account.create({
      name: 'Century Credit Union',
      base: 20000,
      rate: 2,
      term: 4
    }),
    Account.create({
      name: 'YourCharge Credit Card',
      base: 20000,
      rate: 18,
      term: 4
    }),
    Account.create({
      name: 'Al\'s Car Emporium',
      base: 20000,
      rate: 8,
      term: 4
    }),
  ],
  savings: [
    Account.create({
      name: 'Passbook account at Midtown Bank',
      base: 10000,
      rate: 1,
      term: 10
    }),
    Account.create({
      name: 'Passbook account at Century Credit Union',
      base: 10000,
      rate: 0.25,
      term: 10
    }),
    Account.create({
      name: 'Certificate of Deposit from Johnson Bank',
      base: 10000,
      rate: 4,
      term: 10
    }),
    Account.create({
      name: 'Certificate of Deposit from Top End Brokerage',
      base: 10000,
      rate: 5,
      term: 10
    })
  ]
};
