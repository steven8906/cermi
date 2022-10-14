<template>
<main class="container">
  <hero-global></hero-global>
  <section class="w-100 d-block text-center">
    <p class="text-bold-21-frank-ruhl text-primary w-48-rem">La transparencia hacia todos sus grupos de interés y el buen gobierno de la organización son compromisos que el CERMI ha adquirido con convicción y que pretende hacer efectivos en todos sus órdenes de actividad.</p>
  </section>
  <br/>
  <br/>
  <div class="d-flex align-items-center">
    <div class="w-60 p-x-6-rem">
      <section>
        <p class="font-family-roboto font-size-16 font-light">En ejecución de los mandatos en esta materia contenidos en las normas reguladoras propias de la Entidad (Estatutos sociales, Reglamento de Régimen Interior, Código Ético y Código de Buen Gobierno), así como de los derivados de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, aplicable en parte de sus extremos en tanto el CERMI es entidad receptora de fondos públicos (por medio de subvenciones y otro tipo de ayudas), se ofrece ampliamente, a través de la página de Internet corporativa (www.cermi.es), la integralidad de los aspectos relevantes en cuestiones de transparencia y buen gobierno, para que todas las instancias con interés legítimo puedan acceder con agilidad y sencillez a este información.</p>
      </section>
    </div>
    <div class="w-40">
      <img class="d-block w-100" src="/img/clarity/clarity-2.png" alt=""/>
    </div>
  </div>
  <div class="p-x-2">
    <h2 class="title-grand p-0 m-0">Información</h2>
  </div>
  <div class="w-100 d-block background-blue-3 p-3-rem">
    <div class="text-center">
      <p class="font-family-roboto font-size-16 font-light w-50">Así, en el canal CERMI (http://www.cermi.es) de esta página de Internet, puede hallarse información y documentación completas sobre:</p>
    </div>
    <br/>
    <br/>
    <div class="background-white p-2-rem shadow">
      <p class="text-bold font-size-21">Información institucional, organizativa y de planificación (Art. 6 Ley 19/2013 de 9 de diciembre)</p>
      <br/>
      <div class="d-flex">
        <ul class="list-style-none m-right-2-rem">
          <li class="font-size-21 text-primary text-light text-underline">Carácter del CERMI/ Plataforma unitaria de la discapacidad</li>
          <li class="font-size-21 text-primary text-light">Misión y Objetivos del CERMI</li>
          <li class="font-size-21 text-primary font-light">Ámbitos de actuación</li>
          <li class="font-size-21 text-primary font-light">Organizaciones del CERMI Estatal</li>
          <li class="font-size-21 text-primary font-light">Organizaciones a las que el CERMI pertenece</li>
          <li class="font-size-21 text-primary font-light">CERMIS Autonómicos</li>
        </ul>
        <ul class="list-style-none">
          <li class="font-size-21 text-primary text-light">Órganos de gobierno, cargos sociales y equipo humano</li>
          <li class="font-size-21 text-primary font-light">Organigrama</li>
          <li class="font-size-21 text-primary font-light">Normas reguladoras del CERMI</li>
          <li class="font-size-21 text-primary font-light">Planes de Actuación Anuales</li>
          <li class="font-size-21 text-primary font-light">Memorias anuale</li>
        </ul>
      </div>
    </div>
    <div class="background-white p-2-rem shadow m-top-2-rem">
      <p class="text-bold font-size-21">Información económica, presupuestaria y estadística (Art 8 Ley 19/2013 de 9 de diciembre)</p>
      <br/>
      <div class="d-flex">
        <ul class="list-style-none m-right-2-rem">
          <li class="font-size-21 text-primary text-light">Subvenciones y ayudas públicas</li>
          <li class="font-size-21 text-primary text-light">Convenios y acuerdos institucionales</li>
          <li class="font-size-21 text-primary font-light">Colaboraciones económicas privadas</li>
        </ul>
      </div>
    </div>
    <div class="background-white p-2-rem shadow m-top-2-rem">
      <p class="text-bold font-size-21">Retribuciones. Art.12.6 Estatutos. La pertenencia al Comité Ejecutivo no comporta retribución alguna.</p>
      <br/>
      <div class="d-flex">
        <ul class="list-style-none m-right-2-rem">
          <li class="font-size-21 text-primary text-light">Cuentas y Presupuestos Anuales del CERMI</li>
        </ul>
      </div>
    </div>
    <div class="background-white p-2-rem shadow m-top-2-rem">
      <p class="text-bold font-size-21">Calidad de información (Art 5.4 y Art 5.5 Ley 19/2013 de 9 de diciembre)</p>
      <br/>
      <div class="d-flex">
        <ul class="list-style-none m-right-2-rem">
          <li class="font-size-21 text-primary text-light">Accesibilidad</li>
        </ul>
      </div>
    </div>
    <br/>
    <div class="p-1-rem">
      <p>En cuanto a posiciones en redes sociales, en este enlace: https://www.CERMI.es/es/actualidad/redessociales , se hallan los datos identificativos de las cuentas del CERMI.<br/><br/>
        Para mejorar el grado de transparencia corporativa, y recibir peticiones, sugerencias, propuestas y recomendaciones a este fin, el CERMI ha habilitado la siguiente cuenta de correo transparencia@CERMI.es , a la que pueden dirigirse todas las personas visitantes de la página que tengan aportaciones que efectuar en esta esfera.</p>
    </div>
  </div>
  <div class="p-2-rem">
    <other-links-interest class="shadow p-y-2-rem" />
  </div>
  <br/>
  <br/>
  <br/>
</main>
</template>

<script>
import HeroGlobal from "@/components/Global/HeroGlobal";
import OtherLinksInterest from "@/components/Layout/OtherLinksInterest";
export default {
  name: "ClarityView",
  components: {OtherLinksInterest, HeroGlobal}
}
</script>

<style scoped lang="scss">
@import "../styles/icons";
@import "../styles/general";
</style>
