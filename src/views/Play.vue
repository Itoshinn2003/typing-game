<script setup lang="ts">
import PlayFakeTabs from '../components/PlayFakeTabs.vue'
import PlaySideBar from '../components/PlaySideBar.vue'
import PlayTypingArea from '../components/PlayTypingArea.vue'
import { ref } from "vue"

let intervalId: number | null | NodeJS.Timeout;
let Seconds = ref(4);
let playing = ref<boolean>(false);
function countdown(seconds: number) {
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
    <div class="row" >
        <div class="col-2 sidebar">
          <PlaySideBar v-on:countdown="countdown" :playing="playing"></PlaySideBar>
        </div>
        <div class="col-10 rightside">
          <PlayFakeTabs></PlayFakeTabs>
          <div class="countdown">
            <p v-if="Seconds > 0 && Seconds < 4" class="text-white">{{  Seconds }}</p>
            <p v-else-if="Seconds == 0" class="text-white">START</p>
          </div>
          <PlayTypingArea></PlayTypingArea>
        </div>
    </div>
    
</template>