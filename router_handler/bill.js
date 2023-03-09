//导入数据库操作模块
const db = require('../db/index')

//添加收支类型
exports.addtag = (req, res) => {
  const body = req.body
  const sql = 'insert into bill_tag(tag_name, type, user_id) values(?, ?, ?)'
  db.query(sql, [body.tag_name, body.type, req.user.id], (err, result) => {
    if(err) return res.cc(err)
    //添加成功
    res.send({
      status: 0,
      message: '添加成功！',
    })
  })
}

// //获取记录列表
// exports.getpage = (req, res) => {
//   const page = req.body
//   //定义查询记录的SQL语句
//   const sql = 'select * from bill where date=? and type=? and tag_id=? where user_id=? order by date asc'
//   //调用 db.query 执行SQL语句
//   db.query(sql, [page.date, page.type, page.tag_id, page.page, page.page_size, req.user.id], (err,result) => {
//     const pager = {}
//     pager.pagecurrent = page.page
//     pager.page_size = page.page_size
//     pager.bill_num = result.length
//     pager.page_num = parseInt(Math.ceil(pager.bill_num / pager.page_size))
//     const datalist = result.slice((pager.pagecurrent-1) * pager.page_size , (pager.pagecurrent-1) * pager.page_size + pager.page_size)
//     if(err) return res.cc(err)
//     //查询成功
//     res.send({
//       status: 0,
//       message: '查询成功！',
//       data: datalist,
//     })
//   })
// }

// //获取单个记录
// exports.getbill = (req, res) => {
//   const body = req.body
//   //定义查询记录的SQL语句
//   const sql = 'select * from bill where id=?'
//   db.query(sql, [body.id], (err, result) => {
//     if(err) return res.cc(err)
//     //查询成功
//     res.send({
//       status: 0,
//       message: '查询成功！',
//       data: result,
//     })
//   })
// }

// //删除某个记录
// exports.deletebill = (req, res) => { 
//   const body = req.body 
//   const sql = 'delete from bill where id=?'
//   db.query(sql, [body.id], (err, result) => {
//     if(err) return res.cc(err)
//     //删除成功
//     res.send({
//       status: 0,
//       message: '删除成功！',
//     })
//   })
// }

// //编辑记录
// exports.updatebill = (req, res) => {
//   const body = req.body
//   res.send('ok')
// }

// //添加记录
// exports.addbill = (req, res) => {
//   const body = req.body
//   const sql = 'insert into bill(type, amount, date, tag_id, tag_name, remark) values(?, ?, ?, ?, ?, ?)'
//   db.query(sql, [], (err, result) => {
//     if(err) return res.cc(err)
//     //删除成功
//     res.send({
//       status: 0,
//       message: '添加成功！',
//     })
//   })
//   res.send('ok')
// }