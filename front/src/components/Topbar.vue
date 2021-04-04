<template>
    <div class="topbar">
        <button id="button">Ajouter Item</button>
        <form action="" id="form" v-if="show">
            <p><input type="text" placeholder="Nom"/></p>
            <p><input type="text" placeholder="Nom latin" /></p>
            <p><input type="text" placeholder="Couleur" /></p>
            <p><input type="text" placeholder="Description" /></p>
            <p><input type="text" placeholder="Prix" /></p>
            <p><input type="submit" value="Ajouter" /></p>
        </form>
        <input class="searchbar" type="text" placeholder="Rechercher..">
        <img class="logo-shop" src="../assets/shopping-cart-solid.svg" alt="logo shopping cart">
      </div>
</template>

<script>

</script>

<style scoped>

.topbar{
  width: 100%;
  float: left;
  display: flex;
  flex-grow: 2;
  flex-shrink: 2;
  justify-content: space-around;
  align-items: stretch;
  margin: 0 auto;
}

.searchbar{
  height: 45px;
  border: 0px solid white;
}

.logo-shop{
  width: 30px;
  height: auto;
}

#button {
  width:75px;
  height: 45px;
  background:#006699;
  color:#fff;
  border:1px solid #006699;   
  cursor:pointer;
}

#box form {
 background:#006699;
 padding:5px;
 display:block;
 position:absolute;
 top:27px;
}

input[type="submit"] {
  background:none;
  color:#fff;
  border:none;
  text-align:left;
  cursor:pointer;
}
</style>
