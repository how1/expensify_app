// Object Destructuring

// const person = {
// 	name: 'Henry',
// 	age: 24,
// 	location: {
// 		city: 'Camden',
// 		temp: 92
// 	}
// };

// const {name: firstName = 'Anonymous', age, location} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = location;

// if (city && temperature){
// 	console.log(`It is ${temperature} in ${city}`)
// }


// const book = {
// 	title: 'It',
// 	author: 'Stephen King',
// 	publisher: {
// 		name: 'Unknown'
// 	}
// };

// const {name: publisherName} = book.publisher;

// console.log(publisherName);

// Array Destructuring

// const address = ['11 Knowlton St', 'Camden', 'Maine', '04843'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,price] = item;

console.log(`A medium ${coffee} costs ${price}`);