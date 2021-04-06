<template>
    <div class="popup">
        <div class="inner-popup">
            <h2>Ajouter une Fleur</h2>
            <form action="" id="form">
                <p><input type="text" placeholder="Nom"/></p>
                <p><input type="text" placeholder="Nom latin" /></p>
                <p><input type="text" placeholder="Couleur" /></p>
                <p><input type="text" placeholder="Description" /></p>
                <p><input type="text" placeholder="Prix" /></p>
                <p><input type="submit" value="Ajouter" /></p>
            </form>
            <button class="btn-close" @click="TogglePopup()">
                Fermer
            </button>
            
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['TogglePopup']
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