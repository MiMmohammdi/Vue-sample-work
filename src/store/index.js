import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerState: false,
    isLoding: false,
    weatherData: {},
    sidebarColor: "rgb(233, 30, 99)",
    sidebarBackgrand: "unset",
  },
  mutations: {
    SET_DRAWER_STATE(state) {
      state.drawerState = !state.drawerState;
    },
    SET_WEATHER_DATA(state, payload) {
      state.weatherData = payload;
    },
    SET_LOADING(state) {
      state.isLoding = !state.isLoding;
    },
    SET_SLIDEBAR_COLOR(state, payload) {
      state.sidebarColor = payload;
    },
    SET_SLIDEBAR_BACKGRAND_COLOR(state, payload) {
      state.sidebarBackgrand = payload;
    },
  },
  actions: {
    drawerChange(context) {
      context.commit("SET_DRAWER_STATE");
    },
    async fetchData(context, payload) {
      context.commit("SET_LOADING");
      await axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: payload.city,
            appid: "d71c1b3ea97cd75e207bf80d5b11b95b",
            units: "metric",
            lang: payload.lang,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            let data = {
              city: res.data.name,
              temp: res.data.main.temp,
              feelsLike: res.data.main.feels_like,
              maxTemp: res.data.main.temp_max,
              minTemp: res.data.main.temp_min,
              description: res.data.weather[0].description,
            };
            context.commit("SET_WEATHER_DATA", data);
            context.commit("SET_LOADING");
          }
        })
        .catch((err) => {
          console.log(err);
          context.commit("SET_LOADING");
        });
    },
    sidebar_color_change(context, payload) {
      context.commit("SET_SLIDEBAR_COLOR", payload.color);
    },
    sidebar_backgrand_color_change(context, payload) {
      context.commit("SET_SLIDEBAR_BACKGRAND_COLOR", payload.color);
    },
  },
  getters: {
    drawerState: (state) => {
      return state.drawerState;
    },
    isLoding: (state) => {
      return state.isLoding;
    },
    weatherData: (state) => {
      return state.weatherData;
    },
    sidebarColor: (state) => {
      return state.sidebarColor;
    },
    sidebarBackgrand: (state) => {
      return state.sidebarBackgrand;
    },
  },
});
