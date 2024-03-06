import axios from "axios";

const instance=axios.create({
    baseURL:'https://shorty.westeurope.cloudapp.azure.com/'
});

export default instance;