<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
  
    
const props = defineProps({
    playStyle: String,
    isPlayStyle: Boolean,
})
const emits = defineEmits([
    'changeHomeState'
]
)

function onClick(): void{
    emits('changeHomeState')
}
function NamedButton(): String {
    if (props.playStyle == 'noMusic') {
        return 'NoSound'
    } else {
        return 'Play'
    }
}
</script>

<template>
    <button class="home-button" @click="onClick">{{ NamedButton() }}</button>
</template>