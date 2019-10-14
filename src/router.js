import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Historial from "./views/Historial.vue";
import Creditos from "./views/Creditos.vue";
import Muro from "./views/Muro.vue";
import MensajeNuevo from "./views/MensajeNuevo.vue";
import Configuracion from "./views/Configuracion";
import Usuarios from "./views/Configuracion/Usuarios";
import Agrupaciones from "./views/Configuracion/Agrupaciones";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "historial",
          name: "historial",
          component: Historial
        },
        {
          path: "creditos",
          name: "creditos",
          component: Creditos
        },
        {
          path: "muro",
          name: "muro",
          component: Muro
        },
        {
          path: "mensaje_nuevo",
          name: "mensaje_nuevo",
          component: MensajeNuevo
        },
        {
          path: "configuracion",
          name: "configuracion",
          component: Configuracion,
          children: [
            {
              path: "usuarios",
              name: "usuarios",
              component: Usuarios
            },
            {
              path: "agrupaciones",
              name: "agrupaciones",
              component: Agrupaciones
            }
          ]
        }
      ]
    }
  ]
});
