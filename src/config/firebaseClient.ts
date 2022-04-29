import { getApp, getApps, initializeApp } from "firebase/app";
import {
    Auth,
    browserSessionPersistence,
    getAuth,
    setPersistence,
} from "firebase/auth";

const CLIENT_CONFIG = {
    apiKey: "AIzaSyCRDL6aJbgpaECmwpwqH5DwseSA-9xVBis",
    authDomain: "dfcom-d235a.firebaseapp.com",
    projectId: "dfcom-d235a",
    storageBucket: "dfcom-d235a.appspot.com",
    messagingSenderId: "194315944965",
    appId: "1:194315944965:web:b2da8b15f755604ca5086c",
    measurementId: "G-4YE10T999P",
};

let firebaseClient;
let auth: Auth;

try {
    firebaseClient = getApp();
    auth = getAuth();
} catch (error) {
    console.log({ error });
}

if (typeof window !== "undefined" && !getApps.length) {
    const firebaseApp = initializeApp(CLIENT_CONFIG);
    auth = getAuth();
    auth.currentUser;
    setPersistence(auth, browserSessionPersistence);
    (window as any).firebase = firebaseApp;

    firebaseClient = firebaseApp;
}

export { firebaseClient, auth };

// import firebaseClient from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// /*

// Copy/paste your *client-side* Firebase credentials below.

// To get these, go to the Firebase Console > open your project > Gear Icon >
// Project Settings > General > Your apps. If you haven't created a web app
// already, click the "</>" icon, name your app, and copy/paste the snippet.
// Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
// copy/paste.

// */
// const CLIENT_CONFIG = {
//     apiKey: "AIzaSyCRDL6aJbgpaECmwpwqH5DwseSA-9xVBis",
//     authDomain: "dfcom-d235a.firebaseapp.com",
//     projectId: "dfcom-d235a",
//     storageBucket: "dfcom-d235a.appspot.com",
//     messagingSenderId: "194315944965",
//     appId: "1:194315944965:web:b2da8b15f755604ca5086c",
//     measurementId: "G-4YE10T999P",
// };

// if (typeof window !== "undefined" && !firebaseClient.apps.length) {
//     firebaseClient.initializeApp(CLIENT_CONFIG);
//     firebaseClient
//         .auth()
//         .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
//     (window as any).firebase = firebaseClient;
// }

// export { firebaseClient };
