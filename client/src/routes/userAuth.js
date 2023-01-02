import api from "../services/api";

export default function isUserAuth () {
    try {
        const userData = JSON.parse(window.localStorage.getItem("user_token"));
        if(userData === null) return false
        const response = api.post('/verify-user', {
            userID: userData.userID,
            userToken: userData.token,
        })
        return true 
    } catch (err) {
        console.log(err)
        return false;
    }
};
