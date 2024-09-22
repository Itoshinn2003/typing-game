<script setup lang="ts">
import { defineProps, defineEmits, } from 'vue'

const props = defineProps({
    gameStyle: String,
})

function NamedButton(): String {
    if (props.gameStyle == 'thirtyWords') {
        return '30単語'
    } else if ( props.gameStyle == 'tenSentences') {
        return '10文章'
    } else {
        return '10関数'
    }
}
</script>

<template>
    <router-link v-bind:to="'/play'"><button class="home-button">{{ NamedButton() }}</button></router-link>
</template>