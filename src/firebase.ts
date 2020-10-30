import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyCYXwft_9IuM451JFtQdAxBTqIY8tSQj1o',
  authDomain: 'asteroid-28eb3.firebaseapp.com',
  databaseURL: 'https://asteroid-28eb3.firebaseio.com',
  projectId: 'asteroid-28eb3',
  storageBucket: 'asteroid-28eb3.appspot.com',
  messagingSenderId: '316702102521',
  appId: '1:316702102521:web:a0523f286af4beefe46328',
  measurementId: "G-Q8834YYSF6"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
  auth,
  usersCollection
}