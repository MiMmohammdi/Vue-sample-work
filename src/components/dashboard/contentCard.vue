<template>
  <v-hover v-slot="{ hover }">
    <v-card elevation="8" width="280" height="380" class="px-5 mt-12 mx-2">
      <v-sheet
        :class="hover ? 'mx-auto card-style' : 'v-sheet--offset mx-auto'"
        height="180"
        elevation="12"
        rounded
      >
        <v-img height="100%" width="100%" :src="imgAddress"> </v-img>
      </v-sheet>
      <v-row no-gutters justify="center" class="btn-card">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="px-0" text v-bind="attrs" v-on="on">
              <v-icon small> mdi-view-split-vertical </v-icon>
            </v-btn>
          </template>
          <span>View</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="px-0" text v-bind="attrs" v-on="on">
              <v-icon small style="color: green"> mdi-pencil </v-icon>
            </v-btn>
          </template>
          <span>Edit</span> </v-tooltip
        ><v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="px-0" text v-bind="attrs" v-on="on">
              <v-icon small style="color: red"> mdi-close </v-icon>
            </v-btn>
          </template>
          <span>Remove</span>
        </v-tooltip>
      </v-row>
      <v-card-text class="pt-0">
        <div
          :style="
            !$vuetify.theme.dark
              ? 'text-align: center; color: black'
              : 'text-align: center;'
          "
          class="text-h6 font-weight-light mb-2"
        >
          {{ title }}
        </div>
        <div
          style="text-align: center"
          class="subheading font-weight-light grey--text"
        >
          {{ subTitle }}
        </div>
        <v-divider class="my-2"></v-divider>
        <v-row no-gutters>
          <v-icon class="mr-2" small> mdi-currency-usd </v-icon>
          <span class="text-caption grey--text font-weight-light">{{
            desc
          }}</span>
          <v-spacer></v-spacer>

          <v-icon class="mr-2" small> mdi-map-marker </v-icon>
          <span class="text-caption font-weight-light">{{ location }}</span>
        </v-row>
      </v-card-text>
    </v-card></v-hover
  >
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    desc: String,
    imgAddress: String,
    location: String,
  },
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>

<style scoped>
.card-style {
  transition: top 0.5s;
  top: -60px;
  position: relative;
  z-index: 1;
}

.v-sheet--offset {
  top: -20px;
  transition: top 0.5s;
  position: relative;
  z-index: 1;
}

.btn-card {
  margin-top: -55px;
  margin-bottom: 50px;
}
</style>
