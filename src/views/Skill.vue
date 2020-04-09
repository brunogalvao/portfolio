<template>
    <div class="skill">
      <div class="row">
        <span class="col s12"></span>
        <div class="col s10 offset-s1">
          <h1> <i></i> {{ tituloSkill }}</h1>
        </div>

        <div class="col s12 ">
          <div class="col s5 offset-s1 divider"></div>
        </div>

        <div class="col s10 offset-s1 l10 offset-l1">
          <h4> <span class="material-icons">double_arrow</span> web </h4>
        </div>

        <div class="col s10 offset-s1 l8 offset-l2">
          <ul>
            <li v-for="lings in ling" :key="lings" class="skillLista">
              <b>{{ lings.lang }}</b>
              <progress-bar 
              size="1" 
              bar-color="#FFA700" 
              :val="lings.valor" 
              :text="lings.valor + '%'"
              text-align="right" 
              text-position="top"
              ></progress-bar>
            </li>
          </ul>
        </div>

        <div class="col s10 offset-s1 l10 offset-l1">
          <h4> <span class="material-icons">double_arrow</span> edição e criação </h4>
        </div>

        <div class="col s10 offset-s1 l8 offset-l2">
          <ul>
            <li v-for="edits in edi" :key="edits" class="skillLista">
              <b>{{ edits.soft }}</b>
              <progress-bar 
              size="1" 
              bar-color="#FFA700" 
              :val="edits.valor" 
              :text="edits.valor + '%'"
              text-align="right" 
              text-position="top"
              ></progress-bar>
            </li>
          </ul>
        </div>

        <div class="skillListaAcademico">
          <div class="col s10 offset-s1 l10 offset-l1">
            <h4> <span class="material-icons">double_arrow</span> cursos </h4>
          </div>

          <div class="col s10 offset-s1 l8 offset-l2">
            <ul>
              <li v-for="webs in web" :key="webs"> 
                <b> {{ webs.name }}</b>
                <p> {{ webs.texto }} 
                  <i> 
                    <span class="material-icons">calendar_today</span> {{ webs.data }} 
                  </i> 
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

export default {
    data () {
        return {
            tituloSkill: 'Skill',
            textoSkill: 'Algumas das linguagens mais usadas e com um conhecimento avançada e moderado de linguagens que usei durante os projetos na minha experência profissional.',

            web: [
              { name: 'OpetWorks', texto: 'Curso de Edição e Arte final', data: '2002 / 12 meses' },
              { name: 'Opet', texto: 'Análise e Desenvolvimento de Sistemas', data: '2008 / 2,5 anos' },
              { name: 'UFTPR', texto: 'Curso de Php', data: '2011 / 4 meses' }
            ],

            ling: [
              { lang: 'Html & CSS', valor: 90 },
              { lang: 'JQuery', valor: 89 },
              { lang: 'JavaScript', valor: 75 },
              { lang: 'VueJS', valor: 80 },
              { lang: 'React', valor: 70 },
              { lang: 'Nodejs', valor: 70 },
              { lang: 'Php', valor: 70 },
            ],

            edi: [
              { soft: 'PhotoShop', valor: 95 },
              { soft: 'Illustrator', valor: 95 },
              { soft: 'After Effect', valor: 75 },
              { soft: 'Figma', valor: 70 },
              { soft: 'Sketch', valor: 70 },
              { soft: 'Adobe XD', valor: 90 },
            ]
        }
    },
    components: {
      ProgressBar
    }
}
</script>
