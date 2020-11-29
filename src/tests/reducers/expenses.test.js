import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Mouse',
    note: 'for PC',
    amount: 15,
    createdAt: moment(0).add(6, 'days').valueOf()    
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const amount = 120000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const action = {
    id: '-1',
    description: 'PC',
    note: '',
    amount: 120000,
    createdAt: moment(0).subtract(4, 'days').valueOf()

  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});