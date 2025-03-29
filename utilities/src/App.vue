<script setup>
import NavTop from '@/components/Nav/NavTop.vue';
import NavMenu from '@/components/Nav/NavMenu.vue';
import TimeCalculator from '@/components/TimeCalculator/TimeCalculator.vue';

</script>

<template>
  <NavTop>
    <template v-slot:left>
      <h1>Utilidades</h1>
    </template>
    <template v-slot:right>
      <NavMenu/>
    </template>
  </NavTop>
  <div class="main-container">
    <routerView/>
  </div>

</template>

<style scoped></style>
