import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
	startAddExpense, 
	addExpense, 
	editExpense, 
	startEditExpense,
	removeExpense, 
	setExpenses, 
	startSetExpenses, 
	startRemoveExpense 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismytestuid';
const defaultAuthState = {auth: { uid }};


beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test ('should set up remove expense action object', () => {
	const action = removeExpense('123abc');
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should remove expense from firebase', (done) => {
	const id = expenses[0].id;
	const store = createMockStore(defaultAuthState);
	store.dispatch(startRemoveExpense(id)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		});
		return database.ref(`users/${uid}/expenses/${id}`).once('value');
	}).then(snapshot => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

test('should set up edit expense action object', ()=>{
	const updates = {description: '1234', amount:'400'};
	const action = editExpense({id: '12345', updates});
	expect(action).toEqual({
		id: '12345',
		type: 'EDIT_EXPENSE',
		updates: {
			description: '1234',
			amount: '400'
		}
	});
});

test('should edit expenses from firebase', (done) => {
	const id = expenses[0].id;
	const updates = {
		description: 'Rent',
		amount: '3444',
		note: '',
		createdAt: 9922
	};
	const store = createMockStore(defaultAuthState);
	store.dispatch(startEditExpense({id, updates})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			id,
			updates
		});
		return database.ref(`users/${uid}/expenses/${id}`).once('value', (snapshot) => {
			expect(snapshot.val()).toEqual(updates);
			done();
		});
	});
})

test ('should set up add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: 'mouse',
		amount: '3000',
		note:'asdf',
		createdAt: 1000
	}
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseDefaults = {
		description: '',
		amount: 0,
		note:'',
		createdAt: 0
	}
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults);
		done();
	});
});

test ('should set up set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	})
});

test('should fetch the expenses from firebase', (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});

