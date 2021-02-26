import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAJUrXs8Z34obCYSQ6pweJz2P-6lLJFfMc',
  authDomain: 'crwn-clothing-c6633.firebaseapp.com',
  projectId: 'crwn-clothing-c6633',
  storageBucket: 'crwn-clothing-c6633.appspot.com',
  messagingSenderId: '1019158762450',
  appId: '1:1019158762450:web:892d1a2d1253ae1a20ee0b',
  measurementId: 'G-1SQ5055QV3',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
