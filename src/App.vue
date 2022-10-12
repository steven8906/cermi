<template>
  <section>
    <header-layout/>
    <menu-layout />
    <main class="container">
      <router-view/>
    </main>
  </section>
</template>

<style lang="scss">
@import "styles/general";
  body{
    padding : 0;
    margin  : 0;
    overflow-x: hidden;

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
