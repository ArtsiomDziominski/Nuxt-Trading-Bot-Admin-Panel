export const BURL = 'https://anturium.online';
export const ANTURIUM_STORE_KEY = 'anutium_key';

export const HEADER_PARAMETERS = {
    content : {
        key : "Content-Type",
        body: 'application/json'
    },
    accept: {
        key : 'Accept',
        body : 'application/json'
    },
    authorization : {
        key : 'Authorization',
        body : 'Bearer'
    }
}

export const ENDPOINT = {
    auth: {
        login: '/auth/login',
        signupMail: '/auth/registration'
    }
}