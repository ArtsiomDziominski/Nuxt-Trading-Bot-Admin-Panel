export interface IUser {
    "login": string,
    "mail": string
}

export interface ILogin {
    "password": string,
    "mail": string
}

export interface ISignupMail {
    "login": string,
    "password": string,
    "mail": string
}

export as namespace AUTH;