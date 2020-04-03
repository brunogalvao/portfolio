<template>
  <div class="about">
    <div class="row">
      <div class="col s10 offset-s1 l10 offset-l1">
        <h1> <i></i> {{ tituloAbout }}</h1>
      </div>
      <div class="col s12 ">
        <div class="col s5 offset-s1 divider"></div>
      </div>

      <div class="col s10 offset-s1 l10 offset-l1">
        <p>{{ textoAbout }}</p>
      </div>
    </div>
  </div>
</template>
 <script>
 export default {
   data () {
     return {
       tituloAbout: 'Contato',
       textoAbout: 'Página em Construção'
     }
   }
 }
 </script>