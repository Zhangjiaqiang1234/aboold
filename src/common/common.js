import { Message } from 'element-ui'
export const messageInfo = (data) => {
  Message({
    message: data,
    type: 'warning'
  })
}
