const transactions = [
    [
      { id: 1, amount: -100.00 },
      { id: 2, amount: -50.00 },
    ],
    [
      { id: 3, amount: -30.5 },
      { id: 4, amount: -20.0 },
    ],
    [
      { id: 5, amount: -120.00 },
    ],
  ];

  // [-150.00, -50.5, -120.00]


function getMyTransactions(transactions) {
    return transactions.map(transition => {
       let amount = 0;
       for (let item of transition) {
         amount += item.amount;
       }
       return amount;
    })
};

function parent(a) {
    return function child(b) {
        return function child1(c) {
            return a + b + c;
        }
    }
}

console.log(getMyTransactions(transactions));