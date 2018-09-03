import React from 'react';
import authReducer from '../../reducers/auth';

test('should set default state', () => {
	const state = authReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({});
});

test('should set uid in state during login', () => {
	const uid = 'someUid101';
	const action = {
		type: 'LOGIN',
		uid
	};
	const state = authReducer(undefined, action);
	expect(state.uid).toBe(action.uid);
});

test('should set uid in state during login', () => {
	const action = {
		type: 'LOGOUT',
	};
	const state = authReducer(undefined, action);
	expect(state).toEqual({});
});