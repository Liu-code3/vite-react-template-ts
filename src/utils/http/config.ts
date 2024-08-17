import type { AxiosError } from 'axios'

// 以下这些code需要重新登录
const reloadCodes: number[] = [401, 1011007, 1011008]

const requestConfig = {
  // TokenName // Authorization
  TOKEN_NAME: 'token',
  // Token前缀，注意最后有个空格，如不需要需设置空字符串 // Bearer
  TOKEN_PREFIX: '',
  // 请求是否开启缓存
  REQUEST_CACHE: true,
  // 追加其他头
  HEADERS: {},
}

const errorCodeMap: { [key: number]: string } = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
function handlerError(error: AxiosError) {
  const status = error.response && error.response.status
  const description = status && errorCodeMap[status]
  // TODO 消息提示
  // message.error(`${description}`, { duration: 3000 });
  console.log('=>(config.ts:35) description', description)
}

export {
  requestConfig,
  reloadCodes,
  handlerError,
}
