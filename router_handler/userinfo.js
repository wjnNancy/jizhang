//导入数据库操作模块
const db = require('../db/index')
//导入加密包
const bcrypt = require('bcryptjs')

// 重置密码的处理函数
exports.modifyPwd = (req, res) => {
  const body = req.body
  // 判断数据是否合法
  if (!body.oldPwd || !body.newPwd || !body.newPwd2) {
    return res.cc('密码不能为空！')
  }
  if(body.oldPwd == body.newPwd){
    return res.cc('新旧密码不能相同！')
  }
  if(body.newPwd != body.newPwd2){
    return res.cc('再次输入的密码需与新密码一致！')
  }
  // 定义根据 id 查询用户数据的 SQL 语句
  const sql = `select * from user where id=?`
  // 执行 SQL 语句查询用户是否存在
  db.query(sql, req.user.id, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 检查指定 id 的用户是否存在
    if (results.length !== 1) return res.cc('用户不存在！')

    // 判断提交的旧密码是否正确
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if (!compareResult) return res.cc('原密码错误！')
    
    // 定义更新用户密码的 SQL 语句
    const sql = `update user set password=? where id=?`

    // 对新密码进行 bcrypt 加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

    // 执行 SQL 语句，根据 id 更新用户的密码
    db.query(sql, [newPwd, req.user.id], (err, results) => {
      // SQL 语句执行失败
      if (err) return res.cc(err)

      // SQL 语句执行成功，但是影响行数不等于 1
      if (results.affectedRows !== 1) return res.cc('更新密码失败！')

      // 更新密码成功
      res.cc('更新密码成功！', 0)
    })
  })
}
