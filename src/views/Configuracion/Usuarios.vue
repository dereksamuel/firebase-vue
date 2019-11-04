<template>
  <div>
    <section class="form-wrap">
      <section class="from-warp">
        <span>
          <table class="egt">
            <colgroup
              style="border-style=double; border-color: white; background: rgba(128, 255, 0, 0.3); border: 2px solid rgba(100, 200, 0, 0.3);"
            ></colgroup>

            <colgroup
              style="border-style=double; border-color: white; background: rgba(252, 12, 12, 0.3); border: 2px solid rgba(200, 100, 0, 0.3);"
            ></colgroup>

            <colgroup
              style="border-style=double; border-color: white; background: rgba(255, 128, 0, 0.3); border: 2px solid rgba(200, 100, 0, 0.3);"
            ></colgroup>

            <tr class="title">
              <th>Correo Electrónico</th>

              <th class="user">Tipo de cargo</th>

              <th>Estado de usuario</th>
            </tr>
            <tr v-for="usuario in usuarios" :key="usuario.uid">
              <td>{{ usuario.data.user.email }}</td>
              <td>{{ usuario.data.tipo }}</td>
              <td>{{ usuario.data.estado ? "Activo" : "Inactivo"}}</td>
            </tr>
          </table>
        </span>
      </section>
      <form action class="form_contact"></form>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name:"tabla",
   computed: {
    ...mapState(["usuarios"])
   }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
@import url(https://fonts.googleapis.com/css?family=Ubuntu&display=swap);
tr th,
tr td {
  padding: 5px 10px;
  text-align: center;
  font-family:Ubuntu;
}

.logo {
  font-size: 0.8em;
  padding-left: 10px;
}
.areaname {
  font-size: 1.3em;
  padding-left: 41%;
}
header {
  width: 100% auto;
  overflow: hidden;
  background: #ffe1b9;
}
.form-wrap .form_contact .panel {
  width: auto;
  margin-left: 1.5vw;
  background-color: aquamarine;
  margin-right: 1.5vw;
}
.form-wrap .form_contact .aj {
  margin-top: 2.6vh;
  margin-left: 2vw;
  font-family: Ubuntu;
  margin-right: 2vw;
}
.form-wrap {
  width: 70vw;
  height: auto;
  max-height: 1000px;
  margin: 50px auto;
  display: flex;
  overflow: hidden;
  margin-top: 5vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: #e6f6fadc;
  margin-bottom: 35px;
}
.form-wrap span {
  margin-left: 5vw;
  height: 3vh;
  font-size: 30px;
}
.from-warp span .egt {
  font-size: 20px;
}

body {
  background-color: rgb(193, 223, 250);
}
</style>
