<template>
  <v-row no-gutters justify="center">
    <Map />
    <Card
      pIcon="mdi-twitter"
      time="Just Updated"
      tIcon="mdi-clock-time-five"
      title="Followers"
      number="+245"
      pColor="blue"
    />
    <Card
      pIcon="mdi-poll"
      time="Tracked from Google Analytics"
      tIcon="mdi-ticket-outline"
      title="Website Visits"
      number="75.521"
      pColor="pink"
    />
    <Card
      pIcon="mdi-store"
      time="Last 24 Hours"
      tIcon="mdi-calendar-range"
      title="Revenue"
      number="$ 34,245"
      pColor="green"
    />
    <Card
      pIcon="mdi-sofa-single"
      time="Get More Space..."
      tIcon="mdi-alert"
      title="Bookings"
      number="184"
      pColor="orange"
    />
  </v-row>
</template>

<script>
import Map from "../components/dashboard/map.vue";
import Card from "../components/dashboard/card.vue";
export default {
  name: "Dashboard",
  components: {
    Map,
    Card,
  },
};
</script>
