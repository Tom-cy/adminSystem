// 通过调用jsonp插件
import JsonP from 'jsonp'
// 封装jsonp
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
}