import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
// .on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });


// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: 'monthly rent',
// 	amount: '45000',
// 	createdAt: 0
// });

// database.ref('expenses').push({
// 	description: 'Coffee',
// 	note: 'smooth',
// 	amount: '4500',
// 	createdAt: 1000
// });

// database.ref('expenses').push({
// 	description: 'Electricity',
// 	note: 'monthly bill',
// 	amount: '15000',
// 	createdAt: 1500
// });


// database.ref('notes/-LL7_M8Ksy2aBMivimU_').remove();

// database.ref('notes').push({
// 	title: 'react',
// 	body: 'asdf'
// });

// const firebaseNotes = {
// 	notes: {
// 		dasfld: {
// 			body: 'this is my note',
// 			title: 'first note'
// 		}, asdfasfd: {
// 			body: 'this is my 2nd note',
// 			title: '2nd note'
// 		}
// 	}
// }

// const notes = [{
// 	id: '12',
// 	body: 'this is my note',
// 	title: 'first note'
// }, {
// 	id: '765da',
// 	body: 'asdf',
// 	title: 'qwerty'
// }];

// database.ref().set(firebaseNotes);

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	const object = snapshot.val();
// 	console.log(`${object.name} is a ${object.job.title} at ${object.job.company}`);
// }, (e) => {
// 	console.log('error fetching data', e);
// });

// setTimeout(() => {
// 	database.ref().update({
// 		name: 'Benry',
// 		'job/title': 'hack',
// 		'job/company': 'IBM'
// 	})
// }, 4500);


// database.ref()
// .once('value')
// .then((snapshot) => {
// 	const val = snapshot.val();
// 	console.log(val);
// })
// .catch((e) => {
// 	console.log('error fetching data', e);
// });

// database.ref().set({
// 	name: 'Henry Owen',
// 	age: 24,
// 	stressLevel: 6,
// 	job: {
// 		title: 'hack',
// 		company: 'his moms house'
// 	},
// 	location: {
// 		city: "Camden",
// 		state: "Maine",
// 		country: 'USA'
// 	},
// }).then(() => {
// 	console.log('data is saved');
// }).catch(() => {
// 	console.log('This failed.')
// });

// database.ref('attributes').set({
// 	height: "5\'8",
// 	weight: 145
// }).then(() => {
// 	console.log('This ran');
// }).catch((e) => {
// 	console.log('this failed', e);
// });

// // database.ref('isSingle')
// // 	.remove()
// // 	.then(() => {
// // 		console.log('deleted');
// // 	}).catch((e) => {
// // 		console.log('deletion failed', e);
// // 	});

// // database.ref('isSingle') 
// // 	.set({})
// // 	.then(() => {
// // 		console.log('deleted');
// // 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

