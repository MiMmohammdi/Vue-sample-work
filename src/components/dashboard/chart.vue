<template>
  <v-hover v-slot="{ hover }">
    <v-card elevation="8" width="320" height="320" class="pa-5 mt-12 mx-5">
      <v-row no-gutters>
        <v-col>
          <v-card
            elevation="8"
            width="280"
            height="160"
            class="d-flex"
            color="green"
            :style="
              hover
                ? `position: relative;
                top: -90px;
                zindex: 1;
                `
                : `position: relative;
                top: -40px;
                zindex: 1;`
            "
            dark
          >
          </v-card>
        </v-col>
        <v-btn> hii </v-btn>
        <v-btn> hii </v-btn>
      </v-row>
    </v-card></v-hover
  >
</template>

<script>
export default {};
</script>

<style scoped>
.card-style {
  position: absolute;
  transition: top 1s;
}

.card-style:hover {
  top: -40px;
}
</style>
