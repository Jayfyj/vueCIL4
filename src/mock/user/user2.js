import Mock from 'mockjs'
import{ urlApi } from '../../api/urlApi'

const data1={ 
  "id":"123",
  "name":"789",
};

 
Mock.mock(RegExp(urlApi.user2.url + ".*"), urlApi.user2.urlMethod, (options)=>{
  console.log(options)
  return Mock.mock(data1);
})


export default Mock;