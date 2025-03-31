<script setup>
import {ref, computed} from 'vue';

import PaginationFilter from '@/components/Pagination/PaginationFilter.vue';

import flowers from '@/components/Pagination/flowers.json';

const flowersData = ref(flowers);
const flowerSelected = ref('');

const firstPage = ref(0);
const currentPage = ref(0);
const lastPage = ref(0);
const currentImageLink = ref('');


function selectedFlowerHandler(name){
    flowerSelected.value = name;
    initPagination();
}

function initPagination(){
    firstPage.value = 1;
    currentPage.value = 1;
    lastPage.value = flowersData.value.filter((flower) => flower.name === flowerSelected.value).images;
    loadImage();
}


function loadImage(){
    const imageName = flowerSelected.value.toLowerCase().replace(' ', '_');
    const imageId =  currentPage.value < 10 ? '_0000'+ currentPage.value : '_000' + currentPage.value;
    const imageExtension = '.jpg';
    
    currentImageLink.value = imageName+imageId+imageExtension;
}

function previous(){
     currentPage.value -= 1;
     loadImage();
}

function next(){
     currentPage.value += 1;
     loadImage();
}

</script>

<template>
    <h2>Paginacion</h2>
    <PaginationFilter 
        :flowers="flowersData" 
        @selected="selectedFlowerHandler"
    />
    <Transition>
        <div class="image-container" :style="{ backgroundImage: `url(${'src/assets/flowers/' + currentImageLink})`}"></div>
    </Transition>
    <div>
        <button type="button" @click="previous()" :disabled="currentPage===firstPage">< Previous  </button>
        <button type="button" @click="next()" :disabled="currentPage===lastPage">Next > </button>
    </div>
    





</template>

<style scoped>

    .image-container{
        width: auto;
        min-height: 60vh;
        background-color: #ccc;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 1em;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

</style>