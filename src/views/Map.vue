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

  data() {
    return {
      data: this.$store.state.data,
      markers: [
        {
          id: 1,
          longlat: [50.775555, 6.083611],
          name: "Aachen",
          participants: 4,
        },
      ],
    };
  },
};
</script>

<style>
</style>
