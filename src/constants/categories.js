const incomeColors = ['#296600', '#41A300', '#62F500', '#A9FF70', '#DAFFC2' ];
const expenseColors = ['#4B1B1D', '#B44147', '#D4878B', '#E9C3C5' ];

export const incomeCategories = [
  { type: 'Web designs Income', amount: 0, color: incomeColors[0] },
  { type: 'Home Income', amount: 0, color: incomeColors[1] },
  { type: 'Savings', amount: 0, color: incomeColors[2] },
  { type: 'Salary', amount: 0, color: incomeColors[3] },
  { type: 'Deposits', amount: 0, color: incomeColors[4] },
];

export const expenseCategories = [
  { type: 'Hotel', amount: 0, color: expenseColors[0] },
  { type: 'Canteen', amount: 0, color: expenseColors[1] },
  { type: 'Snacks', amount: 0, color: expenseColors[2] },
  { type: 'Statinary', amount: 0, color: expenseColors[3] }
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
