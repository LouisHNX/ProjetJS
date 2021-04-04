<template>
    <div class="container">
        <div class="img"></div>
        <div class="item-desc">
            <h2>Titre Item</h2>
            <p>Description un peu longue</p>
            <h3>Prix :</h3>
            <h3>Ajouter au panier</h3>
        </div>
        
   </div>

</template>

<script>
    
</script>

<style scoped>
.container{
    margin: 18px;
}
.container{
    width: 250px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
}
.img{
    background-image: url('../assets/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    width: 250px;
    height: 172px;
}
.item-desc{
    padding: 5px;
}
</style>
