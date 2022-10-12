<template>
  <main>
    <carrousel-home />
    <strap-home />
    <present-home />
  </main>
</template>

<script>
import CarrouselHome from "@/components/Home/CarrouselHome";
import StrapHome from "@/components/Home/StrapHome";
import PresentHome from "@/components/Home/PresentHome";
export default {
  name: "HomeView",
  components: {StrapHome, CarrouselHome, PresentHome}
}
</script>

<style scoped>

</style>
