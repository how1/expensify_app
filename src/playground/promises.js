const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolve data');
		// resolve('This is my other resolve data');
		// reject('something went wrong');
	}, 5000)
});

console.log('before');

promise.then((data) => {
	console.log(data);
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('this is my other promise');
	}, 5000)
});
}).then((str) => {
	console.log('is this running?', str);
}).catch((error) => {
	console.log(error);
});



console.log('after');