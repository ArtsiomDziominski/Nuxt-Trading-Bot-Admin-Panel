import {userStore} from "~/store/user";
import {storeToRefs} from "pinia";
import {COOKIES_TOKEN} from "~/const/const";
import {getCookie} from "~/utils/cookie";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const storeUser = userStore();
        const {isAuthenticated, userToken} = storeToRefs(storeUser);

        userToken.value = getCookie(COOKIES_TOKEN) || '';

        if (!isAuthenticated.value) return navigateTo('/login');
    }
})
