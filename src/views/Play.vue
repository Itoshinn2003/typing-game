<script setup lang="ts">
import PlaySideBar from '../components/PlaySideBar.vue'
import PlayTypingArea from '../components/PlayTypingArea.vue'
import { useStore } from '../stores/index' 
import { ref } from "vue"
 
const store = useStore();
let intervalId: number | null | NodeJS.Timeout;
let resetInterval= ref<boolean>(false);
let Seconds = ref(4);
let playing = ref<boolean>(false);
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
  store.wordsNumber = -1;
  store.sentencesNumber = -1;
  store.sentenceLetterNumber = 0;
  store.wordletterNumber = 0;
  store.isStop = false;
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

</script>
<template>
    <div class="row bg-grey" >
        <div class="col-2 sidebar">
          <PlaySideBar v-on:countdown="countdown" v-on:reCountdown="reCountdown" :playing="playing" :resetInterval="resetInterval"></PlaySideBar>
        </div>
        <div class="col-10 rightside">
          <div class="countdown">
            <p v-if="Seconds > 0 && Seconds < 4" class="text-white">{{  Seconds }}</p>
            <p v-else-if="Seconds == 0" class="text-white">START</p>
          </div>
          <PlayTypingArea :playing="playing"></PlayTypingArea>
        </div>
    </div>
    
</template>