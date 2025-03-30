<script setup>
import TimeCalculatorForm from '@/components/TimeCalculator/TimeCalculatorForm.vue';
import TimeCalculatorTotal from '@/components/TimeCalculator/TimeCalculatorTotal.vue';

import { ref } from 'vue';

const totalTime = ref('0 horas 0 minutos 0 segundos');

function getTotalTime(value) {
  let dateTimeStr = new Date(value);
  dateTimeStr =
    dateTimeStr.getUTCHours() +
    ' horas ' +
    dateTimeStr.getUTCMinutes() +
    ' minutos ' +
    dateTimeStr.getUTCSeconds() +
    ' segundos';

  totalTime.value = dateTimeStr;
}
</script>
<template>
  <h1>Calculadora de tiempo</h1>
  <TimeCalculatorForm @get-total-time="getTotalTime" />
  <TimeCalculatorTotal :total-time="totalTime" />
</template>
