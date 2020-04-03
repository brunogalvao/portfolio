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
          <h4>Linguagem de programação</h4>

          <p>{{ textoSkill }}</p>
        </div>

        <div class="col s10 offset-s1 l5 offset-l1">
          <div class="skillLista">
            <b>Html & CSS</b>
            <progress-bar size="1" 
            bar-color="#FFA700" 
            val="90" 
            text="90%" 
            text-align="right" 
            text-position="top"
            ></progress-bar>
            
            <b>JavaScript</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="72" 
            text="72%"
            text-align="right" 
            text-position="top"
            ></progress-bar>
            
            <b>VueJS & React</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="80" 
            text="80%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>NodeJs</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="68" 
            text="68%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>PhotoShop</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="92" 
            text="92%"
            text-align="right" 
            text-position="top"
            ></progress-bar>
            
          </div>
        </div>

        <div class="col s10 offset-s1 l5">
          <div class="skillLista">
            <b>Illustrator</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="94" 
            text="94%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>Afeter Effect</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="70" 
            text="70%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>Figma</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="70" 
            text="70%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>Sketch</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="70" 
            text="70%"
            text-align="right" 
            text-position="top"
            ></progress-bar>

            <b>Adobe XD</b>
            <progress-bar 
            size="1" 
            bar-color="#FFA700" 
            val="88" 
            text="88%"
            text-align="right" 
            text-position="top"
            ></progress-bar>
          </div>
        </div>

        <div class="col s10 offset-s1 l10 offset-l1">
          <div class="skillListaAcademico">
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
        }
    },
    components: {
      ProgressBar
    }
}
</script>
