//接口统一管理8
var urlApi = {
  //查询商家启用状态
  getBusinessStatus:{url:"/server/business/get_business_status",urlMethod:"get"},
  //查询用户签约状态
  getUserStatus:{url:"/server/signing/get_user_status",urlMethod:"get"},
  //根据电子账户账号查询银行卡号
  getAcc:{url:"/server/ebank/get_acc",urlMethod:"get"},
  //查询电子账户详情
  getAccountData:{url:"/server/ebank/get_account_data",urlMethod:"get"},
  //查询协议内容
  getAgreementData:{url:"/server/signing/get_agreement_data",urlMethod:"get"},
  //新增-上传证件
  openAccountUpload:{url:"/server/ebank/open_account_upload",urlMethod:"post"},
  //新增-发送短信
  openAccountSendMsg:{url:"/server/ebank/open_account_send_msg",urlMethod:"post"},
  //新增-提交电子账户资料
  openAccountCommit:{url:"/server/ebank/open_account_commit",urlMethod:"post"},
  //更换绑定账户接口
  modifyAccount:{url:"/server/ebank/modify_account",urlMethod:"post"},
  //用户授权
  userAuth:{url:"/server/signing/user_auth",urlMethod:"post"},
  //用户取消授权
  openAccountCancel:{url:"/server/signing/open_account_cancel",urlMethod:"post"},
  //Ocr身份证识别
  idCardOcr:{url:"/server/ebank/id_card_ocr",urlMethod:"post"},
  //获取职业
  getOccupation:{url:"/server/ebank/get_occupation",urlMethod:"get"},
  //根据银行号获取联行号
  getInterBankNum:{url:"/server/ebank/get_inter_bank_num",urlMethod:"get"},
  //根据银行号获取联行号
  userLogin:{url:"/server/ebank/user_login",urlMethod:"get"},
  //获取已开户用户的信息
  openedAccountInfo:{url:"/server/ebank/opened_account_info",urlMethod:"get"},
}



module.exports = {
  urlApi
}
