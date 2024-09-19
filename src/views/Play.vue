<script setup lang="ts">
import PlayFakeTabs from '../components/PlayFakeTabs.vue'
import PlaySideBar from '../components/PlaySideBar.vue'
</script>
<template>
    <div class="row">
        <div class="col-2 sidebar">
          <PlaySideBar></PlaySideBar>
        </div>
        <div class="col-10">
          <PlayFakeTabs></PlayFakeTabs>
        </div>
    </div>
    
</template>