<template>
<main class="position-relative d-block">
  <section class="p-y-2-rem p-x-3-rem">
    <div class="p-y-1-rem p-x-2-rem section__links-interest h-43-rem ">
      <h2 class="font-family-frank-ruhl text-primary-light opacity-50 text-bold font-size-8-rem w-100">Enlaces de interés</h2>
      <h2 class="font-family-frank-ruhl text-bold text-primary font-size-24">Otros enlaces de interés</h2>
      <span class="dot__line m-left-16"></span>
      <div class="d-flex justify-content-between w-80 m-top-22-rem">
        <ul class="list-style-none">
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Condecoraciones y premios</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Colaborción Asociativa</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Servicio Asistencia PMR</a></li>
        </ul>
        <ul class="list-style-none">
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">CERMIs Autonómicos</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Maternidad informada</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">#SOSDiscapacidad</a></li>
        </ul>
        <ul class="list-style-none">
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Nuestro Himno</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Nuestro Vídeo Corporativo</a></li>
          <li><a class="text-decoration-none font-family-frank-ruhl text-light text-primary font-size-21" href="#">Memorias Anuales</a></li>
        </ul>
      </div>
      <br/>
    </div>
  </section>
  <section class="font-family-frank-ruhl text-white w-100 d-block position-absolute top-20">
    <div class="d-flex justify-content-between w-100">
      <ul class="strap list-style-none d-flex justify-content-between w-100">
        <li class="strap__item w-25 background-primary-light">
          <div class="d-flex-column w-100 h-22-rem">
            <div class="h-50 p-1-rem text-bold font-family-frank-ruhl font-size-21">
              <p>Servicio de Videointerpretación en lengua de signos</p>
            </div>
            <div class="h-48 w-100 p-1-rem background-white p-top-10">
              <img class="w-100 d-block" src="/img/img_6.png" alt="">
            </div>
          </div>
        </li>
        <li class="strap__item w-25 background-primary">
          <div class="d-flex-column w-100 h-22-rem">
            <div class="h-50 p-1-rem text-bold font-family-frank-ruhl font-size-21">
              <p>Convención Internacional sobre los Derechos de las Personas con Discapacidad</p>
            </div>
            <div class="h-50 w-100">
              <img class="w-100 h-100 d-block" src="/img/img_7.png" alt="">
            </div>
          </div>
        </li>
        <li class="strap__item w-25 background-primary-light">
          <div class="d-flex-column w-100 h-22-rem">
            <div class="h-50 p-1-rem text-bold font-family-frank-ruhl font-size-21">
              <p>Con R Foro de la contratación Socialmente Responsable</p>
            </div>
            <div class="h-48 w-100 p-1-rem background-white p-top-10">
              <img class="w-60 d-block margin-auto" src="/img/img_8.png" alt="">
            </div>
          </div>
        </li>
        <li class="strap__item w-25 background-primary">
          <div class="d-flex-column w-100 h-22-rem">
            <div class="h-50 p-1-rem text-bold font-family-frank-ruhl font-size-21">
              <p>Instituto de las mujeres</p>
            </div>
            <div class="h-48 w-100 p-1-rem background-white p-top-10 posd">
              <img class="w-6-rem h-99-px d-block margin-auto" src="/img/img_9.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
</main>
</template>





<script>
export default {
  name: "LinksInterest",
}
</script>

<style scoped lang="scss">
  .section__links-interest{
    background: #FFFFFF;
    box-shadow: 0 4px 30px rgba(0, 105, 180, 0.3);
    border-radius: 20px;
  }
  .strap{
    .strap__item{
    transition : .1s;
    display    : block;

      &:hover{
        cursor        : pointer;
        scale         : 1.1;
        transition    : .2s;
        border-radius : 15px;
        z-index       : 3;
      }
    }
  }
</style>

