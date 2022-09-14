import axios from "axios";
export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost:8080/",
        timeout: 3000
    })
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        return Promise.reject(error)
    })
    instance.interceptors.response.use(response => {
        return response
    }, error => {
        return Promise.reject(error)
    })

    return instance(config)
}