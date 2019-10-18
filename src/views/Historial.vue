<template>
  <div>
    <header>
    <font size="3">
    Course Diary
    </font>
    </header>
    <h2>
    <font size="6">
    Historial
    </font>
    </h2>
    <h3>
    <font size="4">
    Aquí van los mensajes almacenados por el programa
     <hr>
     Lo anterior fue un hr
     <hr>
    </font>
    </h3>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);
header{
  width:100%;
  overflow:hidden;
  background:#FFAE40;
 
}
h2{
  width:100%;
  overflow:hidden;
  background:#f6cd90;
  text-align: center;
}
h3{
  margin-top: 50px;
  margin-right:50px;
  margin-left:50px;
  height:320px;
  font-family:Courgette;
  position: relative;
  background:#CDF0F4;
}
</style>
<script>
export default {
  name: "historial"
};
</script>
