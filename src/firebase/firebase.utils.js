import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAlXjS-WpGFZTpJ2A6pkji5HTLUN2R8zaM',
	authDomain: 'react-shop-d5385.firebaseapp.com',
	databaseURL: 'https://react-shop-d5385.firebaseio.com',
	projectId: 'react-shop-d5385',
	storageBucket: '',
	messagingSenderId: '802817632430',
	appId: '1:802817632430:web:713a8434f7907fab45653f',
	measurementId: 'G-CVX9F00J3V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
