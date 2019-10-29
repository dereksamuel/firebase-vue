<template>
 <div>
    <section class="form-wrap">
      <form action="" class="form_contact">
        <h2>ENVIAR MENSAJE</h2>
        <div class="user_info">
          <label for="names">Para:</label>
          <input
            type="text"
            id="names"
            placeholder="Cursos, grados o estudiantes"
          />

          <label for="team">Asunto:</label>
          <input type="text" id="names" placeholder="Temática" />

          <label for="mensaje">Mensaje:</label>
          <textarea
            type="text"
            id="mensaje"
            placeholder="Escribe tu mensaje"
            background-color="crimson"
          ></textarea>
          <p>
           <span class="fas fa-paper-plane">ENVIAR MENSAJE</span>
          </p>
          <div>
           <i class="fas fa-link">VÍNCULAR</i>
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
  background-color:rgb(204, 248, 8);
  text-align:center;
  margin-top:20px; 
  margin-left: 50%;
  display: block;
  border-radius: 360vh;
}
.user_info div {
  background-color:rgb(21, 228, 193);
  text-align:center;
  margin-left:50%;
  display:block;
  margin-top:10px;
  border-radius: 470vw;
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
}
</style>
<script>
export default {
  name: "container",
}
</script>
