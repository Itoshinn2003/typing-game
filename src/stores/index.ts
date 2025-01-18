import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        playing: false,
        isStop: false,
        wordsNumber: 0,
        wordletterNumber: 0,
        formatElapsedTime: ref<string>('0:00'),
        sentencesArray: null as null | String[],
    }),
    actions: {
        stopStopWacth() {

            this.isStop = true;
        },
        countWordsNumber() {
            this.wordsNumber ++;
        },
        setSentences(sentences: String[]) {
            this.sentencesArray = sentences;
        },
        resetNumber() {
            this.isStop = false,
            this.formatElapsedTime ='0:00';
            this.wordsNumber = 0;
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