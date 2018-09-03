import React from 'react';
import { login, logout } from '../../actions/auth';

test ('should create login action object', () => {
	const uid = "someUID101";
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test ('should create logout action object', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT',
	});
});