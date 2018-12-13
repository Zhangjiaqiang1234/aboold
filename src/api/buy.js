import axios from 'axios'

// 根据 id 获取 单条新闻信息
export function getArticle(baseUrl, id) {
  // return request({
  //   url: '/admin/v1/article/getArticle',
  //   method: 'post',
  //   newType: true,
  //   data: { data: JSON.stringify({ 'id': id }) }
  // })

  var url = baseUrl + '/admin/v1/article/getArticle?data={"id":' + 48 + '}'
  console.log('url = ')
  console.log(url)
  return axios.get(url)

  // return axios.post(baseUrl + '/admin/v1/article/getArticle', { data: JSON.stringify({ 'id': id })}, {
  //   transformRequest: function (obj) {
  //     var str = []
  //     for (var p in obj) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])) }
  //     return str.join('&')
  //   }
  // })
}