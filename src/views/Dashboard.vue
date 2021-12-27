<template>
  <v-row no-gutters justify="center">
  <FloatMenu v-if="!$vuetify.rtl" />
    <Map />
    <v-col
      :class="$vuetify.breakpoint.xs ? 'd-flex flex-wrap' : 'd-flex'"
      style="place-content: center"
      md="12"
    >
      <Chart
        :chartColor="sidebarColor"
        title="Website Views"
        subTitle="Last Campaign Performance"
        desc="updated 10 minutes ago"
        icon=""
        chartType="bar"
      />
      <Chart
        chartColor="green"
        title="Daily Sales"
        subTitle="55%
increase in today's sales"
        desc="updated 4 minutes ago"
        icon="arrow-up"
        chartType="trend"
      />
      <Chart
        chartColor="cyan"
        title="Completed Tasks"
        subTitle="Last Last Campaign Performance"
        desc="campaign sent 26 minutes ago"
        icon=""
        chartType="trend"
      />
    </v-col>
    <v-col class="d-flex flex-wrap" style="place-content: center" md="12">
      <Card
        pIcon="mdi-twitter"
        time="Just Updated"
        tIcon="mdi-clock-time-five"
        title="Followers"
        number="+245"
        pColor="blue"
        class="col-md-5"
      />
      <Card
        pIcon="mdi-poll"
        time="Tracked from Google Analytics"
        tIcon="mdi-ticket-outline"
        title="Website Visits"
        number="75.521"
        :pColor="sidebarColor"
        class="col-md-5"
      />
      <Card
        pIcon="mdi-store"
        time="Last 24 Hours"
        tIcon="mdi-calendar-range"
        title="Revenue"
        number="$ 34,245"
        pColor="green"
        class="col-md-5"
      />
      <Card
        pIcon="mdi-sofa-single"
        time="Get More Space..."
        tIcon="mdi-alert"
        title="Bookings"
        number="184"
        pColor="orange"
        class="col-md-5"
      />
    </v-col>

    <v-col cols="12" class="my-8">
      <span style="font-size: x-large" class="mx-3">{{
        $t("title.manageListing")
      }}</span>
    </v-col>

    <v-col
      :class="
        $vuetify.breakpoint.xs
          ? 'd-flex flex-wrap justify-center'
          : 'd-flex flex-no-wrap justify-center px-6'
      "
      md="12"
    >
      <ContentCard
        title="Cozy 5 Stars Apartment"
        subTitle="The place is close
      to Barceloneta Beach and bus stop just 2 min by walk and near to
      'Naviglio' where you can enjoy the life in Barcelona."
        desc="899/night"
        imgAddress="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg"
        location="Barcelona, Spain"
        class="col-4"
      />
      <ContentCard
        title="Office Studio"
        subTitle="The place is close
      to Barceloneta Beach and bus stop just 2 min by walk and near to
      'Naviglio' where you can enjoy the life in London, UK."
        desc="899/night"
        imgAddress="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg"
        location="London, UK"
        class="col-4"
      />
      <ContentCard
        title="Beautiful Castle"
        subTitle="The place is close
      to Metro Station and bus stop just 2 min by walk and near to 'Naviglio'
      where you can enjoy the main night life in Milan."
        desc="1.119/night"
        imgAddress="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg"
        location=" Milan, Italy"
        class="col-4"
      />
    </v-col>
  </v-row>
</template>

<script>
import Map from "../components/dashboard/map.vue";
import Card from "../components/dashboard/card.vue";
import Chart from "../components/dashboard/chart.vue";
import ContentCard from "../components/dashboard/contentCard.vue";
import FloatMenu from "../components/dashboard/floatMenu.vue";
import { mapGetters } from 'vuex';


export default {
  name: "Dashboard",
  components: {
    Map,
    Card,
    Chart,
    ContentCard,
    FloatMenu
  },
  computed: {
    ...mapGetters({
      sidebarColor: "sidebarColor"
    })
  }
};
</script>
