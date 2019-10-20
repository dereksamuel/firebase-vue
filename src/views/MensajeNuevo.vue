<template>   
  <div>
    <h1>
      <font size="4">
        CREAR NUEVO MENSAJE
       <hr>
       &nbsp&nbsp&nbsp&nbspPara: 
       <input
          type="inputmode"
          class="form-control"
          aria-label="Username"
          placeholder="Cursos, Estudiantes y Grados"
          aria-describedby="password-field"
       />
       <hr>
       &nbsp&nbsp&nbsp&nbspAsunto:<input
          type="text"
          class="form-control"
          aria-label="username"
          aria-describedby="password-field"
          placeholder="Temática"
       />
       <hr>
       <textarea type="mensaje" placeholder="Escriba aquí su mensaje" cols="60"></textarea>
       <hr>
       <div id="app">
         <p><i class="fas fa-link"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="fas fa-paper-plane"></i></p>
        </div>
      </font>
    </h1>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
h1{
  width: 490px;
  font-family:Courgette;
  text-align:left;
  margin:auto;
  margin-top:100px;
  height:auto;
  font-family:Bree Serif;
  position: relative;
  background:rgba(0,0,0,0.2);
  padding:20px 20px;
  border:none;
}
textarea{
 min-height:100px;
 max-height:200px;
 max-width:100%;
}
</style>
<script>
export default {
  name: "mensaje_nuevo"
};
</script>
