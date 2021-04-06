<template>
    <div class="topbar">
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?">
          <button type="submit" class="button"><img class="logo-shop" src="../assets/search-solid.svg" alt="logo search"></button>
        </div>
      </div>
      <button class="btn-cart"><img class="logo-cart" src="../assets/shopping-cart-solid.svg" alt="logo shopping cart"></button>
    </div>
</template>

<script>

</script>

<style scoped>

.topbar{
  width: 100%;
  display: flex;
}
.wrap{
  padding-bottom: 5px;
  padding-right: 10px;
}
.search {
  width: 100%;
  display: flex;
}
.searchTerm {
  width: 100%;
  border: 1px solid black;
  border-right: 10px;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}
.button {
  width: 40px;
  height: 32px;
  border: 1px solid black;
  background: white;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  
}
.btn-cart{
  border: none;
  background-color: white;
  outline: none;
}

.logo-cart{
  width: 30px;
  height: auto;
}

#box form {
 background:#006699;
 padding:5px;
 display:block;
 position:absolute;
 top:27px;
}

</style>
