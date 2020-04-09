<template>
  <div class="">
    <div class="row home">
      <div class="col s10 offset-s1">
        <div class="col s12 l12">
          <h1> bem vindo </h1>
        </div>

        <div class="col s12 l12">
          <div class="col s6 divider"></div>
        </div>

        <div class="col s12 l12">
          <p>{{ textoApresentacao }}</p>
        </div>

        <div class="col s12">
          <div class="row options">
            <div class="col s12 m4 skillOption">
              <router-link to="/skill">
                <span> <i></i> skill</span>
              </router-link>
            </div>

            <div class="col s12 m4 projectOption">
              <router-link to="/project">
                <span> <i></i> project</span>
              </router-link>
            </div>

            <div class="col s12 m4 aboutOption">
              <router-link to="/about">
                <span> <i></i> contact </span>
              </router-link>
            </div>

            <div class="col s12 m3 skillRedesocial">
              <a :href="twitter" target="_blank">
                <span class="twitter"></span>
              </a>
              <a :href="link" target="_blank">
                <span class="linkeDin"></span>
              </a>
              <a :href="down" download="Curriculum">
                <span class="dow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
 data ( ) {
    return {
      msg: 'aquis será um pequeno texto...',
      
      skill: 'Aqui será o content do Skill',

      textoApresentacao: 'Sou designer e desenvolvedor, atraído por novas tecnologias e formas de maximizar resultados efetivos em um projeto. Procuro desenvolver maneiras mais eficientes em comunicação com o usuário utilizando técnicas de UX/UI. Quer saber mais sobre as minhas habilidades e alguns dos últimos projetos desenvolvidos? Acesse a seguir:',

      twitter: 'https://twitter.com/brunogalvao',

      down: require('@/assets/file/CurriculumR.pdf'),

      link: 'https://www.linkedin.com/in/bruno-galv%C3%A3o-8b9a0772/',

    }
  },
}
</script>