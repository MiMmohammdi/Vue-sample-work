<template>
  <v-card
    elevation="8"
    :width="$vuetify.breakpoint.xs ? '100%' : '420'"
    height="120"
    class="mt-12 mx-5"
  >
    <v-row no-gutters>
      <v-col md="2" cols="12">
        <v-card
          elevation="8"
          :class="
            $vuetify.rtl ? 'pa-5 mr-3 card-style-rtl' : 'pa-5 card-style-ltr'
          "
          :color="pColor"
          dark
          width="80"
          height="85"
        >
          <v-icon large class="ma-1"> {{ pIcon }} </v-icon>
        </v-card>
      </v-col>
      <v-col md="10" cols="12">
        <v-col
          class="pb-0"
          :style="$vuetify.rtl ? 'text-align: left; color: gray;' : 'text-align: right; color: gray;'"
          >{{ title }}</v-col
        >
        <v-col
          class="pt-0"
          :style="$vuetify.rtl ? 'text-align: left;' : 'text-align: right;'"
          >{{ number }}</v-col
        >
      </v-col>
    </v-row>
    <v-divider class="ma-1"></v-divider>
    <v-row no-gutters class="pa-2">
      <v-col
        ><v-icon v-text="tIcon"></v-icon> <span style="color: gray;" v-text="time"></span
      ></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    pIcon: String,
    time: String,
    tIcon: String,
    title: String,
    number: String,
    pColor: String,
  },
};
</script>

<style scoped>
.card-style-ltr {
  top: -25px;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 15px;
}

.card-style-rtl {
  top: -25px;
  height: 100px;
  width: 100px;
  position: absolute;
}
</style>
