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
              <a href="https://twitter.com/brunogalvao" target="_blank">
                <span class="twitter"></span>
              </a>
              <a href="https://www.linkedin.com/in/bruno-galv%C3%A3o-8b9a0772/" target="_blank">
                <span class="linkeDin"></span>
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

      textoApresentacao: 'Design e desenvolvedor apaixonado por novas tecnologias e formas de maximizar resultados efetivos em um projeto. Procurando desenvolver maneiras mais eficientes em comunicação com o usuário utilizando técnicas de UX/UI. Sou ainda projetista e estudante apaixonado da engenharia civil, futuramente se converterá em profissão, nas horas de distração gosto de música, passear e ficar em contato com a natureza, exercícios físicos são excelentes para aguçar a criatividade e renovar as energias do dia de trabalho.',

      // twitter: require('https://twitter.com/brunogalvao'),
    }
  }
}
</script>