<template>
    <div id="box">
      <div class="pre-topbar">
        <Topbar/> 
        <button id="button" @click="() => TogglePopup('buttonTrigger')" >Ajouter Item</button>
        <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')" :produit="gateaux" />
      </div>
      <div class="box-catalogue" v-for="(gateau, index) in gateaux" :key="index">
          <Item :produit="gateau"/> 
      </div>
    </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import Popup from '../components/Popup.vue'
import Item from '../components/Item.vue'
  export default{
    data:()=>{
      return {
        gateaux:[{
          name:'Lulu la barquette',
          gout:'chocolat',
          description:'Biscuit croquant avec du chocolat',
          prix:'2€',
          image:'../assets/cookie.jpg'
          },
          {
          name:'Lulu la barquette',
          gout:'Fraise',
          description:'Biscuit croquant avec de la fraise',
          prix:'2€'
          },
          {
          name:'Cookie',
          gout:'Chocolat Noisette',
          description:'Cookie avec des pépites de chocolat et de noisette',
          prix:'3.20€'
          },
          {
          name:'Petit écoliers',
          gout:'Chocolat au lait',
          description:'Sablé avec du chocolat au lait',
          prix:'1.50€'
          },
          {
          name:'Brownie',
          gout:'Chocolat',
          description:'Gateau au chocolat',
          prix:'3€'
          }
          ],
        popupTriggers:{
          buttonTrigger: false,
          timedTrigger:false
        } 
      }
    },
    
    components: { Item, Topbar,Popup },
    methods:{
       TogglePopup (trigger) {
        this.popupTriggers[trigger] = !this.popupTriggers[trigger]
      }
    },
  }
</script>


<style scoped>
#box {
  padding:5px;
  padding-left: 250px; 
}

.box-catalogue{
  display: flex;
  width: 100%;
  padding-left: 5%;
}
.pre-topbar{
  width: 100%;
}
#button {
  width:10%;
  height: 40px;
  background:#006699;
  color:#fff;
  border:1px solid #006699;   
  cursor:pointer;
  border: none;
  outline: none;
}
  </style>
