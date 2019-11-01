<template>
  <div class="wall" :style="styleBack">
    <section class="form-wrap">
      <form class="form_contact" @submit.prevent="enviarMensaje">
        <h2>ENVIAR MENSAJE</h2>
        <div class="user_info">
          <label for="names">Para:</label>
          <Multiselect
          style="width: 150px;"
            v-model="form.usuarios"
            deselect-label="Can't remove this value"
            track-by="uid"
            label="names"
            placeholder="Seleccione mínimo uno"
            :multiple="true"
            :options="usuariosPuros"
            :searchable="false"
            :allow-empty="false">
            <template slot="singleLabel" slot-scope="{ option }">
              <span>{{ option.email }}</span>
            </template>            
          </Multiselect>

          <label for="asunto">Asunto:</label>
          <input type="text" id="asunto" placeholder="Temática" v-model="form.asunto"/>

          <label for="mensaje">Mensaje:</label>
          <textarea
            type="text"
            id="mensaje"
            placeholder="Escribe tu mensaje"
            background-color="crimson"
            v-model="form.mensaje"
          ></textarea>
          <p>
            <span class="fas fa-paper-plane" @click="enviarMensaje"></span>
          </p>
          <div>
            <i class="fas fa-link"></i>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.form-wrap {
  width: 500px auto;
  height: 530px auto;
  margin: 50px auto;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 100px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: #a785bea8;
}
.contact_info::before {
  content: "";
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
.info_title,
.info_items {
  position: relative;
  z-index: 2;
  color: rgb(255, 255, 255);
}
.info_title {
  margin-bottom: 80px;
}
.info_title span {
  font-size: 60px;
  display: block;
  text-align: center;
  margin-bottom: 15px;
}
.info_title h2 {
  font-family: Bree Serif;
  font-size: 35px;
  text-align: center;
}
.info_items span {
  display: flex;
  text-align: center;
  font-size: 60px;
  display: block;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.contact_info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user_info p {
  text-align: center;
  margin-top: 20px;
  margin-left: 41%;
  border-radius: 50%;
  width: 28px;
  border: 3px solid rgba(22, 19, 19, 0);
  height: 28px;
  background: paleturquoise;
}
.user_info div {
  text-align: center;
  margin-top: -26.58px;
  margin-left: 55%;
  border-radius: 50%;
  width: 28px;
  border: 3px solid rgb(22, 19, 19, 0);
  height: 28px;
  background: pink;
}
form.form_contact {
  width: 100%;
  padding: 30px 40px;
  font-family: Bree Serif;
}
form.form_contact h2 {
  font-size: 35px;
  font-weight: 600;
  columns: #303030;
  margin-bottom: 30px;
  font-family: Bree Serif;
}
form.form_contact .user_info {
  display: flex;
  flex-direction: column;
  font-family: Bree Serif;
}
form.form_contact input,
form.form_contact textarea {
  width: 100%;
  max-height: 100vh;
}
.triste {
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
}
</style>

<script>
import tristeImg from "@/assets/triste.jpg";
import Multiselect from 'vue-multiselect'
import { mapActions, mapState } from 'vuex';
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
  name: "nuevomensaje",

  components: {
    Multiselect
  },

  data: () => ({
    tristeImg: tristeImg,
    styleBack: {},
    form: {
      usuarios: [],
      asunto: '',
      mensaje: '',
      estado: {},
      creador: '',
      fecha: Date().toString()
    }
  }),

  computed: {
    ...mapState([
      "usuarios"
    ]),
    paraEnviar() {
      const envio = this.form
      if (envio.usuarios.length) {
        const base = { recibido: null, leido: null }
        const usrs = {}
        envio.usuarios = envio.usuarios.map(us => us.uid)
        envio.usuarios.forEach(us => {
          usrs[us] = base
        })
        envio.estado = usrs
      }
      return envio
    },
    usuariosPuros() {
      return this.usuarios.map(usr => {
        const toReturn = { uid: usr.uid, ...usr.data.user, nombre: usr.data.name }
        return toReturn;
      })
    }
  },

  created() {
    this.styleBack = { "background-image": "url(" + this.tristeImg + ")" };
  },

  methods: {
    ...mapActions([
      "crearMensaje"
    ]),

    enviarMensaje() {
      return this.crearMensaje(this.form)
    }
  }
};
</script>
