<template>
  <header-layout/>
  <menu-layout />
  <main class="background-orange">
    <h1>HOLAA</h1>
    <router-view/>
  </main>
</template>

<style lang="scss">
@import "styles/general";
  body{
    padding : 0;
    margin  : 0;

    main{
      position: relative;
    }

  }
</style>
<script>
import HeaderLayout from "@/components/Layout/HeaderLayout";
import MenuLayout from "@/components/Layout/MenuLayout";
export default {
  components: {MenuLayout, HeaderLayout}
}
</script>
