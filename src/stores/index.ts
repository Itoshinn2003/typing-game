import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: false,
        wordsNumber: -1,
        sentencesNumber: -1,
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
        }
    },
})
export const gameStyle = defineStore({
    id: 'gameStyleStore',
    state: () => ({
        gameStyle: null as string | null | undefined,
    }),
    persist: true

})