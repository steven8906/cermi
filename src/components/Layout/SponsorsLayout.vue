<template>
  <main class="container">
    <div class="w-100 d-block">
      <div class="d-flex-column h-100">
        <h2 class="title-grand-primary text-center">Patrocinadores</h2>
        <br/>
        <br/>
        <div class="background-blue-4 w-100 d-block p-bottom-4-rem">
          <div class="w-80 margin-auto d-block p-3-rem background-white border-radius-20-px">
            <img class="d-block margin-auto w-100" src="/img/layout/sponsors-2.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "SponsorsLayout"
}
</script>


<style scoped lang="scss">
main {
  background-image: url(/public/img/layout/sponsors.svg);
  background-repeat: no-repeat;
}
</style>
