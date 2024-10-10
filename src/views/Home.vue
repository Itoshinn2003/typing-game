<script setup lang="ts">
import HomePlayButton from '../components/HomePlayButton.vue'
import HomeSelectButton from '../components/HomeSelectButton.vue'
import TheHeader from '../components/TheHeader.vue'
import { ref,  } from "vue"
 


const isPlayStyle = ref<boolean>(true);

function ifChange() {
  if (isPlayStyle.value) {
    isPlayStyle.value = false;
  } else {
    isPlayStyle.value = true;
  }
}
</script>

<template>
  <div class="app" >
  <TheHeader></TheHeader>
  <div class="d-flex justify-content-evenly mt-5" v-if="isPlayStyle">
    <HomePlayButton playStyle="normal" :isPlayStyle=isPlayStyle @changeHomeState="ifChange"></HomePlayButton>
    <HomePlayButton playStyle="noMusic" :isPlayStyle=isPlayStyle @changeHomeState="ifChange"></HomePlayButton>
  </div>
  <div v-else>
    <div class="d-flex justify-content-evenly mt-5">
      <HomeSelectButton gameStyle="thirtyWords"></HomeSelectButton>
      <HomeSelectButton gameStyle="threeSentences"></HomeSelectButton>
    </div>
    <button class="back-button" @click="ifChange">BACK</button>
  </div>
  </div>
</template>

