<script setup lang="ts">
import { defineEmits, watch } from "vue"
import { useStore } from '../stores/index' 
 
const store = useStore();
const emits = defineEmits(['countdown', 'reCountdown']);
let interval:  number | null;
let elapsedTime = 0; 

function countdown() {
  emits('countdown');
}
function reCountdown() {
  emits('reCountdown');
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  store.formatElapsedTime = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startStopWatch() {
  if (store.playing) { 
    interval = window.setInterval(() => {
      elapsedTime++;
      formatTime(elapsedTime);
    }, 1000); 
  }
}
function navigateHome() {
  if (typeof interval == 'number') {
    clearInterval(interval);
  }
  elapsedTime = 0;
  store.resetNumber();
  store.playing = false;
}

watch(() =>store.playing, () => {
  if ( store.playing ){
    startStopWatch();
  } else {
    if (typeof interval == 'number') {
      clearInterval(interval);
    }
    elapsedTime = 0;
  }}, {deep: true});

watch(() =>store.isStop, ()=> {
  if ( store.isStop ) {
    if (typeof interval == 'number') {
      clearInterval(interval);
    }
  }
}, { deep:true});


window.addEventListener("popstate", () => {
    navigateHome()
});
</script>

<template>
<ul class="ul-1">
    <li>▽ Game-folder</li>
      <ul class="ul-2"><li @click="countdown">START</li><li @click="reCountdown">RESTART</li><li>dummy <i class="fa-solid fa-ghost"></i></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
    <li>▽ Settings</li>
      <ul class="ul-2"><li @click="navigateHome"><router-link v-bind:to="{name: 'Home'}">TOP</router-link></li><li @click="navigateHome"><router-link v-bind:to="{name: 'Rule'}" >Rule</router-link></li><li>dummy <i class="fa-solid fa-ghost"></i></li></ul>
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