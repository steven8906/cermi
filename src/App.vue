<template>
  <section>
    <header-layout/>
    <menu-layout />
    <main>
      <router-view/>
    </main>
  </section>
  <sponsors-layout/>
</template>

<style lang="scss">
@import "styles/general";
  body{
    padding    : 0;
    margin     : 0;
    overflow-x : hidden;
}
</style>
<script>
import HeaderLayout from "@/components/Layout/HeaderLayout";
import MenuLayout from "@/components/Layout/MenuLayout";
import SponsorsLayout from "@/components/Layout/SponsorsLayout";
export default {
  components: {SponsorsLayout, MenuLayout, HeaderLayout}
}
</script>
