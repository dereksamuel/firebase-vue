<template>
  <div>
    <header>
      <span class="logo">
        Course Diary
      </span>
      <span class="areaname">
        Historial
      </span>
    </header>
    <section class="form-wrap">
      <form action="" class="form_contact">
        <div>
          Hola Derek, estoy más vivo que muerto :)
        </div>
      </form>
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
  height: auto;
  max-height: 1000px;
  margin: 50px auto;
  display: flex;
  overflow: hidden;
  margin-top: 1px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: #cdf0f4;
}
.form-wrap div {
  font-family: Bree Serif;
}
</style>
<script>
export default {
  name: "historial"
};
</script>
