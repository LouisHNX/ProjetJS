<template>
    <div class="popup">
        <div class="inner-popup">
            <h2>Ajouter une Fleur</h2>
            <form action="" id="form">
                <p><input type="text" placeholder="Nom" v-model="name"/></p>
                <p><input type="text" placeholder="Nom latin" v-model="name_latin"/></p>
                <p><input type="text" placeholder="Couleur" v-model="couleur"/></p>
                <p><input type="text" placeholder="Description" v-model="description"/></p>
                <p><input type="text" placeholder="Prix" v-model="prix"/></p>
                <p><input type="submit" value="Ajouter" @click="addItem()"/></p>
            </form>
            <button class="btn-close" @click="TogglePopup()">
                Fermer
            </button>
            
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['TogglePopup','data'],
    data(){
        return{
            name:'',name_latin:'',couleur:'',description:'',prix:''
        }
    },
    methods:{
        addItem(){
            
            let newItem = {
                name: this.name,
                name_latin: this.name_latin,
                couleur: this.couleur,
                description: this.description,
                prix: this.prix
            }
            this.data.push(newItem)
        }
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
    }
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba( 0, 0, 0, 0.2);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-popup{
        background: #fff;
        padding: 32px;
    }
</style>