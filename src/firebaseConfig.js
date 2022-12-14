import firebase from "firebase/compat";
const firebaseConfig = {
    apiKey: "AIzaSyCDjBysJAi5x7NqFNcnM8_7gUudrzoelFg",
    authDomain: "cfg-ha.firebaseapp.com",
    projectId: "cfg-ha",
    storageBucket: "cfg-ha.appspot.com",
    messagingSenderId: "11923578654",
    appId: "1:11923578654:web:d40103ea30a1e342e2f30f"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        // const query = await db
        //     .collection("users")
        //     .where("uid", "==", user.uid)
        //     .get();
        // if (query.docs.length === 0) {
        //     await db.collection("users").add({
        //         uid: user.uid,
        //         name: user.displayName,
        //         authProvider: "google",
        //         email: user.email,
        //     });
        // }
    } catch (err) {
        // console.error(err);
        // alert(err.message);
    }
};


const logout = () => {
    auth.signOut();
};
export {
    auth,
    db,
    signInWithGoogle,
    logout,
};
