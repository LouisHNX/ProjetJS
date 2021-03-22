<template>

  <div id="mySidenav" class="sidenav">
    <!--<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
    <a href="#">Accuiel</a>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>