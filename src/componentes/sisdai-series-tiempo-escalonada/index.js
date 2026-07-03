import SisdaiSeriesTiempoEscalonada from "./SisdaiSeriesTiempoEscalonada.vue";

const plugin = {
  install: function (Vue) {
    Vue.component("SisdaiSeriesTiempoEscalonada", SisdaiSeriesTiempoEscalonada);
  },
};

export default plugin;
