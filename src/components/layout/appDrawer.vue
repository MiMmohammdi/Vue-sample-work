<template>
  <v-navigation-drawer
    disable-resize-watcher
    disable-route-watcher
    :permanent="!$vuetify.breakpoint.xs"
    :expand-on-hover="!$vuetify.breakpoint.xs ? drawerState == false : null"
    :right="$vuetify.rtl"
    fixed
    :color="sidebarBackgrand"
    :style="$vuetify.rtl ? 'transform: translateX(0%);' : ''"
    dark
    :value="drawerState"
    :absolute="$vuetify.breakpoint.xs"
    :temporary="$vuetify.breakpoint.xs"
    @input="changeDrawerState"
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 mt-5">
            {{ $t("title.appTitle") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="ma-2" style="background-color: grey"></v-divider>

    <v-list-group :value="false" no-action>
      <template v-slot:activator>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-style"
            >Mohsen Mohammadi</v-list-item-title
          >
        </v-list-item-content>
      </template>

      <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
        <v-list-item-icon>
          <span v-text="icon"></span>
        </v-list-item-icon>

        <v-list-item-title
          v-text="title"
          class="text-style"
        ></v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-divider class="ma-2" style="background-color: grey"></v-divider>

    <v-list-item :style="'background-color: ' + sidebarColor" dark link>
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-content @click="$router.push('/')">
        <v-list-item-title>{{ $t("title.dashboard") }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <div v-for="([title, icon, child], i) in titles" :key="i">
      <v-list-group v-if="child" :value="false" no-action>
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="title"
              class="text-style"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in child"
          :key="i"
          link
          :class="$vuetify.rtl ? 'pr-5' : 'pl-5'"
        >
          <v-list-item-icon>
            <span v-text="icon"></span>
          </v-list-item-icon>

          <v-list-item-title
            v-text="title"
            @click="goToTitle(title)"
            class="text-style"
          ></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item v-else dark link>
        <v-list-item-icon>
          <v-icon v-text="icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            v-text="title"
            class="text-style"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../../store/index";

export default {
  data: () => ({
    admins: [
      ["My Profile", "MP"],
      ["Edit Profile", "EP"],
      ["Settings", "S"],
    ],
    titles: [
      [
        "Page",
        "mdi-image",
        [
          ["Pricing", "P"],
          ["RTL Support", "RS"],
          ["Timeline", "T"],
          ["Login Page", "LP"],
          ["Register Page", "RP"],
          ["Lock Screen Page", "LSP"],
          ["User Profile", "UP"],
          ["Error Page", "EP"],
        ],
      ],
      [
        "Components",
        "mdi-border-all",
        [
          ["Multi Level Collapse", "MLC", ["Example", "E"]],
          ["Buttons", "B"],
          ["Grid System", "GS"],
          ["Tabs", "T"],
          ["Notifications", "N"],
          ["Icons", "I"],
          ["Typography", "T"],
        ],
      ],
      [
        "Form",
        "mdi-clipboard-outline",
        [
          ["Regular Forms", "RF"],
          ["Extended Forms", "EF"],
          ["Validation Forms", "VF"],
          ["Wizard", "W"],
        ],
      ],
      [
        "Table",
        "mdi-table-large",
        [
          ["Regular Tables", "RT"],
          ["Extended Tables", "ET"],
          ["Data Tables", "DS"],
        ],
      ],
      [
        "Maps",
        "mdi-map-marker",
        [
          ["Google Maps", "GM"],
          ["Full Screen Map", " FSM"],
        ],
      ],
      ["Widgets", "mdi-widgets"],
      ["Charts", "mdi-chart-timeline-variant"],
      ["Calender", "mdi-calendar-range"],
    ],
  }),
  computed: {
    ...mapGetters({
      drawerState: "drawerState",
      sidebarColor: "sidebarColor",
      sidebarBackgrand: "sidebarBackgrand",
    }),
  },
  methods: {
    changeDrawerState(state) {
      if (!state) {
        store.dispatch({ type: "drawerChange" });
      }
    },
    goToTitle(title) {
      let address = title.replace(/\s+/g, "").toLowerCase();

      this.$router.push({ path: address, params: { name: address } });
    },
  },
};
</script>

<style>
.text-style {
  color: gray;
  font-size: small;
}
</style>
