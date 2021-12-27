<template>
  <div class="text-center">
    <v-menu
      :close-on-content-click="false"
      :nudge-width="230"
      fixed
      open-delay
      transition="scale-transition"
      origin="right top"
      rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          large
          width="80"
          rounded
          style="
            position: fixed;
            background-color: black;
            opacity: 0.3;
            right: -20px;
            z-index: 2;
          "
          v-bind="attrs"
          v-on="on"
        >
        </v-btn>
      </template>

      <v-card>
        <v-card-text style="text-align: center">
          <strong class="mb-3">SIDEBAR FILTERS </strong>
          <v-item-group mandatory>
            <v-container>
              <v-row no-gutters justify="center">
                <v-col
                  v-for="(color, index) in filterColors"
                  :key="index"
                  cols="2"
                  md="1"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-btn
                      :color="color"
                      :style="
                        active
                          ? 'border-style: double; border-color: rgb(0, 202, 227);'
                          : ''
                      "
                      class="align-center"
                      rounded
                      x-small
                      min-width="20"
                      @click="
                        toggle();
                        changeColor(color);
                      "
                    >
                      <v-scroll-y-transition> </v-scroll-y-transition>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
          <v-divider class="my-2"></v-divider>
          <strong class="mb-3"> SIDEBAR BACKGROUND </strong>
          <v-item-group mandatory>
            <v-container>
              <v-row no-gutters justify="center">
                <v-col
                  v-for="(color, index) in backgroundColors"
                  :key="index"
                  cols="2"
                  md="1"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-btn
                      :color="color"
                      :style="
                        active
                          ? 'border-style: double; border-color: rgb(0, 202, 227);'
                          : ''
                      "
                      class="align-center"
                      rounded
                      x-small
                      min-width="20"
                      @click="
                        toggle();
                        changeBackColor(color);
                      "
                    >
                      <v-scroll-y-transition> </v-scroll-y-transition>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
          <v-divider class="my-1"></v-divider>
          <v-row no-gutters>
            <v-col cols="auto" class="align-self-center">
              <span style="font-size: large"> Dark Mode </span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-switch
                v-model="$vuetify.theme.dark"
                color="rgb(156, 39, 176)"
              ></v-switch>
            </v-col>
          </v-row>
          <v-divider class="my-1"></v-divider>
          <v-row no-gutters>
            <v-col cols="auto" class="align-self-center">
              <span style="font-size: large"> Slidebar Mini </span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-switch
                @change="drawerStateChange"
                color="rgb(156, 39, 176)"
                :value="drawerState"
              ></v-switch>
            </v-col>
          </v-row>
          <v-divider class="my-1"></v-divider>
          <v-row no-gutters>
            <v-col cols="auto" class="align-self-center">
              <span style="font-size: large"> Slidebar Image </span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-switch
                v-model="imageSlidbar"
                color="rgb(156, 39, 176)"
              ></v-switch>
            </v-col>
          </v-row>
          <v-divider class="my-1"></v-divider>
          <strong class="mb-2"> IMAGES </strong>
          <v-item-group mandatory>
            <v-container>
              <v-row no-gutters justify="center">
                <v-col v-for="n in 4" :key="n" cols="3" md="3">
                  <v-item v-slot="{ active, toggle }">
                    <v-btn
                      :style="
                        active
                          ? 'border-style: double; border-color: rgb(0, 202, 227);'
                          : ''
                      "
                      class="align-center"
                      height="100"
                      min-width="60"
                      @click="toggle"
                    >
                      <v-scroll-y-transition> </v-scroll-y-transition>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
          <v-row no-gutters class="my-3">
            <v-btn width="100%" color="green" dark large> BUY NOW </v-btn>
          </v-row>
          <v-row no-gutters class="my-3">
            <v-btn width="100%" color="#999" dark large> DOCUMENTION </v-btn>
          </v-row>
          <v-row no-gutters class="my-3">
            <v-btn width="100%" color="cyan" dark large> GET FREE DEMO </v-btn>
          </v-row>
          <v-row no-gutters justify="center" class="mt-5">
            <span> THANK YOU FOR SHARING!</span>
          </v-row>
          <v-row no-gutters justify="center" class="mt-5">
            <v-btn color="rgb(85, 172, 238)" class="mx-2" rounded dark>
              <v-icon>mdi-twitter</v-icon>-50
            </v-btn>
            <v-btn color="rgb(59, 89, 152)" class="mx-2" rounded dark>
              <v-icon>mdi-facebook</v-icon>-45
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../../store/index";

export default {
  data: () => ({
    imageSlidbar: "",

    filterColors: [
      "rgb(156, 39, 176)",
      "rgb(0, 202, 227)",
      "rgb(76, 175, 80)",
      "rgb(255, 152, 0)",
      "rgb(233, 30, 99)",
      "rgb(255, 82, 82)",
    ],
    backgroundColors: [
      "rgb(42, 41, 41)",
      "rgb(228, 226, 226)",
      "rgb(243, 84, 73)",
    ],
  }),
  computed: {
    ...mapGetters({
      drawerState: "drawerState",
    }),
  },
  methods: {
    changeColor(color) {
      store.dispatch("sidebar_color_change", { color: color });
    },
    changeBackColor(color) {
      store.dispatch("sidebar_backgrand_color_change", { color: color });
    },
    drawerStateChange() {
      store.dispatch({ type: "drawerChange" });
    },
  },
};
</script>

<style></style>
