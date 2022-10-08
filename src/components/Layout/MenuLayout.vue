<template>
  <nav>
    <div class="p-right-12-rem">
      <ul class="menu-list d-block text-right">
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link d-block p-bottom-1-rem" href="#">Inicio</a></li>
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link menu-item__active d-block p-bottom-1-rem" href="#">CERMI</a></li>
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link d-block p-bottom-1-rem" href="#">Actualidad</a></li>
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link d-block p-bottom-1-rem" href="#">Defensa Legal</a></li>
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link d-block p-bottom-1-rem" href="#">Colecciones</a></li>
        <li class="menu-item m-x-35-px font-size-21 p-0-px"><a class="menu-item--link d-block p-bottom-1-rem" href="#">Transparencia</a></li>
      </ul>
    </div>
    <div class="menu-content w-100-vw background-primary p-y-2-rem p-x-4-rem">
      <p>AJAAAA</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuLayout"
}
</script>

<style scoped lang="scss">
@import "../../styles/general";
  $colorItemMenu : #0069B4;

  nav{
    font-family: 'Frank Ruhl Libre', serif;
    .menu-list{

      .menu-item__active{
        font-weight   : bold;
      }

      .menu-item{
        display    : inline-block;
        list-style : none;

        .menu-item--link{
          color           : $colorItemMenu;
          text-decoration : none;
          border-bottom   : 2px solid transparent;
          transition      : 0.1s;
        }

        .menu-item--link:not(.menu-item__active):hover{
          color           : $colorItemMenu;
          text-decoration : none;
          border-bottom   : 2px solid $colorItemMenu;
          transition      : 0.4s;
        }
      }
    }

    .menu-content{
      border-top: 2px solid $blue;
    }
  }
</style>
