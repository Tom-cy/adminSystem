// 通过调用jsonp插件
import JsonP from 'jsonp'
// 封装jsonp
import axios from 'axios'

// 先导出一个对象
export default class Axios {
    // 定义一个静态的
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            // 官网jsonp第一个参数URL， 第二个opts
            JsonP(options.url, {
                param: 'callback'
                // 第三个方法 
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }
    // 定义一个静态的axios方法
    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "block"
        } 
        let baseapi = "https://www.easy-mock.com/mock/5c19f794bde1915e93ca1b49/chenzs/";
        return new Promise((resolve, reject) => {
            axios({
                    method: 'get',
                    baseURL: baseapi,
                    url: options.url,
                    timeout: 5000,
                    params: (options.data && options.data.params) || ""
                })
                .then((response) => {
                    if (options.data && options.data.isShowLoading !== false) {
                        loading = document.getElementById('ajaxLoading')
                        loading.style.display = "none"
                    }
                    if (response.status === 200) {
                        let res = response.data
                        if (res.code === 0) {
                            resolve(res)
                        } else {
                            //  model.info({
                            //      title:"提示",
                            //      content:res.msg
                            //  })
                        }
                    } else {
                        reject(response.data)
                    }
                })
        })
    }

}