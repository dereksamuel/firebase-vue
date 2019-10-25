<template>
<div>
  <header>
    <span class="logo">
      Course Diary
    </span>
    <span class="areaname">
      MURO
    </span>
  </header>
  <div class="row">
    <div class="col-12">
      <div class="quote-container">
        <i class="pin"></i>
        <blockquote class="note yellow">
          Mensaje
          <hr />
          Cuerpo de este
          <hr />
          <cite class="author">El autor del escrito</cite>
        </blockquote>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
@import url(http://fonts.googleapis.com/css?family=Satisfy);
@import url(https://fonts.googleapis.com/css?family=Bree+Serif|Courgette&display=swap);

.logo {
  font-size: 1em;
  padding-left: 10px;
}
.areaname {
  font-size: 1.5em;
  padding-left:42%;
}
body {
  background-image: url("/wall.png");
}
header {
  overflow: hidden;
  background: #ffe1b9;
}
h2 {
  overflow: hidden;
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
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  font-family: Courgette;
  font-size: 20px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
  background: #efe9cc;
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
<script>
export default {
  name: "muro"
};
</script>
