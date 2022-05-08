import axios from "axios";

export default axios.create({
    baseURL: "https://mhgim8mpk1.execute-api.eu-west-1.amazonaws.com/default/AcutroAPI",
    headers: {
        'Content-Type': 'application/json'
    }
});