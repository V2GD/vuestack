<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import DataWords from '@/components/Typing/dataWords.json';

    const words = ref(DataWords);
    const currentWord = ref([]);
    const currentWordRefs = ref([]);
    const inputTypingRef = ref(null);
    const totalScore = ref(0);
    const totalTime = ref(60);
    const isStarted = ref(false);
    const typingValue = ref('');

    let interval;
    

    function getCurrentWord(){
        const index = getRandomInt(words.value.length);
        currentWord.value = words.value[index].split('');
        currentWordRefs.value.forEach((item) => {
            item.classList.remove('word--KO');
            item.classList.remove('word--OK')
        });
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    function start(){
        if (!interval){
            isStarted.value = true;
            inputTypingRef.value.focus();
            currentWord.value.forEach((val, index) => {
                if(val){
                    currentWordRefs.value[index].classList.remove('word--OK');
                    currentWordRefs.value[index].classList.remove('word--KO');
                }
            });
            interval = setInterval(() => {
                totalTime.value -= 1;
                if(totalTime.value === 0){
                    stop();
                }
            }, 1000);
        }
    }

    function stop(){
        isStarted.value = false;
        clearInterval(interval);
        interval = null;
        inputTypingRef.value.blur();
    }

    function validateTyping($event){
        const valueArr = typingValue.value.split('');
        let totalValid = 0;
        currentWord.value.forEach((val, index) => {
            if($event.key === 'Backspace' && !valueArr[index]){
                currentWordRefs.value[index].classList.remove('word--OK');
                currentWordRefs.value[index].classList.remove('word--KO');
            }
            if($event.key !== 'Backspace'){
                if(valueArr[index] && val === valueArr[index]){
                    currentWordRefs.value[index].classList.add('word--OK');
                    currentWordRefs.value[index].classList.remove('word--KO');
                    totalValid +=1;
                }
                if(valueArr[index] && val !== valueArr[index]){
                    currentWordRefs.value[index].classList.add('word--KO');
                    currentWordRefs.value[index].classList.remove('word--OK');
                }
            }
        });

        if( totalValid === currentWord.value.length ){
            totalScore.value += currentWord.value.length;
            totalTime.value += currentWord.value.length; 
            typingValue.value = '';
            getCurrentWord();
        }
    }

    onMounted(()=>{
        getCurrentWord();
    });

    onUnmounted(()=>{
        clearInterval(interval);
    });

</script>

<template>
    <h2>Typing</h2>

    <div class="timmer-container">
        <h3> Time: {{totalTime}} seconds</h3>
        <button 
            type="button" 
            class="btn btn-principal" 
            @click="start()" 
            :disabled="isStarted"> 
                Start 
        </button>
        <button 
            type="button" 
            class="btn btn-secondary" 
            @click="stop()" 
            :disabled="!isStarted"> 
                Stop 
        </button>
    </div>

    <div class="word-container">
        <span 
            ref="currentWordRefs" 
            v-for="letter in currentWord" 
            class="word"
            >
                {{letter}}
        </span>
        <input 
            ref="inputTypingRef"
            class="hidden"
            v-model.trim="typingValue" 
            @keyup="isStarted ? validateTyping($event): false" 
        />
    </div>

    <div class="score-container">
        <h3> Score: {{totalScore}}</h3>
    </div>
</template>

<style scoped>
    .word-container{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        font-weight: bold;
    }

    .word{
        color: white;
        -webkit-text-stroke: 2px black; 
    
    }

    .word--OK{
        color: green;
        -webkit-text-stroke: 2px green; 
    }

    .word--KO{
        color: red;
        -webkit-text-stroke: 2px red; 
    }

    .score-container{
        margin-top: 2em;
    }

    .timmer-container .btn{
        margin: 0 0.5em;
    }

    .hidden{
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }
</style>