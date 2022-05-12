import axios from "axios";
export const baseURL = "https://sh6y4bl527.execute-api.eu-west-1.amazonaws.com/default/AcutroAPI"

export const homeApi = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});