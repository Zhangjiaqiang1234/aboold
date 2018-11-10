import axios from 'axios'
const baseUrl = 'http://39.108.217.205:8060'
// const baseUrl = 'http://112.74.58.173:8082' // 旧的接口
// 获取图形验证码
export const getCaptcha = () => {
  var url = '/cf/captcha.jpg'
  return axios.get(url, {
    responseType: 'blob'
  })
}
// 获取短信验证码
export const getSMSCaptcha = (data) => {
  var url = '/cf/smscaptcha'
  return axios.get(url, {params: data})
}

// 登陆
export const login = (data) => {
  var url = '/cf/sys/login'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 用户登出
export const logout = () => {
  var url = '/cf/logout2'
  return axios.get(url)
}

// 注册
export const register = (data) => {
  var url = '/cf/sys/regist'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 忘记密码
export const forget = (data) => {
  var url = '/cf/sys/forget'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 获取当前登录用户信息
export const userInfo = () => {
  var url = '/cf/sys/user/info'
  return axios.get(url)
}
// 修改邮箱
export const modifyEmail = (data) => {
  var url = '/cf/sys/user/modifyEmail'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 设置ETH地址
export const setETHAddress = (data) => {
  var url = '/cf/sys/user/setEtherWallet'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 修改ETH地址
export const modifyETHAddress = (data) => {
  var url = '/cf/sys/user/modifyEtherWallet'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}

// 修改密码
export const modifyPassword = (data) => {
  var url = '/cf/sys/user/password'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}
// 获取项目信息
export const projectInfo = () => {
  var url = '/cf/sys/sysproject/info/1'
  return axios.get(url)
}
// 获取当前用户指定项目的资格认证信息
export const getUserKYCInfo = () => {
  var url = '/cf/sys/sysauthenticate/projectAuth?projectId=1'
  return axios.get(url)
}
// 提交资格认证信息
export const submitLKYCInfo = (data) => {
  var url = '/cf/sys/sysauthenticate/save'
  return axios.post(url, data)
}
// 提交认购数量
export const submitLKYCCount = (data) => {
  var url = '/cf/sys/syssubscribe/submit'
  return axios.get(url, {params: data})
}
// // 图片上传
// export const uploadImage = (data) => {
//   var url = '/cf/sys/oss/uploadImageString'
//   return axios.post(url, data, {
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//     transformRequest: function (obj) {
//       var str = []
//       for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
//       return str.join('&')
//     }
//   })
// }
// 图片上传
export const uploadImage = (data) => {
  var url = '/api/common/upload'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

// 获取图片
export const getPic = (data) => {
  var url = '/cf/sys/sysauthenticate/projectAuth?projectId=1'
  return axios.get(url, {params: data})
}

// 获取认购信息
export const getETHConfirm = () => {
  var url = '/cf/sys/syssubscribe/listData?projectId=1'
  return axios.get(url)
}
// 登录记录
export const loginRecord = (data) => {
  var url = '/cf/sys/log/myLog'
  return axios.post(url, data, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function (obj) {
      var str = []
      for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
      return str.join('&')
    }
  })
}

// 获取新闻
export const getNews = (params) => {
  var url = '/api/news/detail/' + params
  return axios.get(url)
}
// export default {
//   getCaptcha,
//   getSMSCaptcha,
//   login,
//   logout,
//   register,
//   forget,
//   userInfo,
//   modifyEmail,
//   setETHAddress,
//   modifyETHAddress,
//   modifyPassword,
//   projectInfo,
//   getUserKYCInfo,
//   submitLKYCInfo,
//   uploadImage,
//   getPic
// }
// app下载
export const appVersionList = (data) => {
  var url = baseUrl + '/api/version/list'
  return axios.post(url, data)
}
