import { AUTHENTICATED, NOT_AUTHENTICATED } from '.';
import { SIGNED_IN, SIGNED_OUT } from '.';


export const signIn = (userId) => {
    return {
        type: SIGNED_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGNED_OUT
    };
};

// this will be used when we are establishing the token like on signup or login
const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).valueOf());
}

// this will be used for requests where we need to find, or use the token or retrieve a token for something like logging outside
const getToken = () => {
    const now = new Date(Date.now().valueOf());
    let minutesToAdd = 30;

    const thirtyMinutes = 1000 * 60 * minutesToAdd; //javascript must work in milliseconds so 1 minute = 60000

    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");

    if (timeSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token");
    }

}; //we set the expiration time to 30 minutes because devise configuration for rails api specifies the token will expire in 30 min