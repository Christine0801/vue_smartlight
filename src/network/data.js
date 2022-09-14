import  {request} from "@/network/index";

export const getMenu = (param) => {
    return request({
        url: '',
        method: "POST",
        data: param
    })
}

export const getData = () => {
    return request({
        url: '/get/data'
    })
}