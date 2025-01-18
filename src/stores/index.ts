import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: false,
        wordsNumber: 0,
        sentencesNumber: 0,
        formatElapsedTime: ref<string>('0:00'),
        sentenceLetterNumber: 0,
        wordletterNumber: 0,
        sentencesArray: null as null | String[],
    }),
    actions: {
        stopStopWacth() {
            this.isStop = true;
        },
        countWordsNumber() {
            this.wordsNumber ++;
        },
        countSentencesNumber() {
            this.sentencesNumber ++;
        },
        setSentences(sentences: String[]) {
            this.sentencesArray = sentences;
        },
        resetNumber() {
            this.isStop = false,
            this.formatElapsedTime ='0:00';
            this.wordsNumber = 0;
            this.sentencesNumber = 0;
            this.sentenceLetterNumber = 0;
            this.wordletterNumber = 0;
        },
    },
})
export const gameStyle = defineStore({
    id: 'gameStyleStore',
    state: () => ({
        gameStyle: null as string | null | undefined,
    }),
    persist: true

})