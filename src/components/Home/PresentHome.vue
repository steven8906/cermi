<template>
<main class="p-y-2-rem">
  <section class="position-relative section__title d-block">
    <h1 class="text-primary-light opacity-50 text-bold font-size-8-rem w-100">Actualidad</h1>
    <p class="text-bold font-size-30 position-absolute top-40 right-52">Actualidad</p>
  </section>
  <div class="d-flex-column">
    <div class="d-flex">
      <card-new :img="data.img" v-for="(data, index) in dataNews" :key="index"
                width="33"
                :schedule="data.schedule"
                :title="data.title ?? '&nbsp;'"
                :date="data.date"
                :event-name="data.nameEvent"
                :location="data.location"
                author="Autor">
        <template v-slot:subtitle>
        <span>
          Generar alianzas naturales facilita la innovación social en el mundo rural entre personas con discapacidad
        </span>
        </template>
        <template v-slot:body>
        <span>
          El acto de clausura del congreso ha contado con una ponencia final sobre “Innovación social y medio rural” impartida por el secretario General del CERMI Estatal, Alberto Durán López
        </span>
        </template>
      </card-new>
    </div>
    <div class="d-flex justify-content-center align-items-center m-top-2-rem">
      <div class="w-66 text-center">
        <button class="btn btn-blue outline">Más noticias</button>
      </div>
      <div class="w-33 text-center">
        <button class="btn btn-blue outline">Ver agenda</button>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="d-flex justify-content-center align-items-start">
    <card-new :img="data.img" v-for="(data, index) in dataCongress" :key="index"
              width="33"
              :schedule="data.schedule"
              :title="data.title ?? '&nbsp;'"
              :date="data.date">
      <template v-slot:subtitle>
        <span>
          Generar alianzas naturales facilita la innovación social en el mundo rural entre personas con discapacidad
        </span>
      </template>
    </card-new>
    <div class="w-33">
      <card-publication class="m-top-1-rem" v-for="(data, index) in dataPublications" :key="index"
          :title="data.title"
          :subtitle="data.subtitle"
          :img="data.img">
        <template v-slot:body>
          <p class="font-light font-size-18 text-primary font-family-roboto">{{data.date}}</p>
        </template>
      </card-publication>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="w-66 text-center">
      <button class="btn btn-blue outline">Más vídeos</button>
    </div>
    <div class="w-33 text-center">
      <button class="btn btn-blue outline">Ver más</button>
    </div>
  </div>
</main>
</template>

<script>
import moment from "moment";
import CardNew from "@/components/Card/CardNew";
import CardPublication from "@/components/Card/CardPublication";
moment.locale('es')

export default {
  name: "PresentHome",
  components: {CardPublication, CardNew},
  data:()=>({
    day      :moment() .format("DD"),
    month    : moment().format("MMMM"),
    dataNews: [
      {img: "/img/img_1.png", title: "Noticias", date: "21 febrero 2022", nameEvent:"Sostenibilidad", location:"Madrid", schedule:false},
      {img: "/img/img_1.png", date: "21 febrero 2022", nameEvent:"Sostenibilidad", location:"Madrid", schedule:false},
      {img: "/img/img_2.png", title: "Agenda", date: "21 febrero 2022", nameEvent:"Sostenibilidad", location:"Madrid", schedule:true}
    ],
    dataCongress: [
      {img: "/img/img_3.png", title: "Noticias", date: "21 febrero 2022", schedule:false},
      {img: "/img/img_3.png", title: "Noticias", date: "21 febrero 2022", schedule:false},
    ],
    dataPublications: [
      {img: "/img/img_4.png", title: 'Publicaciones', subtitle: "Más de 100 preguntas acerca de la discapacidad. Guía jurídica básica.", date: "21 febrero 2022"},
      {img: "/img/img_4.png", title: '', subtitle: "Más de 100 preguntas acerca de la discapacidad. Guía jurídica básica.", date: "21 febrero 2022"},
    ],
  })
}
</script>

<style scoped lang="scss">
@import "../../styles/general";
@import "../../styles/icons";
</style>
