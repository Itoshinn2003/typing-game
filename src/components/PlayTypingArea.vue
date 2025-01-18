<script setup lang="ts">
import { onMounted, ref, watch, onUpdated, onBeforeUnmount } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 
import PlayFakeTabs from '../components/PlayFakeTabs.vue';
import { useStore, gameStyle } from '../stores/index' 
import { firstCode, endCode, wordsArray} from '../constants.ts'
import Cookies from 'js-cookie';

const store = useStore();
const gameStyleStore = gameStyle();
const props = defineProps(['playing']);
let sentence = ref< null | Response>(null);
let sentencesArray = ref< [] | String[]>([]);

interface StringObject {
    [key: string]: string; 
}

let words: StringObject = {};


const middleFirstCode: String[] =['<h1>','<p>','<ul>','    <textarea>','<ul>','    <li>','    <li>','<ul>'];
const middleEndCode: String[] =['</h1>','</p>','<ul>','</textarea>','</ul>','</li>','</li>','</ul>'];
onMounted(() => {
    Prism.highlightAll();
});
onUpdated(() => {
    Prism.highlightAll();
})


document.addEventListener('keydown', handlekeyup);
onBeforeUnmount(()=>{
   document.removeEventListener('keyup', handlekeyup);
})


function handlekeyup(event: any) {
    if (gameStyleStore.gameStyle == 'twentyWords') {
        if ( event.key == Object.keys(words)[store.wordsNumber][store.wordletterNumber]) {
            store.wordletterNumber++;
            if (Object.keys(words)[store.wordsNumber].length === store.wordletterNumber) { 
                store.wordsNumber++;
                store.wordletterNumber = 0;
            }
        }
    } else {
        if ( event.key == sentencesArray.value[store.sentencesNumber][store.sentenceLetterNumber]) {
            store.sentenceLetterNumber++;
            if (sentencesArray.value[store.sentencesNumber].length === store.sentenceLetterNumber) {
                    store.sentencesNumber++;
                    store.sentenceLetterNumber = 0;
            }
        }
    }
}
           


async function fetchRandomText() {
  const url = 'https://lorem-ipsum-api.p.rapidapi.com/sentence?amount=3';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ad8ef36b78msh80bd9d002b170abp1e5d41jsn0332d379f868',
      'x-rapidapi-host': 'lorem-ipsum-api.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    sentence.value = await response.json();
    if (typeof sentence.value?.text === 'string') {
        sentencesArray.value = (sentence.value?.text as string).split('. ');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};



watch(() =>props.playing,() => {
    if(props.playing) {
        if ( gameStyleStore.gameStyle == 'threeSentences') {
            fetchRandomText(); 
        } else {
            words = {};
            for ( let word of wordsArray) {
                let key = Object.keys(word);
                const randomIndex = Math.floor(Math.random() * key.length);
                const randomKey = key[randomIndex];
                const randomValue = word[randomKey];
                words[randomKey] = randomValue;
            }
        }
    }
    },{deep:true})

watch(() => store.wordsNumber,() => {
    const wordTime = Cookies.get('wordTime');
    if (store.wordsNumber == Object.keys(words).length) {
        store.stopStopWacth();
        if ( wordTime == undefined ) {
        Cookies.set('wordTime', store.formatElapsedTime, { expires: 1000 });
        }
        if ( typeof wordTime == 'string') {
            if ( wordTime >= store.formatElapsedTime ) {
                Cookies.set('wordTime', store.formatElapsedTime, { expires: 1000 });
            }
        }
    }
}, {deep:true})

watch(() =>store.sentencesNumber, () => {
    const sentenceTime = Cookies.get('sentenceTime');
    if (store.sentencesNumber ==  sentencesArray.value?.length) {
        store.stopStopWacth();
        if ( sentenceTime == undefined ) {
          Cookies.set('sentenceTime', store.formatElapsedTime, { expires: 1000 });
        }
        if ( typeof sentenceTime == 'string' ) {
            if ( sentenceTime >= store.formatElapsedTime ) {
                Cookies.set('sentenceTime', store.formatElapsedTime, { expires: 1000 });
            }
        }
    }
})
</script>
<template>
    <PlayFakeTabs></PlayFakeTabs>
    <div class="text-white typing-word">
        <pre><code class="language-html">{{ firstCode }}</code></pre>
        <ul v-if="gameStyleStore.gameStyle == 'twentyWords' && props.playing">
            <li v-for="(word, index) in Object.keys(words)" :key="index">
                <li class="d-inline fw-bolder" v-if="index <= store.wordsNumber"><pre class="d-inline"><code class="language-html">        {{ middleFirstCode[index % 8] }}</code></pre><span v-for="(_, index2) in word" class="text-gray" ><span :class="{ textWhite: store.wordletterNumber > index2 || index < store.wordsNumber  }">{{ word[index2] }}</span></span>: 「{{ words[word] }}」<pre class="d-inline"><code class="language-html">{{ middleEndCode[index % 8] }}</code></pre></li>
            </li>
        </ul>
        <ul v-else-if="gameStyleStore.gameStyle == 'threeSentences' && props.playing">
            <li v-for="(_, index) in sentencesArray" :key="index">
                <li class="d-inline fw-bolder text-gray" v-if="index <= store.sentencesNumber"><pre class="d-inline"><code class="language-html">        {{ middleFirstCode[index % 8] }}</code></pre><span v-for="(_, index2) in sentencesArray[index] " ><span :class="{ textWhite: store.sentenceLetterNumber > index2 || index < store.sentencesNumber  }">{{ sentencesArray[index][index2] }}</span></span><pre class="d-inline"><code class="language-html">{{ middleEndCode[index % 8] }}</code></pre></li>
            </li>
        </ul>
        <pre><code class="language-html">{{ endCode }}</code></pre>

    </div>
    < />
</template>

<style>
pre[class*="language-"] {
    background-color: #242424 !important;
}
pre[class*="language-"] {
    padding: 0;
    margin: 0;
    overflow: auto;
}
</style>