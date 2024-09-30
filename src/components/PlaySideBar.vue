<script setup lang="ts">
import { defineEmits, defineProps, watch, ref } from "vue"
import  router  from "../router"

const Router=router;
const props = defineProps(['playing']);
const emits = defineEmits(['countdown']);
let interval;
let elapsedTime = 0; 
let formatElapsedTime = ref<String>('0:00');
function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateDisplay() {
    formatElapsedTime.value = formatTime(elapsedTime);
}

function startStopWatch() {
  console.log(props.playing);
    if (props.playing) { 
        interval = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000); 
    }
}
function countdown() {
    emits('countdown',3);
}
function navigateHome() {
      Router.push('/');
    }

watch(() =>props.playing, startStopWatch, {deep: true});
</script>

<template>
<ul class="ul-1">
    <li>▽ Game-folder</li>
      <ul class="ul-2"><li @click="countdown">START</li><li>RESTART</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Settings</li>
      <ul class="ul-2"><li @click="navigateHome">TOP</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Situation</li>
    <ul class="ul-2"><li class="text-danger">Time<span>{{ formatElapsedTime }}</span></li><li class="text-warning">Words 7</li></ul>
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