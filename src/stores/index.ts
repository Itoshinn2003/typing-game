import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: false,
        wordsNumber: 0,
        sentencesNumber: 0,
        formatElapsedTime: ref<string>('0:00'),
        gameStyle: null as string | null | undefined,
        sentenceLetterNumber: 0,
        wordletterNumber: 0,
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
        }
    },
    persist: true,
})