/**
 * 获取用户名称
 * @param {Array} userId 用户id
 * */
export default {
    methods: {
        getUserName(userId){
            const vm = this;
            return new Promise((resolve, reject) => {
                if (userId) {
                    vm.$sys_doAjax({
                        path: '/manager/user/infos',
                        jsonData: {
                            userIds: userId
                        }
                    }).then(function (data) {
                        var header = data.header,
                            code = header.code,
                            message = header.message;
                        if (code === "0") {
                            var body = data.body;
                            var user = body.user;
                            resolve(user);
                        }else{
                            reject(message)
                        }
                    }).catch(function (error) {
                        reject(error.message)
                    })
                }else{
                    reject('用户id为空');
                }
            })
        }
    }
};