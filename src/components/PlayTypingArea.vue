<script setup lang="ts">
import { onMounted, ref, watch, onUpdated } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 
import PlayFakeTabs from '../components/PlayFakeTabs.vue';
import { useStore } from '../stores/index' 

const store = useStore();
const props = defineProps(['playing']);
let words: { [key: string]: string } = {'ringo':'りんご','budou':'ぶどう','nashi':'なし','itigo':'いちご','fruits':'フルーツ','september':'9月','life':'人生','animal':'動物'};
let wordCount = ref<number>(-1);
let letterCount: number = 0;
const firstCode: String = 
   `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>TYPING-CODE</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    </head>
    <body>
        <header>
        <div class="logo">
            <h1>タイピングゲーム</h1>
        </div>
        </header>`;

const endCode: String = 
    `    <script src="https://code.jquery.com/jquery-3.6.0.min.js">
    </body>
    </head>
</html>`;


const middleFirstCode: String[] =['<h1>','<ul>','    <p>','    <textarea>','<ul>','    <li>','    <li>','<ul>'];
const middleEndCode: String[] =['</h1>','<ul>','</p>','</textarea>','</ul>','</li>','</li>','</ul>'];
onMounted(() => {
    Prism.highlightAll();
});
onUpdated(() => {
    Prism.highlightAll();
})

// もっと簡潔なコードにしたい
// @keydownだとそのタグの要素の中でクリックしないとイベント発火しなかったのでaddEventListnerで記述
document.addEventListener('keydown', (event) => {
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


    // let i = 0;
    // for (let key in words) { 
    //   if (wordCount.value == i) {
    //     for (let j = 0; j < words[key].length; j++) {
    //         if (letterCount == j && event.key == words[key][j]) {
    //             letterCount++;
    //             if (words[key].length === letterCount) {
    //                 wordCount.value++;
    //                 letterCount = 0;
    //             }
    //         }
    //     }
    //   }
    //   i++;
    // }
});

watch(() =>props.playing,() => {
    if (!props.playing) {
        wordCount.value = -1;
    } else {
        wordCount.value = 0
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

</script>
<template>
    <PlayFakeTabs></PlayFakeTabs>
    <div class="text-white typing-word">
        <pre><code class="language-html">{{ firstCode }}</code></pre>
        <ul>
            <li v-for="(word, index) in Object.keys(words)" :key="index">
                <li class="d-inline fw-bolder" v-if=" index <= wordCount"><pre class="d-inline"><code class="language-html">        {{ middleFirstCode[index % 8] }}</code></pre>{{ word }}: 「{{ words[word] }}」<pre class="d-inline"><code class="language-html">{{ middleEndCode[index % 8] }}</code></pre></li>
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