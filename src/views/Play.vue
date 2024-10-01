<script setup lang="ts">
import PlayFakeTabs from '../components/PlayFakeTabs.vue'
import PlaySideBar from '../components/PlaySideBar.vue'
import PlayTypingArea from '../components/PlayTypingArea.vue'
import { ref } from "vue"

let wordsNumber =ref<number>(0);
let intervalId: number | null | NodeJS.Timeout;
let resetInterval= ref<boolean>(false);
let Seconds = ref(4);
let playing = ref<boolean>(false);
let isStop = ref<boolean>(false);
function countdown(seconds: number) {
  if (!playing.value) {
   if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null;
   }
   intervalId = setInterval(() => {
    if (seconds == 0) {
      Seconds.value = seconds;
      seconds--;
      playing.value = true;
    } else if (seconds < 0) {
      Seconds.value = -1;
      clearInterval(intervalId);
    } else {
      Seconds.value = seconds;
      seconds--;
    }
  }, 1000); 
}
}
function reCountdown(seconds: number) {
  if (playing.value) {
      playing.value = false;
  }
  isStop.value = false;
  resetInterval.value = true;
   if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null;
   }
   intervalId = setInterval(() => {
    if (seconds == 0) {
      Seconds.value = seconds;
      seconds--;
      playing.value = true;
    } else if (seconds < 0) {
      Seconds.value = -1;
      clearInterval(intervalId);
    } else {
      Seconds.value = seconds;
      seconds--;
    }
  }, 1000); 

}

function wordsCount(words: number) {
    wordsNumber.value = words;
}
function stopStopWatch() {
  isStop.value = true;
}
</script>
<template>
    <div class="row bg-grey" >
        <div class="col-2 sidebar">
          <PlaySideBar v-on:countdown="countdown" v-on:reCountdown="reCountdown" :playing="playing" :isStop="isStop" :resetInterval="resetInterval" :words="wordsNumber"></PlaySideBar>
        </div>
        <div class="col-10 rightside">
          <PlayFakeTabs></PlayFakeTabs>
          <div class="countdown">
            <p v-if="Seconds > 0 && Seconds < 4" class="text-white">{{  Seconds }}</p>
            <p v-else-if="Seconds == 0" class="text-white">START</p>
          </div>
          <PlayTypingArea :playing="playing" v-on:stopStopWatch="stopStopWatch" v-on:wordsCount="wordsCount"></PlayTypingArea>
        </div>
    </div>
    
</template>