import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses').
// // once('value')
// // .then((snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // })

// // database.ref('expenses').push({
// //   description: 'coffee',
// //   note: 'Sweat',
// //   amount: 150,
// //   createdAt: 0
// // });

// database.ref('expenses').push({
//   description: 'Audio instruments',
//   amount: 1000000000,
//   note: '',
//   createdAt: 1000
// });

// // database.ref('notes/-MNuN9HjGdeHYfzs7t3k').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'Firebase'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const object = snapshot.val();
// //   console.log(`${object.name} is a ${object.job.title} at ${object.job.company}`);
// // });

// // database.ref().update({
// //   'job/company': 'Shopify'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(31);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off('value', onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(32);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Taichi Ishiguro',
// //   age: 25,
// //   stressLevel: 5,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Somewhere',
// //     country: 'Mexico'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 7,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// // .remove()
// // .then(() => {
// //   console.log('Data was removed');
// // }).catch((e) => {
// //   console.log('Did not remove data', e);
// // });