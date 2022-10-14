<template>
  <main class="position-relative">
    <div class="d-block w-100 container-carrousel p-y-2-rem">
      <div class="background-carrousel d-flex w-100 p-72-px">
        <section class="w-44">
          <div class="position-relative p-y-10-px">
            <h2 class="text-primary font-size-40">El Valor de la Unidad</h2>
            <span class="underline w-100 m-left-5-rem"></span>
          </div>
          <br/>
          <br/>
          <br/>
          <article class="font-size-32 text-bold">4.32 millones de personas con discapacidad, más de 8.000 asociaciones luchando por sus derechos</article>
        </section>
        <section class="w-56 text-center">
          <br/>
          <br/>
          <br/>
          <img class="img-carrousel" src="/img/carrousel/carrousel-1.svg" alt="">
        </section>
      </div>
    </div>
    <section class="help-section background-orange position-absolute right-0 top-12">
      <button type="button" class="btn p-left-30-px p-10-px text-center text-white cursor-pointer w-100">
        <img src="/icons/carrousel-help.svg" alt="">
        <br>
        <span class="text-bold">¿Te ayudamos?</span>
      </button>
    </section>
  </main>
</template>

<script>
export default {
  name: "CarrouselHome"
}
</script>

<style scoped lang="scss">

  .container-carrousel{
    height: 468px;

    .background-carrousel{
      background: url("/public/img/carrousel/background-img.svg");
    }
    .img-carrousel{
      width: 560px;
    }
  }

  .help-section{
    font-family: 'Roboto',serif;
    border-radius: 20px 0 0 20px;
  }
</style>
