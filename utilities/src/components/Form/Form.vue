<script setup>
    import FormField from '@/components/Form/FormField.vue';
    import { reactive } from 'vue';

    const userInfo = reactive({
        "username":"",
        "password":"",
    });

    function validateForm(){
        console.log('info')
        console.log(userInfo)
    }

</script>

<template>
    <h3>Form</h3>

    <FormField 
        label="UserName"
        type="text"
        v-model="userInfo.username"
        maxLength="20"
    />

    <FormField 
        label="Password"
        type="password"
        v-model="userInfo.password"
    />

    <button type="button" @click="validateForm()">Save</button>
</template>