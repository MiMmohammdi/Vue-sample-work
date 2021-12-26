<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" style="text-align: center; font-size: x-large">
      <span> Vuetify Timelines</span>
    </v-col>
    <v-col cols="12" style="text-align: center">
      <span>
        Please checkout the full<span style="color: coral" @click="goToDuc">
          documentations</span
        ></span
      >
    </v-col>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-text class="white text--primary">
            <v-chip
              class="mb-5"
              :color="item.color"
              v-text="item.title"
            ></v-chip>
            <p>
              {{ item.desc }}
            </p>

            <v-menu
              v-if="item.btn"
              origin="top left"
              transition="scale-transition"
              offset-y
              rounded="0.5"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="item.color"
                  class="px-0"
                  min-width="80"
                  rounded
                  elevation="false"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon rounded="1">{{ item.btnIcon }}</v-icon>
                </v-btn>
              </template>

              <v-list width="200">
                <v-list-item-group
                  background="white"
                  v-for="btn in item.btnMenu"
                  :key="btn"
                >
                  <v-list-item class="hover-color px-1">
                    <v-list-item-content>
                      <v-list-item-title
                        :class="$vuetify.rtl ? 'pr-4' : 'pl-4'"
                        >{{ btn }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: " Some title ",
        color: "red",
        icon: "mdi-shopping",
        desc: "Wifey made the best Fathers Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the future theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown 11 HOURS AGO VIA TWITTER",
      },
      {
        title: " Another one ",
        color: "green",
        icon: "mdi-puzzle",
        desc: "Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....",
      },
      {
        title: " Another one ",
        color: "blue",
        icon: "mdi-fingerprint",
        desc: "Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye",
        btn: "setting",
        btnIcon: "mdi-wrench",
        btnMenu: ["Action", "Another Action", "Something else here"],
      },
      {
        title: " Another one ",
        color: "orange",
        icon: "mdi-airplane-landing",
        desc: "Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team",
      },
    ],
  }),
  methods: {
    goToDuc() {
      window.open("https://vuetifyjs.com/en/components/timelines/");
    },
  },
};
</script>

<style></style>
