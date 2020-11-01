import axios from 'axios'
import _ from 'underscore'
import qs from 'qs'



var Utils = Utils || {};
Utils.address = processEnvURL();

function processEnvURL(){
    var env = process.env.NODE_ENV;
    var url
    if(env == "development"){
        console.log("开发")
        url = '/MiniProgram'
    }else{
        console.log("生产")
        url = '';
    }
    return url
}

//获取SessionId
function getSessionId(cookieName) {
    // var c_name = 'JSESSIONID';
    // if (document.cookie.length > 0) {
    //     c_start = document.cookie.indexOf(c_name + "=")
    //     if (c_start != -1) {
    //         c_start = c_start + c_name.length + 1
    //         c_end = document.cookie.indexOf(";", c_start)
    //         if (c_end == -1) c_end = document.cookie.length
    //         return unescape(document.cookie.substring(c_start, c_end));
    //     }
    // }
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return arr[1];
        }
    }
    return "";
}


//验证账号(个数)
function verifAccount(account) {
    if (/^([1-9][0-9]{15,18})$/.test(account)) {
        return true;
    } else {
        return false;
    }
}

//验证手机(个数)
function verifPhone(phone) {
    if (/^(1[0-9]{10})$/.test(phone)) {
        return true;
    } else {
        return false;
    }
}

//验证验证吗(个数)
// function verifNum(msgVerNum) {
//     if (/^(([0-9]|[a-z]|[A-Z]){4,6})$/.test(msgVerNum)) {
//         return true;
//     } else {
//         return false;
//     }
// }

//获取路由链接的参数的值
function getUrlParam(name,testUrl) {
    if(testUrl!=""&&testUrl!=null&&testUrl!=undefined){
        var url = testUrl
    }else{
        var url = location.href
    }
    // console.log(url)
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) ||
        null
}

//时间格式
function timeFormatter(value) {
    var str = String(value)
    console.log(str)
    if (str.length == 8) {
        var y = str.slice(0, 4)
        var m = str.slice(4, 6)
        var d = str.slice(6, 8)
        return y + "-" + m + "-" + d;
    } else {
        return value
    }

}

//2020-02-02转化20200202
function enTimeFormatter(value) {
    if (value.indexOf("-") != -1) {
        var str = value.split("-")
        return str.join("")
    } else {
        return value
    }
}


//返回小程序
function goMiniProgram(pageUrl,data) {
    // var pageUrl = "/pages/authorize/authorize";
    // var data = {
    //     //授权ID
    //     chargeSigningId: this.$store.state.accUser.chargeSigningId,
    //     //状态
    //     status: this.$store.state.accUser.status,
    //     //业务账户id
    //     chargeAccountId: this.$store.state.chargeAccountId,
    //     //中文
    //     cnName: this.$store.state.accUser.name,
    //     //绑定账号
    //     acc: this.$store.state.accUser.bankNum,
    //     //客户证件号(加密)
    //     dIdI: this.$store.state.dIdI,
    //     //绑定账号开户手机号
    //     mobile: this.$store.state.accUser.mobile,
    //     //绑定账号行别代码
    //     bank: this.$store.state.accUser.bankType,
    //     //联行号
    //     accBank: this.$store.state.accUser.interBankNum,
    // }
    var dataParams = ""
    var newPageUrl = ""
    if (data) {
        for (var key in data) {
            dataParams += "&" + key + "=" + data[key];
        }
        dataParams = dataParams.replace("\&", "\?");
        newPageUrl = pageUrl + dataParams;
        console.log(newPageUrl)
        wx.miniProgram.navigateTo({ url: newPageUrl });
    } else {
        newPageUrl = pageUrl;
        console.log(newPageUrl)
        wx.miniProgram.navigateTo({ url: newPageUrl });
    }
}


//加载中
/*
text：提示
time：时间
*/
function toastShow(text, time) {
    var title = text || "";
    if (time == 1) {
        this.$toast.clear();
    } else {
        this.$toast.loading({
            message: title,
            forbidClick: true,
            duration: time,
            type:"loading",
            loadingTypeL:"spinner"
        });
    }
};

/**
 * ajax请求
 * 
 * obj:是传入的参数
 * ERS:请求成功的方法
 * ERR:请求失败的方法
 * 
 * */
function sys_doAjax(obj, RES, ERR) {
    //加载
    this.toastShow("", 0)
    var url = Utils.address + obj.servicePath;
    var jsonData = obj.jsonData || {};
    var defaults = {
            method: obj.urlMethod,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', "sessionId": "" },
            url: url
                //超时时间
                // timeout: 1000 * 10,
        }
        //get请求
    if (obj.urlMethod == "get") {
        defaults.params = jsonData
    } else if (obj.urlMethod = "post") {
        defaults.data = qs.stringify(jsonData)
    }
    axios({
        ...defaults
    }).then((res) => {
        //取消模态框
        this.toastShow("", 1)
      
        RES(res);
        
    }).catch((err) => {
        //取消模态框
        this.toastShow("", 1)
        ERR(err);
    })
}




var common = {};
common.install = function(Vue, options) {
    Vue.prototype.$sys_doAjax = sys_doAjax;
    Vue.prototype.$axios = axios;
    Vue.prototype.$_ = _;
    Vue.prototype.$utils = Utils;

    Vue.prototype.getSessionId = getSessionId;


    Vue.prototype.verifAccount = verifAccount;
    Vue.prototype.verifPhone = verifPhone;
    Vue.prototype.getUrlParam = getUrlParam
    Vue.prototype.timeFormatter = timeFormatter
    Vue.prototype.enTimeFormatter = enTimeFormatter
    Vue.prototype.goMiniProgram = goMiniProgram
    Vue.prototype.toastShow = toastShow
    // Vue.prototype.verifNum = verifNum

};
export {
    common
}