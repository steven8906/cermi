<template>
  <main>
    <carrousel-home />
    <strap-home />
    <present-home />
    <expo-room />
    <br/>
    <br/>
    <br/>
    <links-interest/>
  </main>
</template>

<script>
import CarrouselHome from "@/components/Home/CarrouselHome";
import StrapHome from "@/components/Home/StrapHome";
import PresentHome from "@/components/Home/PresentHome";
import ExpoRoom from "@/components/Home/ExpoRoom";
import LinksInterest from "@/components/Home/LinksInterest";
export default {
  name: "HomeView",
  components: {LinksInterest, ExpoRoom, StrapHome, CarrouselHome, PresentHome}
}
</script>

<style scoped lang="scss">
 @import "../styles/icons";
 @import "../styles/form";
 @import "../styles/general";
</style>
