import {Ref} from "vue";
import {defineStore} from "pinia";
import {setCookie} from "~/utils/cookie";
import {COOKIES_TOKEN} from "~/const/const";

export const userStore = defineStore('userStore', () => {
    const user: Ref<USER.IUser> = ref({
        mail: '',
        login: ''
    });

    const userToken: Ref<string> = ref('');

    const isAuthenticated= computed(() => !!userToken.value);

    const saveToken = async (token: string): Promise<void> => {
        userToken.value = token;
        setCookie(COOKIES_TOKEN, token, 10);
    }

    return {
        user,
        userToken,
        isAuthenticated,
        saveToken
    }
})
