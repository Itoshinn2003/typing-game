<script setup lang="ts">
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism-tomorrow.css'; 
let words = ['りんご','ぶどう','なし','いちご'];
const code: String = 
   `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    </head>
    <body>
        <h1>タイピングゲーム</h1>
    </body>
    </head>
</html>`;

onMounted(() => {
    Prism.highlightAll();
});
</script>
<template>
    <div class="text-white typing-word">
        <pre><code class="language-html">{{ code }}</code></pre>
    </div>
</template>

<style>
pre[class*="language-"] {
    background-color: #242424 !important;
}
</style>