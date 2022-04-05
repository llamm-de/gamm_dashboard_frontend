<template>
  <MapContainer :markerlist="markers" />
</template>

<script>
import MapContainer from "../components/MapContainer";
export default {
  name: "Map",
  components: {
    MapContainer,
  },
  computed: {
    markers() {
      const data = this.$store.getters.getData;
      return data.geodata.locations;
    },
  },
};
</script>

<style>
</style>
