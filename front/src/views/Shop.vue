<template>
    <div id="box">
      <div class="pre-topbar">
        <Topbar/> 
        <button id="button" @click="() => TogglePopup('buttonTrigger')" >Ajouter Item</button>
        <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')" :data="fleurs" />
      </div>
      <div class="box-catalogue" v-for="(fleur, index) in fleurs" :key="index">
          <Item :f="fleur"/> 
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
        fleurs:[{
          name:'rose',
          name_latin:'rosae',
          couleur:'rouge',
          description:'tkt',
          prix:'15€'
          },
          {
          name:'rose',
          name_latin:'rosae',
          couleur:'rouge',
          description:'tkt',
          prix:'15€'
        }],
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
