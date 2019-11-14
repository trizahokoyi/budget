import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//add expense
const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
  id: uuid(),
  description: expense.description,
  note: expense.note,
  amount: expense.amount,
  createdAt: expense.createdAt
}
});


//REMOVE_EXPENSE
const removeExpense = (expense = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: expense.id
});

// expense reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
            case "REMOVE_EXPENSE":
                return state.filter(expense => expense.id !== action.id);
        default:
            return state;
    }
};

// filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Painting', amount: 8000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 500 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id}));