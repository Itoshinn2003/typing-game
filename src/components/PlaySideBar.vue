<script setup lang="ts">
import { defineEmits } from "vue"
const emits = defineEmits(['countdown']);

function countdown() {
    emits('countdown',3);
}
</script>

<template>
<ul class="ul-1">
    <li>▽ Game-folder</li>
      <ul class="ul-2"><li @click="countdown">START</li><li>STOP</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Settings</li>
      <ul class="ul-2"><li>TOP</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Situation</li>
    <ul class="ul-2"><li class="text-danger">Time 04:24</li><li class="text-warning">Words 7</li></ul>
    <li>▷ Dummy Folder</li>

</ul>
</template>
<style scoped>
ul {
  color:white;
}
.ul-1{
  padding-top:20px;
  padding-left:10px;
  font-size:14px;
  font-weight:bold;
}
.ul-2{
  font-size:12px;
  font-weight:normal;
  padding-left:20px;
  margin-bottom:10px;
}
.ul-2 li{
  border-top:0.5px solid rgb(64, 64, 64);
  padding: 2px 0;
}

li:hover{
  cursor:pointer;
}
</style>