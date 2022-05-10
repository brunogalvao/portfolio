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

      <div class="col s10 offset-s1 l4 offset-l2">
        <a :href="telefone">
          <span> <i class="phone"></i> (41) 99119 - 2588 </span>
        </a>
      </div>

      <div class="col s10 offset-s1 l4">
        <a :href="email" target="_top">
          <span> <i class="email"></i> e-mail </span>
        </a>
      </div>
    </div>

    <div class="row">
      <!-- rede social -->

      <div class="col s5 offset-s1 l2 offset-l2">
        <a :href="down" target="_blank" download="Curriculum">
          <span class="dow"></span>
        </a>
      </div>

      <div class="col s5 l2">
        <a :href="github" target="_blank">
          <span class="gitHub"></span>
        </a>
      </div>

      <div class="col s5 offset-s1 l2">
        <a :href="twitter" target="_blank">
          <span class="twitter"></span>
        </a>
      </div>

      <div class="col s5 l2">
        <a :href="link" target="_blank">
          <span class="linkeDin"></span>
        </a>
      </div>
      
    </div>
  </div>
</template>
 <script>
 export default {
   data () {
      return {
        tituloAbout: 'Contact',
        
        textoAbout: 'Entrar em contato para maiores informações.',
        
        telefone: 'tel:+5541998582588',
        
        email: 'mailto:bruno_galvao@outlook.com?Subject=Olá%20tudo%20bem',

        twitter: 'https://twitter.com/brunogalvao',

        down: require('@/assets/file/Curriculum.pdf'),

        github: 'https://github.com/brunogalvao',

        link: 'https://www.linkedin.com/in/bruno-galv%C3%A3o-8b9a0772/',
     }
   }
 }
</script>