<template>
    <div class="topbar">
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?">
          <button type="submit" class="searchButton"><img class="logo-shop" src="../assets/search-solid.svg" alt="logo search"></button>
        </div>
      </div>
      <img class="logo-shop" src="../assets/shopping-cart-solid.svg" alt="logo shopping cart">
    </div>
</template>

<script>

</script>

<style scoped>

.topbar{
  width: 100%;
  display: flex;
  flex-grow: 2;
  flex-shrink: 2;
  justify-content: space-around;
  align-items: stretch;
  margin: 0 auto;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}
.searchTerm {
  width: 100%;
  border: 1px solid black;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}
.searchButton {
  width: 40%px;
  height: 32px;
  border: 1px solid black;
  background: white;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.logo-shop{
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
