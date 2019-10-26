<template>
  <main class="login">
    <h1 class="titulo center">Course Diary</h1>
    <div class="center like-btn">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="user-field">@</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Escribe un usuario"
          aria-label="Username"
          aria-describedby="user-field"
          v-model="email"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="password-field">***</span>
        </div>
        <input
          type="password"
          class="form-control"
          placeholder="Escribe una contraseña"
          aria-label="Username"
          aria-describedby="password-field"
          v-model="password"
        />
      </div>
      <div title="Login" @click="login">
        <img :src="thumbs" width="70" alt="Login" />
      </div>
    </div>
  </main>
</template>

<script>
import thumbs from "../assets/thumbs.png";
import * as firebase from "firebase/app";

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
firebase.initializeApp(firebaseConfig);

export default {
  name: "login",

  data: () => ({
    thumbs: thumbs,
    email: "",
    password: ""
  }),

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log("Sesión iniciada con:", displayName, email);
        this.$router.push("/muro");
      } else {
        // User is signed out.
        // ...
        console.log("Sesión no iniciada")
      }
    });
  },

  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    }
  }
};
</script>

<style scoped>
.login {
  background: #f6cd90;
  /* height: 300px; */
  padding: 10px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.like-btn {
  /* position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 100px;
  margin-top: -70px; */
  background: #eadea6;
  /* color: white;
  padding: 20px; */
}

.titulo {
  /* text-align: center; */
}
.center {
  text-align: center;
}
</style>
