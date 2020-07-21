<template>
    <div class="project">
      <div class="row">
        <div class="col s10 offset-s1 l10 offset-l1">
          <h1> <i></i> {{ tituloProjetos }}</h1>
        </div>

        <div class="col s12 ">
          <div class="col s5 offset-s1 divider"></div>
        </div>

        <div class="col s10 offset-s1 l10 offset-l1">
          <div class="col s12 l4 thumb">
              <p> <span>web</span> </p>
              <vue-pure-lightbox
                :thumbnail="loginPUCThumb"
                :images="[
                  loginPUC,
                  blackBoard,
                  tdeCpa,
                  tdeDom,
                  tdeRussa,
                  idMaristaCapa,
                  idMarista
                ]">
              </vue-pure-lightbox>
            </div>

            <div class="col s12 l4 thumb">
              <p> <span>impresso</span> </p>
              <vue-pure-lightbox
                :thumbnail="head1Thumb"
                :images="[
                  head1,
                  head2,
                  convite
                ]">
              </vue-pure-lightbox>
            </div>

            <div class="col s12 l4 thumb">
              <p> <span>banner</span> </p>
              <vue-pure-lightbox
                :thumbnail="bannerThumb"
                :images="[
                  banner1,
                  banner2,
                  banner3
                ]">
              </vue-pure-lightbox>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'

export default {
    data () {
        return {
            tituloProjetos: 'Project',
            textoProjetos: 'Escolhi alguns dos meus trabalhos ...',

            // imagens web
            blackBoard: require('@/assets/img/projetos/web/blackboardPUC.png'),
            loginPUC: require('@/assets/img/projetos/web/loginPUC.png'),
            loginPUCThumb: require('@/assets/img/projetos/web/loginPUCThumb.png'),
            tdeCpa: require('@/assets/img/projetos/web/tde-capa.png'),
            tdeDom: require('@/assets/img/projetos/web/tde-domQuixote.png'),
            tdeRussa: require('@/assets/img/projetos/web/tde-revRussa.png'),
            idMaristaCapa: require('@/assets/img/projetos/web/IdMarista-capa.png'),
            idMarista: require('@/assets/img/projetos/web/IdMarista.png'),

            // imagens banner
            bannerThumb: require('@/assets/img/projetos/banner/bannerThumb.png'),
            banner1: require('@/assets/img/projetos/banner/01.png'),
            banner2: require('@/assets/img/projetos/banner/02.png'),
            banner3: require('@/assets/img/projetos/banner/03.png'),

            //imagens print
            head1Thumb: require('@/assets/img/projetos/impressos/head1Thumb.jpg'),
            head1: require('@/assets/img/projetos/impressos/head1.jpg'),
            head2: require('@/assets/img/projetos/impressos/head2.jpg'),
            convite: require('@/assets/img/projetos/impressos/convite.png'),
        }
    },
    components: {
      VuePureLightbox,
  }
}
</script>