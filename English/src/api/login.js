
 import service from '@/utils/fetch'
 export function login(userCode, password) {       //fetch  promise用法
   return service({
     url: 'Admin/LoginIn',
     method: 'get',
     params: {
       userCode,
       password
     }
   })
 }



