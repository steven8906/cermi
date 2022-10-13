<template>
  <main>
    <h2 class="text-primary text-bold font-size-24">{{ title }}</h2>
    <div class="d-flex m-top-1-rem">
      <img class="w-26" :src="img" alt=""/>
      <section class="w-74 p-x-1-rem">
        <h2>{{subtitle}}</h2>
        <br/>
        <slot name="body"></slot>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "CardPublication",
  props:['title', 'subtitle', 'img']
}
</script>

<style scoped lang="scss">
@import "../../styles/general";

</style>
