import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.baseURL = "http://localhost:8000"
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    return {
        provide: {
            axios:axios
        }
    }

})