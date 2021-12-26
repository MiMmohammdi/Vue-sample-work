<template>
  <v-app color="black">
    <Drawer />
    <v-row
      no-gutters
      :class="
        drawerState == true && !$vuetify.breakpoint.xs
          ? `${$vuetify.rtl ? 'sid-push-r' : 'sid-push-l'}`
          : ''
      "
    >
      <Header />

      <v-main
        :class="
          $vuetify.rtl
            ? 'mr-md-2 pr-md-12 pt-md-12 pt-10 mx-1'
            : 'ml-md-2 pl-md-12 pt-md-12 pt-10 mx-1'
        "
        :style="!$vuetify.theme.dark ? 'background-color: whitesmoke' : ''"
      >
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-col>
        <Footer />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Footer from "./components/layout/footer.vue";
import Header from "./components/layout/header.vue";
import Drawer from "./components/layout/appDrawer.vue";

import store from "./store/index";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Footer,
    Header,
    Drawer,
  },
  computed: {
    ...mapGetters({ drawerState: "drawerState" }),
  },
  mounted() {
    store.dispatch({
      type: "fetchData",
      city: "Tehran",
      lang: this.$i18n.locale,
    });
  },
};
</script>

<style lang="scss" scoped>
.sid-push-l {
  margin-left: 195px;
}
.sid-push-r {
  margin-right: 195px;
}
</style>
