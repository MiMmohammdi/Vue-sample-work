<template>
  <v-app-bar
    color="whitesmoke"
    :class="$vuetify.rtl ? 'mr-md-13' : 'ml-md-13'"
    style="box-shadow: none"
  >
    <v-row no-gutters class="mt-5" align="center" justify="end">
      <v-btn
        icon
        style="background-color: white"
        class="ml-md-5 ma-2"
        @click="drawerStateChange"
      >
        <v-icon
          >mdi-{{
            drawerState ? "view-dashboard" : "dots-vertical-circle-outline"
          }}</v-icon
        >
      </v-btn>
      <v-toolbar-title v-if="!$vuetify.breakpoint.xs">{{
        $t("title.dashboard")
      }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col md="1" cols="3">
        <v-text-field
          :reverse="$vuetify.rtl ? 'reverse' : ''"
          :label="$t('message.searchAll')"
          hide-details="auto"
        ></v-text-field
      ></v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" md="1" style="text-align: center">
        <v-btn icon style="background-color: white">
          <v-icon>mdi-magnify</v-icon>
        </v-btn></v-col
      >
      <v-col
        md="1"
        cols="2"
        :style="$vuetify.rtl ? 'text-align: left' : 'text-align: right'"
      >
        <v-btn class="px-0" min-width="50" elevation="false" to="/">
          <v-icon rounded="1">mdi-view-dashboard</v-icon>
        </v-btn></v-col
      >
      <v-col
        md="1"
        cols="2"
        :style="$vuetify.rtl ? 'text-align: left' : 'text-align: right'"
        ><v-menu
          :origin="$vuetify.rtl ? 'top left' : 'top right'"
          transition="scale-transition"
          :style="!$vuetify.rtl ? 'left: 619px;' : ''"
          offset-y
          rounded="0.5"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-0"
              min-width="50"
              elevation="false"
              v-bind="attrs"
              v-on="on"
            >
              <v-badge color="red" content="5" overlap bordered
                ><v-icon rounded="1">mdi-bell </v-icon></v-badge
              >
            </v-btn>
          </template>

          <v-list width="300">
            <v-list-item-group background="white">
              <v-list-item
                class="hover-color px-1"
                v-for="(notify, index) in notifications"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title
                    :class="$vuetify.rtl ? 'pr-4' : 'pl-4'"
                    v-text="notify"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
      <v-col
        md="1"
        cols="2"
        :style="$vuetify.rtl ? 'text-align: left' : 'text-align: right'"
      >
        <v-menu
          :origin="$vuetify.rtl ? 'top left' : 'top right'"
          transition="scale-transition"
          offset-y
          rounded="0.5"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-0"
              min-width="50"
              elevation="false"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon rounded="1">mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list width="200">
            <v-list-item-group background="white">
              <v-list-item class="hover-color px-1">
                <v-list-item-content>
                  <v-list-item-title :class="$vuetify.rtl ? 'pr-4' : 'pl-4'">{{
                    $t("menuTitle.profile")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="hover-color px-1">
                <v-list-item-content>
                  <v-list-item-title :class="$vuetify.rtl ? 'pr-4' : 'pl-4'">{{
                    $t("menuTitle.setting")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item class="hover-color px-1">
                <v-list-item-content>
                  <v-list-item-title :class="$vuetify.rtl ? 'pr-4' : 'pl-4'">{{
                    $t("menuTitle.logout")
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu></v-col
      >
    </v-row>
  </v-app-bar>
</template>

<script>
import store from "../../store/index";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one",
    ],
  }),
  methods: {
    drawerStateChange: () => {
      store.dispatch({ type: "drawerChange" });
    },
  },
  computed: {
    ...mapGetters({ drawerState: "drawerState" }),
  },
};
</script>

<style>
.hover-color :hover {
  background-color: blueviolet;
  color: aliceblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.sid-push {
  margin-left: 195px;
}
</style>
