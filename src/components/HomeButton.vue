<script setup lang="ts">
import { defineProps } from 'vue'
  
    
const props = defineProps({
    playStyle: String,
})

function NamedButton(): String {
    if (props.playStyle == 'noMusic') {
        return 'No Sound'
    } else {
        return 'Play'
    }
}
</script>

<template>
    <button class="home-button ">{{ NamedButton() }}</button>
</template>