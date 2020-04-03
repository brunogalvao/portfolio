<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col s10 offset-s1">
          <div class="col s3 m2 l2 logoMenu">
            <span></span>
          </div>
          <div class="col s9 m10 l10">
            <router-link :to="`/${menu}`" v-for="(menu, index) in menus" :key="`menu-${index}`"> {{ menu }} </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        menus: [
          'home', 'skill', 'project', 'about'
        ]
    }
  }
}
</script>

<style lang="scss">

</style>
