<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
<div style="display: flex; flexDirection: row; align-items: center; justify-content: center">
  <button  style="border-radius: 10px; font-size: 26px" type="button" @click="handleDescrease">-</button>
  <p style="margin-left: 10px; font-size: 28px">{{count}}</p>
  <button style="margin-left: 10px; border-radius: 10px; font-size: 26px" type="button" @click="handleIncrease">+</button>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref<number>(0)

function handleIncrease() {
  count.value++
}
function handleDescrease() {
  count.value--
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
