<script setup lang="ts">
import PlaySideBar from '../components/PlaySideBar.vue'
import PlayTypingArea from '../components/PlayTypingArea.vue'
import { useStore } from '../stores/index' 
import { ref } from "vue"
 
const store = useStore();
let intervalId: number | null ;
let seconds = ref(4);
function countdown() {
  seconds.value = 4;
  if (!store.playing) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = window.setInterval(() => {
    seconds.value--;
    if (seconds.value == 0) {
      store.playing = true;
    } else if (seconds.value < 0) {
      if (typeof intervalId == 'number') {
        clearInterval(intervalId);
      }
    }
  }, 1000); 
  }
}
function reCountdown() {
  seconds.value = 4;
  if (store.playing) {
      store.playing = false;
  }
  store.resetNumber();
  if (intervalId) {
    clearInterval(intervalId); 
  }
  intervalId = window.setInterval(() => {
  seconds.value--;
  if (seconds.value == 0) {
    store.playing = true;
  } else if (seconds.value < 0) {
    if (typeof intervalId == 'number') {
      clearInterval(intervalId);
    }
  }
  }, 1000); 

}

</script>
<template>
    <div class="row bg-grey" >
        <div class="col-2 sidebar">
          <PlaySideBar v-on:countdown="countdown" v-on:reCountdown="reCountdown"></PlaySideBar>
        </div>
        <div class="col-10 rightside">
          <div class="countdown">
            <p v-if="seconds > 0 && seconds < 4" class="text-white">{{ seconds }}</p>
            <p v-else-if="seconds == 0" class="text-white">START</p>
          </div>
          <PlayTypingArea></PlayTypingArea>
        </div>
    </div>
    
</template>