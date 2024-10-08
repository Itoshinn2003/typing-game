<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue'
import { useStore } from '../stores/index' 

const store = useStore();

const props = defineProps({
    gameStyle: String,
})

function NamedButton(): String {
    if (props.gameStyle == 'thirtyWords') {
        return '30 Words'
    } else {
        return '1 Sentence'
    }
}
function checkGameStyle() {
    store.gameStyle = props.gameStyle;
    console.log(store.gameStyle)
}
</script>

<template>
    <router-link v-bind:to="'/play'"><button class="home-button" @click="checkGameStyle">{{ NamedButton() }}</button></router-link>
</template>