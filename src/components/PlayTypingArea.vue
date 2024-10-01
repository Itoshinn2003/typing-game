<script setup lang="ts">
import { onMounted, ref, watch, onUpdated } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 

const props = defineProps(['playing']);
let words: String[] = ['ringo','budou','nashi','itigo'];
let wordCount = ref< number >(-1);
let letterCount: number = 0;
const firstCode: String = 
   `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TYPING-CODE</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    </head>
    <body>
        <h1>タイピングゲーム</h1>`;

const endCode: String = 
    `    </body>
    </head>
</html>`

const middleFirstCode: String =`<p>`
const middleEndCode: String =`</p>`
onMounted(() => {
    Prism.highlightAll();
});
onUpdated(() => {
    Prism.highlightAll();
})

// もっと簡潔なコードにしたい
// @keydownだとそのタグの要素の中でクリックしないとイベント発火しなかったのでaddEventListnerで記述
document.addEventListener('keydown', (event) => {
    for (let i = 0; i < words.length; i++) {
        if (wordCount.value == i) {
            for (let j = 0; j < words[i].length; j++) {
                if ( letterCount == j && event.key == words[i][j]) {
                    letterCount++;
                      if (words[i].length === letterCount) { 
                        wordCount.value++;
                        letterCount = 0;
                    }
                }
            }
        }
    }
});

watch(() =>props.playing,() => {
    if (!props.playing) {
        wordCount.value = -1
    } else {
        wordCount.value = 0
    }
},{deep:true})
</script>
<template>
    <div class="text-white typing-word">
        <pre><code class="language-html">{{ firstCode }}</code></pre>
        <ul>
            <li v-for="(word, index) in words" :key="index">
                <li class="d-inline" v-if=" index <= wordCount "><pre class="d-inline"><code class="language-html">        {{ middleFirstCode }}</code></pre>{{ word }}<pre class="d-inline"><code class="language-html">{{ middleEndCode }}</code></pre></li>
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