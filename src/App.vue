<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import { ref, watch, } from "vue"
import { useRoute } from "vue-router";

const isHome = ref<boolean>(true);
const route = useRoute();

console.log(route);
console.log(route.path);
function checkPath() {
  if (location.pathname == '/') {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
  console.log(isHome.value);
}

watch(route, checkPath, {deep: true});
</script>

<template>
  <routerView />
</template>
