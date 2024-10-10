import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: false,
        wordsNumber: -1,
        sentencesNumber: -1,
        formatElapsedTime: ref<string>('0:00'),
        gameStyle: null as string | null | undefined,
        sentenceLetterNumber: 0,
        wordletterNumber: 0,
    }),
    actions: {
        stopStopWacth() {
            this.isStop = true;
            console.log(this.isStop);
        },
        countWordsNumber() {
            this.wordsNumber ++;
        },
        countSentencesNumber() {
            this.sentencesNumber ++;
        }
    },
    persist: true,
})