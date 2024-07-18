import {userStore} from "~/store/user";
import {storeToRefs} from "pinia";
import {COOKIES_TOKEN} from "~/const/const";
import {getCookie} from "~/utils/cookie";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (to.fullPath !== from.fullPath) return;
        const storeUser = userStore();
        const {isAuthenticated, userToken} = storeToRefs(storeUser);

        userToken.value = getCookie(COOKIES_TOKEN) || '';

        const isPageAuth = ['/signup', '/login'].includes(to.path);
        if (!isPageAuth && !isAuthenticated.value) return navigateTo('/login');
        else if (isPageAuth && isAuthenticated.value) return navigateTo('/main');
    }
})
