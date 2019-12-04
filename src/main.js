// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "~/assets/styles/main.scss";

import Vuex from 'vuex'

export default function(Vue, { router, head, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state:{
      phone: '',
      name: '',
      submitted: false
    },
    mutations: {
      'SET_PHONE'(state, payload) {
        state.phone = payload;
      },
      'SET_NAME'(state, payload) {
        state.name = payload;
      },
      'SUBMIT_FORM'(state) {
        state.submitted = true
      }
    },
    actions: {
      setPhone({commit}, payload) {
        commit('SET_PHONE', payload)
      },
      setName({commit}, payload) {
        commit('SET_NAME', payload)
      },
      submitForm({commit}) {
        commit('SUBMIT_FORM')
      }
    },
    getters: {
      phone(state) {
        return state.phone
      },
      name(state) {
        return state.name  
      },
      submitted(state) {
        return state.submitted
      }
    }
  })

  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
  // });

  head.meta.push({
    name: "description",
    key: "description",
    content:
      "Деньги день в день под ПТС по очень низкой ставке! 1,5% в месяц – подари себе каникулы! С любой КИ и без поручителей. Авто остается у Вас! Без скрытых комиссий. Здесь Легко! 8 (800) 222-01-22"
  });
}
