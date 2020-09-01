import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyB_aJhNGcdXW6xBU1TbFatl-EDLRA906Is',
	authDomain: 'shoppies-f5a79.firebaseapp.com',
	databaseURL: 'https://shoppies-f5a79.firebaseio.com',
	projectId: 'shoppies-f5a79',
	storageBucket: 'shoppies-f5a79.appspot.com',
	messagingSenderId: '874244927730',
	appId: '1:874244927730:web:72f7c53d61f85e225ca06b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
