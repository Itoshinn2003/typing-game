import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore({
    id: 'Store',
    state: () => ({
        isStop: ref(false),
        wordsNumber: ref(0),
    }),
    actions: {
        stopStopWacth() {
            this.isStop = true;
        },
        countWordsNumber() {
            this.wordsNumber ++;
        }
    }
})