<template>
    <div id="box">
      <button id="button" v-on:click="show=!show">Ajouter Item</button>
      <form action="" id="form" v-if="show">
        <p><input type="text" placeholder="Nom"/></p>
        <p><input type="text" placeholder="Nom latin" /></p>
        <p><input type="text" placeholder="Couleur" /></p>
        <p><input type="text" placeholder="Description" /></p>
        <p><input type="text" placeholder="Prix" /></p>
        <p><input type="submit" value="Ajouter" /></p>
      </form>
      <div class="box-catalogue">
          <Item/>
      </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'

  export default{
  components: { Item },
    
  }

</script>

<style scoped>
#box {
  padding:5px;
  padding-left: 250px;
  width:200px;
  z-index:10;
  position:relative;  
}
#box form {
 background:#006699;
 padding:5px;
 display:block;
 position:absolute;
 top:27px;
}
#button {
  width:75px;
  background:#006699;
  color:#fff;
  padding:3px 10px;
  border:1px solid #006699;  
  margin-bottom:15px;  
  cursor:pointer;
}
input[type="submit"] {
  background:none;
  color:#fff;
  border:none;
  text-align:left;
  cursor:pointer;
}
</style>
