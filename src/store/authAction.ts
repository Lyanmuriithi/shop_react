import { SET_AUTHENTICATED } from "./type";

interface AuthType {
    name: string; 
    isLoggedIn: boolean; 
}

export const setAuthentication = (isAuthenticated: AuthType) => {
    return {
        type: SET_AUTHENTICATED,
        isAuthenticated: isAuthenticated
    };
};