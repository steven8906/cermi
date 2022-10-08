<template>
  <nav>
    <div class="p-right-12-rem">
      <ul class="menu-list d-block text-right">
        <li class="menu-item menu-item__active m-x-35-px font-size-21"><a class="menu-item--link" href="#">Inicio</a></li>
        <li class="menu-item m-x-35-px font-size-21"><a class="menu-item--link" href="#">CERMI</a></li>
        <li class="menu-item m-x-35-px font-size-21"><a class="menu-item--link" href="#">Actualidad</a></li>
        <li class="menu-item m-x-35-px font-size-21"><a class="menu-item--link" href="#">Defensa Legal</a></li>
        <li class="menu-item m-x-35-px font-size-21"><a class="menu-item--link" href="#">Colecciones</a></li>
        <li class="menu-item m-x-35-px font-size-21"><a class="menu-item--link" href="#">Transparencia</a></li>
      </ul>
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
        font-weight: bold;
      }

      .menu-item{
        display    : inline-block;
        list-style : none;

        .menu-item--link{
          color           : $colorItemMenu;
          text-decoration : none;
        }
      }
    }
  }
</style>
