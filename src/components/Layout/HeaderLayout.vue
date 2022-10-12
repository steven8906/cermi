<template>
  <header class="header">
    <section class="container header-top d-flex justify-content-between align-items-start p-top-10-px">
      <div class="header-logo">
        <img class="w-17-rem h-8-rem m-left-40-px m-top-20-px" src="/img/logo.svg" alt="">
      </div>
      <div class="d-flex align-items-center w-50">
        <div class="header-search m-right-20-px text-right">
          <div class="input-icon w-50">
            <button class="btn cursor-pointer"><i class="icon icon-search"></i></button>
            <input class="input border-radius-20-px" type="search" placeholder="Buscar..."/>
          </div>
        </div>
        <div class="social-media d-flex align-items-center">
          <span class="text-primary">Síguenos:</span>
          <ul class="social-media--icons p-0 d-flex justify-content-center">
            <li class="m-x-8-px cursor-pointer"><i class="icon icon-facebook h-38-px w-38-px"></i></li>
            <li class="m-x-8-px cursor-pointer"><i class="icon icon-twitter h-38-px w-38-px"></i></li>
            <li class="m-x-8-px cursor-pointer"><i class="icon icon-instagram h-38-px w-38-px"></i></li>
            <li class="m-x-8-px cursor-pointer"><i class="icon icon-linkedin h-38-px w-38-px"></i></li>
            <li class="m-x-8-px cursor-pointer"><i class="icon icon-youtube h-38-px w-38-px"></i></li>
          </ul>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style scoped lang="scss">
@import "@/styles/general.scss";
@import "@/styles/form.scss";
@import "@/styles/icons.scss";
.header {
  font-family: 'Roboto', sans-serif;
  display   : flex;
  flex-wrap : wrap;
  width     : 100vw;

  .header-top{
    width     : 100%;

    .header-logo{
      width : 50%;
    }
    .header-search{
      width : 50%;
    }

    .social-media{

      .social-media--icons{
        list-style-type :none;
        li{
          display    : list-item;
        }
      }
    }
  }
}
</style>
