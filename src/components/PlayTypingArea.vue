<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 
let words: String[] = ['ringo','budou','nashi','itigo'];
let wordCount = ref< number >(0);
let letterCount: number = 0;
const firstCode: String = 
   `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    </head>
    <body>
        <h1>タイピングゲーム</h1>`;

const endCode: String = 
    `    </body>
    </head>
</html>`

onMounted(() => {
    Prism.highlightAll();
});
console.log(words);


function inputWord(event: any) {
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
}
</script>
<template>
    <div class="text-white typing-word" @keydown="inputWord">
        <pre><code class="language-html">{{ firstCode }}</code></pre>
        <ul>
            <li v-for="(word, index) in words" :key="index" >
                <li v-if=" index <= wordCount ">{{ word }}</li>
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