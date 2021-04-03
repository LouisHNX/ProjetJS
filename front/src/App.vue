<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

  export default{
  components: { Navbar },
    
  }
</script>

<style>
*{
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
