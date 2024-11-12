import axios from 'axios'

const BASE_URL ="http://localhost:3500/api/";




export default axios.create({
    baseURL:BASE_URL,
    headers: { "Content-Type" : 'application/json'},
})


export const axiosPrivate= axios.create({
    baseURL:BASE_URL,
    headers: { "Content-Type" : 'application/json'},
    withCredentials:true,    
})


export const AuthURL={
    RegisterPost:"signup",
    LoginPost:"/login",
    LogoutGet:"logout",
    VerifyEPost:"verify-email",
    ResendVCodePost:"resend-verification-code",
}

// export const PasswordReset={
//     ForgottenPost:"user/password/forgot-password",
//     VerifyResetCodePost:"user/password/verify-forgot-Password-code",
//     ResetPasswordPost:"user/password/reset-password"
// }

export const Routines={
    getRoutinesGET:"routines",
    addRoutinePOST:"routines",
    getDayRoutinesGET:"routines/day",
    updateRoutinePATCH:"routines/item",
    removeRoutineDELETE:"routines/item",
};

export const Techniques={
    getTechniquesGET:"techniques",
    updateTechniquesPOST:"techniques",
}