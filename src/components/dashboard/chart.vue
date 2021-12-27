<template>
  <v-hover v-slot="{ hover }">
    <v-card elevation="8" width="500" height="320" class="px-5 mt-12 mx-2">
      <v-sheet
        :class="hover ? 'mx-auto card-style' : 'v-sheet--offset mx-auto'"
        :color="chartColor"
        height="160"
        elevation="12"
      >
        <v-sparkline
          :labels="labels"
          :value="value"
          color="white"
          line-width="4"
          padding="16"
          class="ct-chart-line"
          :type="chartType"
        ></v-sparkline>
      </v-sheet>
      <v-row no-gutters justify="center" class="btn-card">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="px-0" text v-bind="attrs" v-on="on">
              <v-icon small style="color: cyan"> mdi-refresh </v-icon>
            </v-btn>
          </template>
          <span>Refresh</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="px-0" text v-bind="attrs" v-on="on">
              <v-icon small style="color: gray"> mdi-pencil </v-icon>
            </v-btn>
          </template>
          <span>Change Date</span>
        </v-tooltip>
      </v-row>
      <v-card-text class="pt-0">
        <div class="text-h6 font-weight-light mb-2">{{ title }}</div>
        <div class="subheading font-weight-light grey--text">
          <v-icon v-if="icon" small> mdi-{{ icon }} </v-icon>{{ subTitle }}
        </div>
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small> mdi-clock </v-icon>
        <span class="text-caption grey--text font-weight-light">{{
          desc
        }}</span>
      </v-card-text>
    </v-card></v-hover
  >
</template>

<script>
export default {
  props: {
    chartColor: String,
    title: String,
    subTitle: String,
    desc: String,
    icon: String,
    chartType: String,
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
