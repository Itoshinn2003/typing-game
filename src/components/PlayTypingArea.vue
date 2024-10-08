<script setup lang="ts">
import { onMounted, ref, watch, onUpdated } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 
import PlayFakeTabs from '../components/PlayFakeTabs.vue';
import { useStore } from '../stores/index' 
import { firstCode, endCode, words } from '../constants.ts'

const store = useStore();
const props = defineProps(['playing']);
let wordCount = ref<number>(-1);
let letterCount: number = 0;
let sentence = ref< null | Response>(null);
let sentenceCount = ref<number>(-1);
let sentenceLetterCount: number = 0;
let sentencesArray = ref<string[] | null>(null)


const middleFirstCode: String[] =['<h1>','<ul>','    <p>','    <textarea>','<ul>','    <li>','    <li>','<ul>'];
const middleEndCode: String[] =['</h1>','<ul>','</p>','</textarea>','</ul>','</li>','</li>','</ul>'];
onMounted(() => {
    Prism.highlightAll();
});
onUpdated(() => {
    Prism.highlightAll();
})

// もっと簡潔なコードにしたい
document.addEventListener('keydown', (event) =>{
    if (store.gameStyle == 'thirtyWords') {
        for (let i = 0; i < Object.keys(words).length; i++) {
        if (wordCount.value == i) {
            for (let j = 0; j < Object.keys(words)[i].length; j++) {
                if ( letterCount == j && event.key == Object.keys(words)[i][j]) {
                    letterCount++;
                      if (Object.keys(words)[i].length === letterCount) { 
                        wordCount.value++;
                        letterCount = 0;
                    }
                }
            }
        }
    }
    } else {
       for (let i = 0; i < sentencesArray.value.length; i++) {
           if (sentenceCount.value == i) {
            for (let j = 0; j < sentencesArray.value[i].length; j++) {
                if ( sentenceLetterCount == j && event.key == sentencesArray.value[i][j]) {
                    sentenceLetterCount++;
                    if (sentencesArray.value[i].length === sentenceLetterCount) {
                        sentenceCount.value++;
                        sentenceLetterCount = 0;
                    }
                }
            }
           }
       }
    }
});


async function fetchRandomText() {
  const url = 'https://lorem-ipsum-api.p.rapidapi.com/sentence?amount=5';
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
        console.log(sentencesArray);
    }
    console.log(sentence.value?.text)
  } catch (error) {
    console.error(error);
    throw error;
  }
};



watch(() =>props.playing,() => {
    if ( store.gameStyle == 'Sentence') {
        fetchRandomText();
        if (!props.playing) {
            sentenceCount.value = -1;
        } else {
            sentenceCount.value = 0
            console.log(sentenceCount.value);
        }
    } else {
        if (!props.playing) {
        wordCount.value = -1;
    } else {
        wordCount.value = 0
    }
    }
},{deep:true})
watch(wordCount,() => {
    if (wordCount.value != -1 && wordCount.value != 0) {
        store.countWordsNumber();
    }
    if (wordCount.value == Object.keys(words).length) {
        store.stopStopWacth();
    }
}, {deep:true})

watch(sentenceCount, () => {
    if (sentenceCount.value != -1 && sentenceCount.value != 0) {
        store.countSentencesNumber();
    }
    if (sentenceCount.value == sentencesArray.value?.length) {
        store.stopStopWacth();
    }
})

</script>
<template>
    <PlayFakeTabs></PlayFakeTabs>
    <div class="text-white typing-word">
        <pre><code class="language-html">{{ firstCode }}</code></pre>
        <ul v-if="store.gameStyle == 'thirtyWords'">
            <li v-for="(word, index) in Object.keys(words)" :key="index">
                <li class="d-inline fw-bolder" v-if=" index <= wordCount"><pre class="d-inline"><code class="language-html">        {{ middleFirstCode[index % 8] }}</code></pre>{{ word }}: 「{{ words[word] }}」<pre class="d-inline"><code class="language-html">{{ middleEndCode[index % 8] }}</code></pre></li>
            </li>
        </ul>
        <ul v-else>
            <li v-for="(word, index) in sentencesArray" :key="index">
                <li class="d-inline fw-bolder" v-if=" index <= sentenceCount"><pre class="d-inline"><code class="language-html">        {{ middleFirstCode[index % 8] }}</code></pre>{{ word }}: 「{{ sentencesArray[index] }}」<pre class="d-inline"><code class="language-html">{{ middleEndCode[index % 8] }}</code></pre></li>
            </li>
        </ul>
        <pre><code class="language-html">{{ endCode }}</code></pre>

    </div>
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