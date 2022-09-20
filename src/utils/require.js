const baseUrl = "https://api.github.com"
/**
 * path: 请求路径
 * baseOptions: 请求配置
 * data: 请求参数
 */
export default function baseFetch (path, data = {}) {
  const baseOptions = { //配置默认设置
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    }
  }
  let { method } = baseOptions
  // 判断请求方式
  if (method === "GET") {
    // encodeURIComponent 对特殊参数进行编译
    let queryParams = Object.keys(data)
      .map(k => `${k}=${data[k]}`)
      .join("&");
    if (queryParams) path += `?${queryParams}`;
  } else {
    // 把请求的参数放到body
    baseOptions.body = JSON.stringify(data)
  }
  //  console.log(path,'path')
  // 发送请求并返回一个promise对象
  return fetch(`${baseUrl}${path}`, baseOptions).
    then(response => {
      switch (response.status) {
      case 404:
        alert("请求超时！")
        window.history.back()
        break
      case 403:
        alert("请求太频繁了")
        location.reload();
        break
      default:
        return response.json()
      }
    })
    .catch(() => alert("请求失败"))
}
