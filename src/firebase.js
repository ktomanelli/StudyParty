import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCLuloPcn-et2C4WJqj6uf03HGcpcYF3m8",
  authDomain: "studyparty-97e3d.firebaseapp.com",
  databaseURL: "https://studyparty-97e3d.firebaseio.com",
  projectId: "studyparty-97e3d",
  storageBucket: "studyparty-97e3d.appspot.com",
  messagingSenderId: "320626247759",
  appId: "1:320626247759:web:136b65025be5f241aa823a",
  measurementId: "G-F3RVYS6305"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


// get references to Cloud Firestore, Database, and Authentication service, and export them
export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
firebase.firestore().enablePersistence();

const provider = new firebase.auth.GoogleAuthProvider();

export const updateUserProfile = (user, updatedUser, callback) => {
  console.log(user, updatedUser)
  // updates authentication profile
  user.updateProfile({
    displayName: updatedUser.displayName,
    photoURL: updatedUser.photoURL || null
  })
    .then(() => {
      const newUserObj = {
        displayName: updatedUser.displayName,
        email: user.email,
        photoURL: updatedUser.photoURL || null,
      }
      if (updatedUser.phoneNumber) {newUserObj.phoneNumber = updatedUser.phoneNumber}
      console.log(callback)
      if(callback) {
        callback(newUserObj)}
      console.log(newUserObj)
      // creates or updates Realtime database profile
      database.ref('users/' + user.uid).update(newUserObj)
    })
    .then(() => {
      console.log(`Successfully updated profile`)
    })
    .catch(function (error) {
      console.log(`Error updating user profile:`, error)
    });
}

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      updateUserProfile(user, user)
    }).catch(function (error) {
      // Handle Errors here.
      console.log(error)
    });
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};