<template>
  <v-footer
    padless
    :class="
      $vuetify.rtl ? 'mr-md-2 pr-md-12 pl-md-0' : 'ml-md-2 pl-md-12 pr-md-0'
    "
  >
    <v-row no-gutters class="pa-5 align-items center">
      <v-col
        :class="$vuetify.rtl ? 'text-right my-3' : 'text-left my-3'"
        cols="12"
        sm="12"
        md="7"
      >
        <v-btn small text> {{ $t("button.creativeTim") }} </v-btn>
        <v-btn small text> {{ $t("button.aboutUs") }} </v-btn>
        <v-btn small text> {{ $t("button.blog") }}</v-btn>
        <v-btn small text> {{ $t("button.licenses") }} </v-btn>
        <v-btn small text>
          <v-btn small text @click="changeLang('en')"> En </v-btn
          ><v-btn small text @click="changeLang('fa')"> Fa </v-btn>
        </v-btn>
      </v-col>
      <v-col class="text-center my-3" cols="12" sm="12" md="5">
        © {{ new Date().getFullYear() }} — {{ $t("message.made")
        }} <v-icon> mdi-heart </v-icon>
        {{ $t("message.by") }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import store from "../../store/index";
export default {
  methods: {
    changeLang(lang) {
      if (lang == "fa") {
        this.$vuetify.rtl = true;
        this.$i18n.locale = "fa";
        store.dispatch({
          type: "fetchData",
          city: "Tehran",
          lang: this.$i18n.locale,
        });
        return;
      }
      this.$vuetify.rtl = false;
      this.$i18n.locale = "en";
      store.dispatch({
        type: "fetchData",
        city: "Tehran",
        lang: this.$i18n.locale,
      });
    },
  },
};
</script>

<style></style>
