<template>
    <div id="box">
      <div class="pre-topbar">
        <Topbar/> 
        <button id="button" @click="() => TogglePopup('buttonTrigger')">Ajouter Item</button>
        <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')" />
      </div>
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
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


import Item from '@/components/Item.vue'
import Topbar from '../components/Topbar.vue'
import Popup from '../components/Popup.vue'
import { ref } from '@vue/composition-api'
  export default{
    components: { Item, Topbar,Popup },

    setup(){
      const popupTriggers = ref({
          buttonTrigger: false,
          timedTrigger:false
      })

      const TogglePopup = (trigger) => {
        popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      }

      return{
        Popup,
        popupTriggers,
        TogglePopup
      }
    }
    
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
