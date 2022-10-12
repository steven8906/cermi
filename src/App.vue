<template>
  <section class="content-main">
    <header-layout/>
    <menu-layout />
    <main class="background-orange">
      <router-view/>
    </main>
  </section>
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


@media screen and (max-width:1920px) {
  .content-main{
    padding: 0;
  }
}

@media screen and (min-width:1921px) {
  .content-main{
    padding: 0 5rem;
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
