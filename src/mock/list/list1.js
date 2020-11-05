import Mock from 'mockjs'
import{ urlApi } from '../../api/urlApi'

const data=[
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  },
  {
    "title":"123",
    "content":"123"
  }
];

Mock.setup({
    timeout: '1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
 
Mock.mock(RegExp(urlApi.list1.url + ".*"), urlApi.list1.urlMethod, (options)=>{
  console.log(options)
  return Mock.mock(data);
})

export default Mock;