<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="backlogin firstBack" v-if="back"></div>
    </transition>
    <div class="backlogin secondback"></div>
    <main class="login">
      <h1 class="titulo center">Course Diary</h1>
      <div class="center like-btn">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="user-field">@</span>
          </div>
          <input
            type="email"
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
        <div title="Login" @click="loginEv" style="cursor: pointer;">
          <img :src="thumbs" width="70" alt="Login" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import thumbs from "../assets/thumbs.png";
import { mapState, mapActions } from "vuex";

export default {
  name: "login",

  data: () => ({
    thumbs: thumbs,
    email: "",
    password: "",
    back: false
  }),

  watch: {
    userLoged(val) {
      if (val) this.$router.push("/muro");
    }
  },

  computed: {
    ...mapState(["userLoged"])
  },

  created() {
    if (this.userLoged) this.$router.push("/muro");
    setInterval(() => (this.back = !this.back), 5000);
  },

  methods: {
    ...mapActions(["login"]),

    loginEv() {
      this.login({ email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
.login {
  z-index: 2;
  background: #f6cd90;
  /* height: 300px; */
  padding: 10px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.backlogin {
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}

.firstBack {
  z-index: 1;
  background-image: url("../assets/triste.jpg");
}

.secondback {
  background-image: url("../assets/silla.jpg");
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
