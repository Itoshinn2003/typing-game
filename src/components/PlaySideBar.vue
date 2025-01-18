<script setup lang="ts">
import { defineEmits, defineProps, watch } from "vue"
import { useStore, gameStyle } from '../stores/index' 
 
const store = useStore();
const gameStyleStore = gameStyle();
const props = defineProps(['isStop', 'resetInterval', 'words']);
const emits = defineEmits(['countdown', 'reCountdown']);
let interval:  number | null;
let elapsedTime = 0; 
function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateDisplay() {
    store.formatElapsedTime = formatTime(elapsedTime);
}

function startStopWatch() {
    if (store.playing) { 
        interval = window.setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000); 
    }
}
function countdown() {
    emits('countdown',3);
}
function reCountdown() {
  emits('reCountdown', 3);
}
function navigateHome() {
      if (typeof interval == 'number') {
        clearInterval(interval);
      }
      interval = null;
      elapsedTime = 0;
      store.resetNumber;
}

watch(() =>store.playing, () => {
  if ( store.playing ){
    startStopWatch();
  } else {
      if (typeof interval == 'number') {
        clearInterval(interval);
      }
    interval = null;
    elapsedTime = 0;
  }}, {deep: true});

watch(() =>store.isStop, ()=> {
  if ( store.isStop ) {
      if (typeof interval == 'number') {
        clearInterval(interval);
      }
  }
}, { deep:true});
</script>

<template>
<ul class="ul-1">
    <li>▽ Game-folder</li>
      <ul class="ul-2"><li @click="countdown">START</li><li @click="reCountdown">RESTART</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Settings</li>
      <ul class="ul-2"><li @click="navigateHome"><router-link v-bind:to="'/'" >TOP</router-link></li><li @click="navigateHome"><router-link v-bind:to="'/rule'" >Rule</router-link></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Situation</li>
    <ul class="ul-2"><li class="text-danger">Time<span>{{ store.formatElapsedTime }}</span></li><li class="text-warning">Words <span>{{ store.wordsNumber }}</span></li></ul>
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