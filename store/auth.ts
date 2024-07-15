import {Ref} from "vue";
import {defineStore} from "pinia";
import {BURL, ENDPOINT, HEADER_PARAMETERS} from "~/const/request";
import axios from "axios";
import {getHeadersRequest} from "~/utils/request";

export const authStore = defineStore('authStore', () => {
    const userLogin: Ref<AUTH.ILogin> = ref({
        mail: '',
        password: ''
    });

    const userSignup: Ref<AUTH.ISignupMail> = ref({
        login: '',
        mail: '',
        password: ''
    });

    const requestLogin = async (): Promise<void> => {
        const response = await axios.post(BURL + ENDPOINT.auth.login, userLogin.value, getHeadersRequest([HEADER_PARAMETERS.content]));
        console.log(response.data);
    }


    return {
        userLogin,
        userSignup,
        requestLogin
    }
})
