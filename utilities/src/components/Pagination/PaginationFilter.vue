<script setup>
    import {ref, onMounted} from 'vue';

    const props = defineProps(['flowers']);
    const emits = defineEmits(['selected'])
    const selectedFlower = ref('');


    function selectedFlowerHandler(name){
        selectedFlower.value = name;
        emits('selected', name);
    }

    onMounted(()=>{
        if(!selectedFlower.value){
            selectedFlowerHandler(props.flowers[0].name);
        }
    })




</script>

<template>
    <h3> Filter </h3>
    <div class="filter-container">
        <div 
            :key="flower.name" 
            v-for ="flower in flowers" 
            class="filter-item"
            :class="flower.name === selectedFlower ? 'filter-item--selected': ''"
            @click="selectedFlowerHandler(flower.name)"
        >
            {{flower.name}}
        </div>
    </div>

</template>

<style scoped>
    .filter-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .filter-item{
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
        line-height: 1;
        font-size: 0.8em;
        padding: 0.3em 0.6em;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .filter-item.filter-item--selected {
        background: lightblue;
    }
    
</style>