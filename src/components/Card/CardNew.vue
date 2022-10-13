<template>
  <div :class="`w-${width} p-1-rem`">
    <div v-if="!schedule">
      <section>
        <h4 class="text-bold text-primary font-size-24">{{title}}</h4>
        <br/>
        <img class="w-100" :src="img" alt=""/>
        <article class="font-size-24 text-bold m-top-1-rem">
          <slot name="subtitle"></slot>
        </article>
      </section>
    </div>
    <div v-else>
      <h4 class="text-bold text-primary font-size-24">{{title}}</h4>
      <br/>
      <div class="position-relative">
        <img class="w-100 d-block position-relative" src="/img/img_2.png" alt=""/>
        <div class="position-absolute border-radius-10-px w-8-rem h-8-rem background-red d-block top-0">
          <div class="d-flex-column justify-content-center align-items-center h-100">
            <span class="text-white text-bold font-size-72">{{day}}</span>
            <span class="text-white text-bold font-size-21">{{month}}</span>
          </div>
        </div>
      </div>
      <section>
        <article class="font-size-24 text-bold m-top-1-rem">
          <slot name="subtitle"></slot>
        </article>
      </section>
    </div>
    <p class="m-top-1-rem font-light font-size-18 text-primary font-family-roboto">{{date}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-bold text-primary">{{author}}</span></p>
    <div class="w-100 d-block">
      <div class="d-flex justify-content-between w-50 font-family-roboto m-top-6">
        <div class="d-flex text-bold align-items-center" v-if="eventName !== undefined">
          <i class="icon icon-tag h-24-px w-24-px"></i>
          <span class="text-orange">{{eventName}}</span>
        </div>
        <div class="d-flex text-bold align-items-center" v-if="eventName !== undefined">
          <i class="icon icon-location h-24-px w-24-px"></i>
          <span class="text-bold text-primary">{{location}}</span>
        </div>
      </div>
    </div>
    <section class="m-top-5 font-family-roboto text-light-global font-size-16">
      <article>
        <slot name="body"></slot>
      </article>
    </section>
  </div>
</template>

<script>
import moment from "moment";
moment.locale('es')
export default {
  name  : "CardNew",
  props :['title', 'img', 'schedule', 'width', 'date', 'author', 'eventName', 'location'],
  data:()=>({
    day   :moment() .format("DD"),
    month : moment().format("MMMM")
  })
}
</script>

<style scoped lang="scss">
@import "../../styles/icons";

</style>
