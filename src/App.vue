<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col s10 offset-s1">
          <div class="col s3 m2 l2 logoMenu">
            <span></span>
          </div>

          <div class="col s9 m10 l10">
            <router-link 
            to="/"
            class="router-link-active"
            > home </router-link>

            <router-link 
            to="skill" 
            > skill </router-link>

            <router-link 
            to="project" 
            > project </router-link>

            <router-link 
            to="about" 
            > contact </router-link>
          </div>
          
        </div>
      </div>
    </div>
    
    <transition
      mode="out-in"
      :name="transitionName"
      @beforeLeave="beforeLeave"
      @enter="enter"
    >
      <router-view/>
    </transition>

  </div>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';

export default {
  data() {
    return {
        menus: [
          'home', 'skill', 'project', 'about'
        ],
        prevHeight: 0,
        transitionName: DEFAULT_TRANSITION
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    }
  }
}
</script>