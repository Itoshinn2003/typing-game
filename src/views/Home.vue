<script setup lang="ts">
import HomePlayButton from '../components/HomePlayButton.vue'
import HomeSelectButton from '../components/HomeSelectButton.vue'
import { ref, Ref } from "vue"

const isPlayStyle = ref<boolean>(true);

console.log(isPlayStyle.value);
function ifChange() {
    isPlayStyle.value = false;
}
</script>

<template>
  <div class="d-flex justify-content-evenly mt-5" v-if="isPlayStyle">
    <HomePlayButton playStyle="normal" :isPlayStyle=isPlayStyle @changeHomeState="ifChange"></HomePlayButton>
    <HomePlayButton playStyle="noMusic" :isPlayStyle=isPlayStyle></HomePlayButton>
  </div>
  <div v-else>
    <HomeSelectButton></HomeSelectButton>
    <HomeSelectButton></HomeSelectButton>
    <HomeSelectButton></HomeSelectButton>
  </div>
</template>

