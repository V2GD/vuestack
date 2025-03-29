<script setup>
    import { ref, onMounted } from 'vue'
    
    import Pokedex from '@/components/PokeList/pokedex.json';
    const pokeList =  ref(Pokedex);
    const totalItems = 5;
    const maxHeight = ref(500);
    const numberListField = ref(0);

    const pokeRefs = ref([]);


    function getContainerHeight(){
        const itemHeight = pokeRefs.value[0].offsetHeight;
        maxHeight.value = itemHeight * totalItems;
    }

    function goToNumberInList(){
        if(pokeRefs.value[numberListField.value - 1]){
            pokeRefs.value[numberListField.value - 1].scrollIntoView({ behavior: "smooth"});
        }
    }

    onMounted(() => {
        getContainerHeight();
    });


</script>


<template>
    <h2> Pokemón center</h2>
    <div class="poke-list" :style="'height:'+maxHeight+'px'">
        <div ref="pokeRefs" v-for="(poke, index) in pokeList" class="poke-list__item">
            <img class="poke-list__item__image" :src="poke.ICON" :title="poke.NAME">
            <div class="poke-list__item__info">
                <h3>{{index + 1}}. {{poke.NAME}}</h3>
                <template :key="poke.type" v-for="type in poke.TYPE">
                    <span class="badge" :class="'badge--'+type">{{type}}</span>
                </template>
            </div>
        </div>
    </div>
    <div class="poke-list-footer">
        <div class="input-group">
            <label> Indica un número: </label>
            <input v-model="numberListField" type="number"/>
        </div>
        <button type="button" class="btn btn-principal" @click="goToNumberInList()">Buscar</button>
    </div>
</template>

<style scoped>

.poke-list{
    display: flex;
    flex-flow: wrap;
    align-items: stretch;
    justify-content: center;
    overflow: auto;
    border: 1px solid #ccc;
}

.poke-list__item{
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding-bottom: 1em;
    border-bottom: 1px solid #ccc;
}

.poke-list__item:last-child{
    border-bottom: none;
}

.poke-list-footer{
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-group{
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 1em;
}
</style>