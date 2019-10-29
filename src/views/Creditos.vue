<template>
  <div>
    <header>
      <span class="logo">
        Course Diary
      </span>
      <span class="areaname">
        Créditos
      </span>
    </header>
    <section class="form-wrap" style="margin-top: 15px; margin-bottom: 15px;">
      <form action="" class="form_contact">
        <h2>Sobre: DEREK SAMUEL PAÚL PEÑA</h2>
        <hr />
        <div>
          <p class="paragraf">
            Esta aplicación, fue diseñada por el estudiante Derek Samuel Paúl
            Peña, quien cuenta hasta el día de hoy con 16 años de edad, y tiene
            planteado continuar con sus estudios como ingeniero sistemático
            generando aplicaciones de esta índole. Además de esto, se está
            enfocando en escribir temas relacionados con sentimientos profundos
            que ha planteado desde muy joven en poemas que le proporcionan
            cierta inspiración, para programar con mayor facilidad.
          </p>
          <h4>FORMAS DE CONTACTO:</h4>
          <p>
            <ul class="paragraf">
              <li>Dirección: Calle 40 sur #23C - 17</li>
              <li>Teléfono: 473 56 57</li>
              <li>Correo electrónico: dereksamuelgr@gmail.com</li>
            </ul>
          </p>
          <h4>
            AGRADECIMIENTOS ESPECIALES
          </h4>
          <hr />
          <p class="paragraf">
            Se le desea agradecer de forma especial por su contribución no solo
            a los conocimientos y bases de esta aplicación, sino también porque
            de una u otra forma apoyaronen sentido moral y amable al
            desarrollador en proceso, a las siguientes personas:
            <ul style="margin-top: 15px;">
              <li>Luis Andres Fonseca</li>
              <li>Milena Peña Zuluaga</li>
              <li>Hector Maunel Paúl</li>
              <li>Daniel Alejandro Paúl</li>
            </ul>
          </p>
          <h6>
            APLICACIONES RELACIONADAS CON EL TEMA:
          </h6>
          <hr />
          <h6 class="pero">
            <ul>
              <li class="wasa"></li>
              <li>Facebook</li>
              <li>Gmail</li>
            </ul>
          </h6>
        </div>
      </form>
    <div class="hola"></div>
    </section>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);

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
.form-wrap {
  width: 70vw;
  max-height: 1000px;
  margin: auto;
  display: flex;
  overflow: hidden;
  margin-top: 1px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: #f6cd90;
}
h2 {
  margin-top: 10px;
  font-family: Bree serif;
  font-style: oblique;
  font-size: 2em;
  text-align: center;
}
.paragraf {
  font-size: 1em;
  font-family: Bree Serif;
  color: #00000099;
  margin-left: 20px;
  margin-right: 20px;
  text-align:center; 
  list-style:none;
}
.form-wrap dir {
  font-size: 1em;
  font-family: Bree Serif;
  margin-left: 20px;
  margin-right: 20px;
}
h4 {
  margin-top: 20px;
  text-align: center;
  font-family: Bree serif;
  font-size: 1.7em;
}
h5 {
  font-size: 1em;
  font-family: Bree Serif;
  margin-left: 20px;
  margin-right: 20px;
}
.paragraf ul {
  font-size: 1em;
  font-style: italic;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  text-align:center;
   list-style:none;
}
h6 {
  margin-top: 20px;
  text-align: center;
  font-family: Bree serif;
  font-size: 1.7em;
}
.pero ul {
  font-size: 1em;
  font-style: italic;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.pero .wasa{
   position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
.hola{ 
  z-index: 1;
  background-image: url("../assets/wasap.png");
  margin-left:40px;
  margin-right:40px;
  background-repeat: no-repeat;
}
</style>
<script>
export default {
  name: "creditos"
};
</script>
