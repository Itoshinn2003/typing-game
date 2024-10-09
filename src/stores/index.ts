import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: false,
        wordsNumber: 0,
        sentencesNumber: 0,
        gameStyle: null as string | null | undefined,

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