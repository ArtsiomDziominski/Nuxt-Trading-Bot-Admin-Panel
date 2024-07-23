import {defineStore} from "pinia";

export const apiStore = defineStore('apiStore', () => {
    const config = computed(() => useRuntimeConfig());
    const BURL = computed(() => config.value.public.API_URL);
    return {
        BURL
    };
});