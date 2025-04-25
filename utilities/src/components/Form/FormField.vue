<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps(['label', 'type', 'modelValue','maxLength']);

const emit = defineEmits(['update:modelValue','update:type']);

const validTypesValues = ['text','password'];
const isValidTypes = computed(() => {
    return validTypesValues.includes(props.type);
});

const showIcon = ref(true);
const showPassword = computed(() => {
    return props.type === validTypesValues[1];
});
function toogleIcon(){
    showIcon.value = !showIcon.value;
}

onMounted(()=>{

});

</script>

<template>

    <div ref="props.label" class="input-group" :class="isValidTypes ? '': 'input-group--invalid'">
        <label v-if="props.label" class="input-group__label">{{props.label}}</label>
        <input 
            :type="props.type" 
            class="input-group__input" 
            :value="props.modelValue" 
            @input="emit('update:modelValue', $event.target.value)"
            :maxLength="props.maxLength"
        />
        <template v-if="showPassword">
            <div class="btn-icon" v-if="showIcon" @click="toogleIcon()">show</div>
            <div class="btn-icon" v-if="!showIcon" @click="toogleIcon()">hide</div>
        </template>
        <span class="input-group__feedback" v-if="!isValidTypes"> Only valid types 'text' or 'password'</span>
    </div>

</template>

<style scoped>

.input-group{
    display: flex;
    flex-direction: column;
    max-width: 40%;
    margin: 0 auto;
    padding: 0.5em 0;
    position: relative;
}

.input-group--invalid{
    color: red;
    border-color: red;
}

.input-group__label{
    color: inherit;
    font-weight: bold;
    font-size: 0.8em;
    text-align: left;
}

.input-group__input{
    padding: 0.4em 2em 0.4em 0.4em;
}

.input-group__feedback{
    font-size: 0.7em;
    text-align: left;
}

.btn-icon{
    position: absolute;
    left: calc(100% - 3em);
    top: 1.8em;
}
</style>