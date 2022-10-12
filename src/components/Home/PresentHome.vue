<template>
<main class="p-y-2-rem">
  <section class="position-relative section__title d-block">
    <h1 class="text-primary-light opacity-50 text-bold font-size-8-rem w-100">Actualidad</h1>
    <p class="text-bold font-size-30 position-absolute top-40 right-52">Actualidad</p>
  </section>
  <div class="d-flex">
    <div class="w-33 p-1-rem">
      <section>
        <h4 class="text-bold text-primary font-size-24">Noticias</h4>
        <br/>
        <img class="w-100" src="/img/img.png" alt=""/>
        <article class="font-size-24 text-bold m-top-1-rem">
          Generar alianzas naturales facilita la innovación social en el mundo rural entre personas con discapacidad
        </article>
      </section>
      <p class="m-top-1-rem font-light font-size-18 text-primary font-family-roboto">21 febrero 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-bold text-primary">Autor</span></p>
      <div class="w-100 d-block">
        <div class="d-flex justify-content-between w-50 font-family-roboto m-top-6">
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-tag h-24-px w-24-px"></i>
            <span class="text-orange">Sostenibilidad</span>
          </div>
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-location h-24-px w-24-px"></i>
            <span class="text-bold text-primary">Madrid</span>
          </div>
        </div>
      </div>
      <section class="m-top-5 font-family-roboto text-light-global font-size-16">
        <article>
          El acto de clausura del congreso ha contado con una ponencia final sobre “Innovación social y medio rural” impartida por el secretario General del CERMI Estatal, Alberto Durán López
        </article>
      </section>
    </div>
    <div class="w-33 p-1-rem">
      <section>
        <h4 class="text-bold text-primary font-size-24">&nbsp;</h4>
        <br/>
        <img class="w-100" src="/img/img.png" alt=""/>
        <article class="font-size-24 text-bold m-top-1-rem">
          Generar alianzas naturales facilita la innovación social en el mundo rural entre personas con discapacidad
        </article>
      </section>
      <p class="m-top-1-rem font-light font-size-18 text-primary font-family-roboto">21 febrero 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-bold text-primary">Autor</span></p>
      <div class="w-100 d-block">
        <div class="d-flex justify-content-between w-50 font-family-roboto m-top-6">
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-tag h-24-px w-24-px"></i>
            <span class="text-orange">Sostenibilidad</span>
          </div>
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-location h-24-px w-24-px"></i>
            <span class="text-bold text-primary">Madrid</span>
          </div>
        </div>
      </div>
      <section class="m-top-5 font-family-roboto text-light-global font-size-16">
        <article>
          El acto de clausura del congreso ha contado con una ponencia final sobre “Innovación social y medio rural” impartida por el secretario General del CERMI Estatal, Alberto Durán López
        </article>
      </section>
    </div>
    <div class="w-33 p-1-rem">
      <h4 class="text-bold text-primary font-size-24">Agenda</h4>
      <br/>
      <div class="position-relative">
        <img class="w-100 d-block position-relative" src="/img/img_1.png" alt=""/>
        <div class="position-absolute border-radius-10-px w-8-rem h-8-rem background-red d-block top-0">
          <div class="d-flex-column justify-content-center align-items-center h-100">
            <span class="text-white text-bold font-size-72">{{day}}</span>
            <span class="text-white text-bold font-size-21">{{month}}</span>
          </div>
        </div>
      </div>
      <section>
        <article class="font-size-24 text-bold m-top-1-rem">
          Generar alianzas naturales facilita la innovación social en el mundo rural entre personas con discapacidad
        </article>
      </section>
      <p class="m-top-1-rem font-light font-size-18 text-primary font-family-roboto">21 febrero 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-bold text-primary">Autor</span></p>
      <div class="w-100 d-block">
        <div class="d-flex justify-content-between w-50 font-family-roboto m-top-6">
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-tag h-24-px w-24-px"></i>
            <span class="text-orange">Sostenibilidad</span>
          </div>
          <div class="d-flex text-bold align-items-center">
            <i class="icon icon-location h-24-px w-24-px"></i>
            <span class="text-bold text-primary">Madrid</span>
          </div>
        </div>
      </div>
      <section class="m-top-5 font-family-roboto text-light-global font-size-16">
        <article>
          El acto de clausura del congreso ha contado con una ponencia final sobre “Innovación social y medio rural” impartida por el secretario General del CERMI Estatal, Alberto Durán López
        </article>
      </section>
    </div>
  </div>
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
import moment from "moment";
moment.locale('es')

export default {
  name: "PresentHome",
  data:()=>({
    day   :moment() .format("DD"),
    month : moment().format("MMMM")
  })
}
</script>

<style scoped lang="scss">
@import "../../styles/general";
@import "../../styles/icons";
</style>
