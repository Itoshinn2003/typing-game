<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue'
import { useStore } from '../stores/index' 
import Cookies from 'js-cookie';

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
}
</script>

<template>
    <div>
    <router-link v-bind:to="'/play'" class="d-block"><button class="home-button " @click="checkGameStyle">{{ NamedButton() }}</button></router-link>
    <p v-if="props.gameStyle == 'thirtyWords'">New Record:{{ Cookies.get('wordTime') }}</p>
    <p v-if="props.gameStyle == 'Sentence'">New Record:{{ Cookies.get('sentenceTime') }}</p>
    </div>
</template>