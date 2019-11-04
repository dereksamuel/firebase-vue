<template>
  <div class="wall" :style="styleBack">
    <header style="height: 30px;">
      <span class="logo">
        Course Diary
      </span>
      <span class="areaname">
        MURO
      </span>
    </header>
    <div class="row all-height">
      <template v-if="mensajesVivos.length">
        <div
          class="col-lg-4"
          v-for="mensaje in mensajesVivos"
          :key="mensaje.uid"
        >
          <div class="quote-container">
            <button class="pin" @click="aHistorial(mensaje)"></button>
            <blockquote class="note yellow">
              {{ mensaje.data.asunto }}
              <hr />
              {{ mensaje.data.mensaje }}
              <hr />
              <cite class="author">{{
                buscarAutor(mensaje.data.creador)
              }}</cite>
            </blockquote>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import wallImg from "@/assets/wall.png";
import { mapState, mapActions, mapGetters } from "vuex";
import _get from "lodash/get";

export default {
  name: "wall",

  data: () => ({
    wallImg: wallImg,
    styleBack: {}
  }),

  computed: {
    ...mapState(["usuarios"]),
    ...mapGetters(["mensajesVivos"])
  },

  created() {
    this.styleBack = { "background-image": "url(" + this.wallImg + ")" };
  },

  methods: {
    ...mapActions(["actualizarMensaje"]),

    buscarAutor(uid) {
      return (
        _get(this.usuarios.find(usr => usr.uid === uid), "data.user.email") ||
        "Sin nombre"
      );
    },
    aHistorial(mensaje) {
      return this.actualizarMensaje({
        id: mensaje.uid,
        data: { archivado: true }
      });
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Satisfy);
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
.all-height {
  min-height: calc(100vh - 30px);
}
.logo {
  font-size: 0.8em;
  padding-left: 10px;
}
.areaname {
  font-size: 1.3em;
  padding-left: 42%;
}
.wall {
  height: auto;
  width: auto;
  background-repeat: repeat;
}
header {
  overflow: hidden;
  background: #ffe1b9;
}
h2 {
  overflow: hidden;
  width: auto;
  background: #f6cd90;
  text-align: center;
}
.quote-container {
  margin-top: 35px;
  position: relative;
}

.note {
  color: #333;
  position: relative;
  width: auto;
  margin: 0 auto;
  padding: 20px;
  font-family: Courgette;
  font-size: 20px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
  background: #efe9cc;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
}

.note .author {
  display: block;
  margin: 40px 0 0 0;
  text-align: right;
}
.pin {
  background-color: #aaa;
  display: block;
  height: 32px;
  width: 2px;
  position: absolute;
  left: 50%;
  top: -16px;
  z-index: 1;
}
.pin:after {
  background-color: #a31;
  background-image: radial-gradient(
    25% 25%,
    circle,
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 0%, 0.3)
  );
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1),
    inset 3px 3px 3px hsla(0, 0%, 100%, 0.2),
    inset -3px -3px 3px hsla(0, 0%, 0%, 0.2),
    23px 20px 3px hsla(0, 0%, 0%, 0.15);
  content: "";
  height: 12px;
  left: -5px;
  position: absolute;
  top: -10px;
  width: 12px;
}
.pin:before {
  background-color: hsla(0, 0%, 0%, 0.1);
  box-shadow: 0 0 0.25em hsla(0, 0%, 0%, 0.1);
  content: "";

  height: 24px;
  width: 2px;
  left: 0;
  position: absolute;
  top: 8px;

  transform: rotate(57.5deg);
  -moz-transform: rotate(57.5deg);
  -webkit-transform: rotate(57.5deg);
  -o-transform: rotate(57.5deg);
  -ms-transform: rotate(57.5deg);

  transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
}
.wrapper {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
}
</style>
