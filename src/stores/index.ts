import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: ref(false),
        wordsNumber: ref(0),
        sentencesNumber: ref(0),
        gameStyle: ref<string | null | undefined>(null),

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
    }
})