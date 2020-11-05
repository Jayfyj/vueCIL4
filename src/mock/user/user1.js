import Mock from 'mockjs'
import{ urlApi } from '../../api/urlApi'

const data={ 
    "id":"@guid",
    "name":"@cname",
};

Mock.setup({
    timeout: '200-600' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
 
Mock.mock(RegExp(urlApi.user1.url + ".*"), urlApi.user1.urlMethod, (options)=>{
  console.log(options)
  return Mock.mock(data);
})

export default Mock;