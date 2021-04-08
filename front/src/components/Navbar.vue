<template>
    <div id="nav" class="sidenav">
    <router-link to="/home"><img :src="require('../assets/logo2.png')"/></router-link>  
    <router-link to="/shop">Catalogue</router-link> 
    <a href="#">Modifier un élement</a>
    <a href="#">Supprimer un élement</a>
    <router-link to="/panier">Panier</router-link>
    <a href="#">Contact</a>
  </div>
</template>

<script>
export default{
  name:'navbar2'
}
</script>

<style scoped>

#nav {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32404e;
}
.sidenav {
  height: 100%;
  width: 225px; 
  position: fixed;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: rgb(27, 26, 26);
  overflow-x: hidden;
  padding-top: 40px;
  transition: 0.5s;
}
.sidenav a, router-link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 17px;
  color: #c5c3c3;
  display: block;
  transition: 0.3s;
  padding-bottom: 25px;
}
.sidenav a:hover {
  color: #ffffff;
}

</style>