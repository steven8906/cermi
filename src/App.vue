<template>
  <header-layout/>
  <menu-layout />
  <router-view/>
</template>

<style lang="scss">
  body{
    padding : 0;
    margin  : 0;
  }
</style>
<script>
import HeaderLayout from "@/components/Layout/HeaderLayout";
import MenuLayout from "@/components/Layout/MenuLayout";
export default {
  components: {MenuLayout, HeaderLayout}
}
</script>
