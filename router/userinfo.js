const express = require('express')
const router = express.Router()

// 导入用户信息的处理函数模块
const userinfo_handler = require('../router_handler/userinfo')

// 重置密码的路由
router.post('/modifyPwd', userinfo_handler.modifyPwd)

module.exports = router

