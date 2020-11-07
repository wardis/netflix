import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Uncomment to seed the database. Do it only once!!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebase = Firebase.initializeApp(config);

// Uncomment to seed the database. Do it only once!!
// seedDatabase(firebase);

export { firebase };
