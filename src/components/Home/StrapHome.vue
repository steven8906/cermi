<template>
  <main>
    <ul class="d-flex w-100 strap list-style-none align-items-center p-0-px">
      <li class="strap__item strap__item-1 w-25 z-index-2">
        <img class="w-90 h-100 d-block margin-auto" src="/img/strap/strap-1.svg" alt=""/>
      </li>
      <li class="strap__item strap__item-2 background-primary w-25 p-20-px z-index-2">
        <p class="text-bold text-white font-size-21 p-right-7-rem">Donativos vía Bizum a CERMI Estatal</p>
        <img src="/img/strap/strap-2.svg" alt=""/>
      </li>
      <li class="strap__item strap__item-3 w-25 z-index-2 text-center">
        <div class="d-flex justify-content-center align-items-center h-100">
          <img class="d-block" src="/img/strap/strap-3.svg" alt=""/>
        </div>
      </li>
      <li class="strap__item strap__item-4 w-25 p-1-rem">
        <section>
          <h2 class="text-primary">Sede electrónica</h2>
          <br/>
          <article class="font-family-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac consectetur erat.</article>
          <br/>
          <br/>
          <br/>
        </section>
        <img src="/img/strap/strap-4.svg" alt=""/>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "StrapHome"
}
</script>

<style scoped lang="scss">

.strap{
  background-color: white;
  .strap__item{
    transition : .1s;
    display    : block;
    height     : 205px;
    &.strap__item-1{
      background-color: #4D96CB;
    }
    &.strap__item-2{
      position : relative;
      overflow : hidden;
      img{
        position : absolute;
        display  : block;
        width    : 100%;
        left     : -3%;
        bottom   : -15%;
      }
    }
    &.strap__item-3{
      background-color: #BB38B6;
    }
    &.strap__item-4{
      background-color: #E8EFF8;
    }
  }
  .strap__item:hover{
    cursor        : pointer;
    scale         : 1.1;
    transition    : .2s;
    border-radius : 15px;
    z-index       : 3;
  }

}
</style>
