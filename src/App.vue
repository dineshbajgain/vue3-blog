<template>
 <HeaderVue />
  <router-view class="container mx-auto md:px-12 md:pt-2 pb-4"/>
  <FooterVue/>
</template>
<script>
import HeaderVue from "./components/partials/Header.vue"
import FooterVue from "./components/partials/Footer.vue"
export default {
  components:{HeaderVue,FooterVue}

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
