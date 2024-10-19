<script setup lang="ts">
import { ref, watch, } from "vue"
import { useRoute } from "vue-router";

const isHome = ref<boolean>(true);
const route = useRoute();
function checkPath() {
  if (location.pathname == '/') {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
}

watch(route, checkPath, {deep: true});
</script>

<template>
  <routerView />
</template>
