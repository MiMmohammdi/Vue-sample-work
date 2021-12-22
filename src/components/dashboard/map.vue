<template>
  <v-card elevation="8" class="pa-5 mt-12 mx-5">
    <v-row no-gutters>
      <v-col md="2" cols="12">
        <v-card
          elevation="8"
          :class="
            $vuetify.rtl
              ? 'pa-5 ma-2 card-style-rtl'
              : 'pa-5 ma-2 card-style-ltr'
          "
          color="green"
          dark
        >
          <v-icon large class="ma-3"> mdi-earth </v-icon>
        </v-card>
      </v-col>
      <v-col md="10" cols="12" :class="$vuetify.breakpoint.xs ? `mt-15` : ``">
        <v-toolbar
          dark
          color="teal"
          :class="$vuetify.breakpoint.xs ? `mt-3` : ``"
        >
          <v-toolbar-title v-if="!$vuetify.breakpoint.xs">{{
            $t("title.state")
          }}</v-toolbar-title>
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            :label="$t('message.searchCity')"
            solo-inverted
          ></v-autocomplete>
          <v-btn @click="searchWeather" icon>
            <v-icon>mdi-search-web</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-15" style="align-items: center">
      <v-col v-if="!isLoding" md="6">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>{{ $t("title.city") }}</td>
                <td>{{ weatherData.city }}</td>
              </tr>
              <tr>
                <td>{{ $t("title.temporary") }}</td>
                <td>{{ weatherData.temp }} {{ $t("title.degree") }}</td>
              </tr>
              <tr>
                <td>{{ $t("title.feelsLike") }}</td>
                <td>{{ weatherData.feelsLike }} {{ $t("title.degree") }}</td>
              </tr>
              <tr>
                <td>{{ $t("title.maxTemporary") }}</td>
                <td>{{ weatherData.maxTemp }} {{ $t("title.degree") }}</td>
              </tr>
              <tr>
                <td>{{ $t("title.minTemporary") }}</td>
                <td>{{ weatherData.minTemp }} {{ $t("title.degree") }}</td>
              </tr>
              <tr>
                <td>{{ $t("title.description") }}</td>
                <td>{{ weatherData.description }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col v-else md="6">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="list-item-three-line"
        ></v-skeleton-loader
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="list-item-three-line"
        ></v-skeleton-loader
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="list-item-two-line"
        ></v-skeleton-loader>
      </v-col>
      <v-col md="6" class="pa-3"
        ><v-img
          lazy-src="https://www.kindpng.com/picc/m/37-372810_high-resolution-world-map-outline-pdf-hd-png.png"
          src="https://www.kindpng.com/picc/m/37-372810_high-resolution-world-map-outline-pdf-hd-png.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../../store/index";

export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Tehran",
        "Arak",
        "Mashhad",
        "Qom",
        "Tabriz",
        "Shiraz",
        "Hamedan",
        "Semnan",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  computed: {
    ...mapGetters({
      isLoding: "isLoding",
      weatherData: "weatherData",
    }),
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    searchWeather() {
      store.dispatch({
        type: "fetchData",
        city: this.search,
        lang: this.$i18n.locale,
      });
    },
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
