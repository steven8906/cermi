<template>
  <main>
    <carrousel-home />
    <strap-home />
    <present-home />
    <expo-room />
  </main>
</template>

<script>
import CarrouselHome from "@/components/Home/CarrouselHome";
import StrapHome from "@/components/Home/StrapHome";
import PresentHome from "@/components/Home/PresentHome";
import ExpoRoom from "@/components/Home/ExpoRoom";
export default {
  name: "HomeView",
  components: {ExpoRoom, StrapHome, CarrouselHome, PresentHome}
}
</script>

<style scoped>

</style>
