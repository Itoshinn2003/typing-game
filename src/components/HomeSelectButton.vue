<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    gameStyle: String,
})

function NamedButton(): String {
    if (props.gameStyle == 'twentyWords') {
        return '20単語'
    } else if ( props.gameStyle == 'thirtyWords') {
        return '30単語'
    } else {
        return '30秒'
    }
}
</script>

<template>
    <button class="home-button">{{ NamedButton() }}</button>
</template>