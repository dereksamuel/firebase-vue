import * as fb from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDli729BeCW3c0319GqcR-sSlpveXPcJGA",
  authDomain: "coursediary-d565b.firebaseapp.com",
  databaseURL: "https://coursediary-d565b.firebaseio.com",
  projectId: "coursediary-d565b",
  storageBucket: "coursediary-d565b.appspot.com",
  messagingSenderId: "210592732892",
  appId: "1:210592732892:web:adf0ac118a0d69d3d94619",
  measurementId: "G-CT6CS4N54X"
};

// Initialize Firebase
if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
}

export let firebase = fb;
