import axios from 'axios'

//不用export default的话，可以导出多个实例
export function request(config) {

  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });

  //2.axios的拦截器
  //2.1 请求拦截
  instance.interceptors.request.use(
    function (config) {
      //作用：
      //1.比如config中的一些信息不符合服务器的要求
      //2.比如每次发送网络请求时，都希望在界面显示一个请求的图标
      //3.某些网络请求（比如登录），必须携带一些特殊的信息
      return config;
    },
    function (err) {
      // console.log(err);
    }
  )

  //2.2 响应拦截
  instance.interceptors.response.use(
    function (res) {
      // console.log(res)
      return res.data;
    },
    function (err) {
      console.log(err)
    }
  )

  //3.发送真正的网络请求
  //return的是promise
  return instance(config);

}

