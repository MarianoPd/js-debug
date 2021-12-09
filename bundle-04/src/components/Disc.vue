<template>
<!-- questo componente crea la card con i dati del disco forniti da main -->
    <div class="disc p-3 text-center">
        <div class="p-3">
            <img class="img-fluid mb-3" :src="disc.poster" :alt="disc.name" /> <!-- scritto discs al posto di disc -->
            <p class="title text-uppercase fw-bold">{{ disc.title }}</p>
            <p class="author lead mb-0">{{ disc.author }}</p>  <!-- manca la sencoda coppia di graffe -->
            <p class="year">{{ disc.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Disc",
    props: {
        disc: Object, // disc è la props per un oggetto non una stringa
    },
};
</script>

<style lang="scss" scoped>
.disc {                                 //le propietà per il div erano all'esterno di .disc
    flex-basis: calc(100% / 5);
    aspect-ratio: calc(10/16);         // aggiunto aspect-artio per dare un'aspetto piu' pulito senza altezze fisse
    
    div {
        background-color: #2e3a46;
        height: 100%;                     //height: 100% non ha riferimenti perché il padre non ha altezza                  

        .author,
        .year {
            color: #7d7977;
        }
    }
    
}

</style>