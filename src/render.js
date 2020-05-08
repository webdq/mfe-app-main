import Vue from 'vue';
import App from './App';

function vueRender({ loading }) {
  Vue.config.productionTip = false;
  return new Vue({
    el: '#rootApp',
    data() {
      return {
        loading,
      };
    },
    render: (h) => {
      return h(App, {
        props: {
          loading: this.loading,
        },
      });
    },
  });
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
