import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({
    descripion = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        descripion,
        note,
        amount,
        createdAt
    }
})

//Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
            default:
                return state;
    }
};
// filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
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
    console.log(getState());
});

store.dispatch(addExpense({ descripion: 'painting', amount: 8000 }));