import {httpClient} from './httpClient'

export function logIn(credentials){
    const logInDto = {
        email: credentials.email,
        password: credentials.password
    }

    return httpClient.post("/login", logInDto)
}

export function singUp (credentials) {

    return httpClient.post("/register", credentials)
}

