<script setup lang="ts">
import PlaySideBar from '../components/PlaySideBar.vue'
import PlayTypingArea from '../components/PlayTypingArea.vue'
import { useStore } from '../stores/index' 
import { ref } from "vue"
 
const store = useStore();
let intervalId: number | null ;
let resetInterval= ref<boolean>(false);
let Seconds = ref(4);
function countdown(seconds: number) {
  if (!store.playing) {
   if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null;
   }
   intervalId = window.setInterval(() => {
    if (seconds == 0) {
      Seconds.value = seconds;
      seconds--;
      store.playing = true;
    } else if (seconds < 0) {
      Seconds.value = -1;
      if (typeof intervalId == 'number') {
        clearInterval(intervalId);
      }
    } else {
      Seconds.value = seconds;
      seconds--;
    }
  }, 1000); 
}
}
function reCountdown(seconds: number) {
  if (store.playing) {
      store.playing = false;
  }
  store.resetNumber();
  resetInterval.value = true;
   if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null;
   }
   intervalId = window.setInterval(() => {
    if (seconds == 0) {
      Seconds.value = seconds;
      seconds--;
      store.playing = true;
    } else if (seconds < 0) {
      Seconds.value = -1;
      if (typeof intervalId == 'number') {
        clearInterval(intervalId);
      }
    } else {
      Seconds.value = seconds;
      seconds--;
    }
  }, 1000); 

}

</script>
<template>
    <div class="row bg-grey" >
        <div class="col-2 sidebar">
          <PlaySideBar v-on:countdown="countdown" v-on:reCountdown="reCountdown" :resetInterval="resetInterval"></PlaySideBar>
        </div>
        <div class="col-10 rightside">
          <div class="countdown">
            <p v-if="Seconds > 0 && Seconds < 4" class="text-white">{{  Seconds }}</p>
            <p v-else-if="Seconds == 0" class="text-white">START</p>
          </div>
          <PlayTypingArea></PlayTypingArea>
        </div>
    </div>
    
</template>