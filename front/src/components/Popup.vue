<template>
    <div class="popup">
        <div class="inner-popup">
            <h2>Ajouter un gâteau</h2>
            <form action="" id="form">
                <p><input type="text" placeholder="Nom" v-model="name"/></p>
                <p><input type="text" placeholder="Gout" v-model="gout"/></p>
                <p><input type="text" placeholder="Description" v-model="description"/></p>
                <p><input type="text" placeholder="Prix" v-model="prix"/></p>
                <p><input type="submit" value="Ajouter" @click="addItem(), TogglePopup()"/></p>
                <button class="btn-close" @click="TogglePopup()">Fermer</button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['TogglePopup','produit'],
    data(){
        return{
            name:'',gout:'',description:'',prix:''
        }
    },
    methods:{
        addItem(){
            
            let newItem = {
                name: this.name,
                gout: this.gout,
                description: this.description,
                prix: this.prix
            }
            this.produit.push(newItem)
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