<script setup>
import { ref } from 'vue';

const totalTime = ref(1);
const rowItems = ref([
  {
    id: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
]);
const emits = defineEmits(['get-total-time']);

function addRowItem() {
  const itemId = rowItems.value[rowItems.value.length - 1]
    ? rowItems.value[rowItems.value.length - 1].id + 1
    : 0;
  rowItems.value.push({
    id: itemId,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
}

function deleteRowItem(itemId) {
  rowItems.value = rowItems.value.filter((item) => item.id !== itemId);
}

function calculateHours() {
  let msHours = 0;
  let msMinutes = 0;
  let msSeconds = 0;

  rowItems.value.forEach((item, index) => {
    //1 hour = 3600000 ms
    msHours += item.hours * 3600000;
    //1 min = 60000 ms
    msMinutes += item.minutes * 60000;
    //1 sec = 1000 ms
    msSeconds += item.seconds * 1000;
  });

  totalTime.value = msHours + msMinutes + msSeconds;
  emits('get-total-time', totalTime.value);
}
</script>
<template>
  <form class="form" @submit.prevent="calculateHours()">
    <div class="row" :key="item.id" v-for="item in rowItems">
      <div class="col">
        <div class="input-group">
          <label>Horas</label>
          <input v-model="item.hours" type="number" />
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <label>Minutos</label>
          <input v-model="item.minutes" type="number" />
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <label>Segundos</label>
          <input v-model="item.seconds" type="number" />
        </div>
      </div>
      <div class="col">
        <a
          class="btn-link btn-secondary"
          @click="deleteRowItem(item.id)"
          :disabled="item.id === 0"
        >
          -
        </a>
        <a class="btn-link btn-principal" @click="addRowItem">+</a>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col form-btns">
        <button class="btn btn-secondary" type="reset">Reiniciar</button>
        <button class="btn btn-principal" type="submit">Calcular</button>
      </div>
    </div>
  </form>
</template>
<style scoped>
.row {
  display: flex;
}

.col {
  display: flex;
  flex: 1;
  flex-flow: wrap;
  align-items: flex-end;
  justify-content: center;
}

.input-group {
  padding: 0 1em;
}

.col.form-btns {
  justify-content: flex-end;
}

.btn:not(:last-child) {
  margin: 0 0.5em;
}


</style>
