import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDgFThmLR7iy6iEa8jO8y2Cbf4mBOWWwNo",
    authDomain: "will-call-auth-dev.firebaseapp.com",
    databaseURL: "https://will-call-auth-dev-default-rtdb.firebaseio.com",
    projectId: "will-call-auth-dev",
    storageBucket: "will-call-auth-dev.appspot.com",
    messagingSenderId: "335318496416",
    appId: "1:335318496416:web:bde38df713fd1c858b45c5"
})

export const Auth = app.auth()

export default app