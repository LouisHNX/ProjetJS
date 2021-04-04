<template>
    <div id="box">
      <Topbar/>
      <div class="box-catalogue">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
      </div>
      <br>
      <div class="box-catalogue">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
      </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import Topbar from '../components/Topbar.vue'
  export default{
  components: { Item, Topbar },
    
  }
</script>
<style scoped>
#box {
  padding:5px;
  padding-left: 250px;
  width:200px;  
}

.box-catalogue{
  display: flex;
  margin: 0 auto;
  width: 20px;
  }
</style>
