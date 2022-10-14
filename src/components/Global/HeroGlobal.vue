<template>
<main>
  <div class="w-100 h-20-rem d-block">
    <div class="d-flex h-100 justify-content-between align-items-center">
      <div class="w-60 h-70 p-x-6-rem position-relative">
        <h1 class="font-family-frank-ruhl text-center text-primary-light opacity-50 text-bold font-size-6-rem w-100">Transparencia</h1>
        <p class="text-bold font-size-30 position-absolute bottom-48 left-12">Transparencia</p>
        <p class="font-family-roboto text-primary font-size-16">INICIO - Transparencia</p>
      </div>
      <div class="w-40">
        <img class="d-block margin-auto" src="/img/clarity/clarity-1.svg" alt="" />
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "HeroGlobal"
}
</script>

<style scoped lang="scss">
  main{
    background-image  : url(/public/img/hero/hero.svg);
    background-repeat : no-repeat;
  }
</style>
