const Mock = require('mockjs')

Mock.mock('/main/line-chart', "get", () => {
    return data
})

Mock.mock('http://localhost:8080/get/data', "get", () => {
    console.log('Mockjs 拦截到请求')
    return {
        code: 200,
        msg: 'success',
        data: {
            Email: createArr(),
            UnionAds: createArr(),
            VideoAds: createArr(),
            Direct: createArr(),
            SearchEngine: createArr(),
        }
    }
})

function createArr() {
    let arr = []
    for (let i = 0; i<7; i++) {
        let number = Math.round(Math.random()*350);
        arr.push(number)
    }
    return arr
}