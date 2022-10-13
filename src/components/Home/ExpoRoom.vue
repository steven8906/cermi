<template>
  <main>
    <div class="p-y-2-rem p-x-3-rem background-blue-3">
      <section class="font-family-frank-ruhl position-relative section__title d-block">
        <h1 class="font-family-frank-ruhl text-primary-light opacity-50 text-bold font-size-8-rem w-100">Sala de exposiciones</h1>
        <p class="text-bold font-size-30 position-absolute bottom-15 left-1 text-primary">Sala de exposiciones</p>
      </section>
      <div class="d-flex justify-content-around m-top-1-rem">
        <div class="w-40">
          <img class="w-100" src="/img/img-5.png" alt="" />
        </div>
        <div class="w-60 p-1-rem">
          <h3 class="font-family-frank-ruhl text-bold font-size-24 w-80">EXPOSICIÓN FOTOGRÁFICA “EL IMPACTO DE LA PANDEMIA EN MUJERES MAYORES CON DISCAPACIDAD”</h3>
          <div class="d-flex-column">
            <section class="font-family-roboto text-primary font-light text-left">
              <br/>
              <p>
                <i class="icon icon-calendar w-16-px h-16-px vertical-align-middle"></i>
                &nbsp;
                <span class="d-inline-block vertical-align-middle">Desde el 26/11/2021 hasta el 09/05/2022</span>
              </p>
              <p>
                <i class="icon icon-clock w-16-px h-16-px vertical-align-middle"></i>
                &nbsp;
                <span class="d-inline-block vertical-align-middle">Lunes, martes, miércoles y jueves: de 8:00 a 15:30 horas Viernes: oficina cerrada</span>
              </p>
              <p>
                <i class="icon icon-location w-16-px h-16-px vertical-align-middle"></i>
                &nbsp;
                <span class="d-inline-block vertical-align-middle">C/Recoletos, 1 bajo 28001 Madrid.</span>
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="text-center">
        <br/>
        <br/>
        <button class="btn btn-blue outline background-blue-3 color-primary">Ver más</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ExpoRoom"
}
</script>

<style scoped lang="scss">
@import "../../styles/icons";
</style>
