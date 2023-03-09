const express = require('express')
const router = express.Router()

// 导入收支记录编辑的处理函数模块
const bill_handler = require('../router_handler/bill')

//添加收支类型
router.post('/addtag', bill_handler.addtag)
//添加收支记录
router.post('/addbill', bill_handler.addbill)
// //获得分页表单
// router.get('/getpage', bill_handler.getpage)
// //获得收支记录
// router.get('/getbill', bill_handler.getbill)
// //删除收支记录
// router.delete('/deletebill', bill_handler.deletebill)
// //编辑收支记录
// router.put('/updatebill', bill_handler.updatebill)

module.exports = router