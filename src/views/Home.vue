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
    <router-link v-bind:to="'/rule'"><button class="home-button">Rule</button></router-link>
  </div>
  <div v-else>
    <div class="d-flex justify-content-evenly mt-5">
      <HomeSelectButton gameStyle="twentyWords"></HomeSelectButton>
      <HomeSelectButton gameStyle="threeSentences"></HomeSelectButton>
    </div>
    <button class="back-button" @click="ifChange">BACK</button>
  </div>
  <p class="contact">&copy; 2024 TYPING-CODE   |   Contact: itoshinnContact@gmail.com</p>
  </div>
</template>
<style>
.contact{
    position: fixed;
    bottom: 0; /* 画面の底に固定 */
    left: 0; /* 左端に配置 */
    right: 0; /* 右端に配置 */
    text-align: center; /* 中央寄せ */
}
</style>

