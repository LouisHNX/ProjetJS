<template>

  <div id="app"  class="sidenav">
    <!--<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->

    <router-link to="/todo">Accueil</router-link>
    <router-link to="/todo">Catalogue</router-link>
    <router-link to="/todo">Panier</router-link>
    <router-link to="/todo">Contact</router-link>
    <a href="#">Accueil</a>
    <a href="#">Catalogue</a>
    <a href="#">Panier</a>
    <a href="#">Contact</a> 
  </div>

<!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/todo">Taches</router-link>
    </div>
    <router-view />
  </div> -->

</template>

<style lang="css">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidenav {
  height: 100%;
  width: 250px; 
  position: fixed;
  z-index: 1;
  top: 0; 
  left: 0;
  background-color: #111; 
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s; 
}
.sidenav router-link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #999999;
  display: block;
  transition: 0.3s;
}
.sidenav router-link:hover {
  color: #f1f1f1;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>