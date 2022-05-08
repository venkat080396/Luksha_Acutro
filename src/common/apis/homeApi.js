import axios from "axios";

export default axios.create({
    baseURL: "https://sh6y4bl527.execute-api.eu-west-1.amazonaws.com/default/AcutroAPI",
    headers: {
        'Content-Type': 'application/json'
    }
});
