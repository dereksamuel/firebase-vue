<template>
  <div>
    <header>
      <span class="logo">
        Course Diary
      </span>
      <span class="areaname">
        Configuración
      </span>
    </header>
    <section class="form-wrap">
      <section class="from-warp">
        <a href="Usuarios.vue"><span class="fas fa-users-cog"></span></a>
      </section>
      <form action="" class="form_contact">
        <div class="panel">
          <div class="aj">
            AJUSTES DE USUARIOS
          </div>
          <div class="aj">
            Aquí puedes modificar tu estatus como usuario junto con el nombre de
            tal al hacer click en este título o en la imágen
          </div>
        </div>
        <br />
      </form>
      <hr />
    </section>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
@import url(https://fonts.googleapis.com/css?family=Ubuntu&display=swap);

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
  background: #cdf0f4;
  margin-bottom: 35px;
}
.form-wrap span {
  margin-left: 5vw;
  height: 3vh;
  font-size: 30px;
}
.form-wrap .from-warp span {
  margin-top: 4vh;
  margin-left: 2vw;
  border-radius: 50%;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  height: 5vh;
  background-color: rgb(255, 255, 255);
}

body {
  background-color: aliceblue;
}
</style>
