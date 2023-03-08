// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: '127.0.0.1', // 域名，这是本机域名
  user: 'root', // MySQL 登录用户名
  password: '111111', // MySQL 登录密码 一般都是 root
  database: 'jizhang', // 要连接的数据库名

})

// 向外共享 db 数据库连接对象
module.exports = db
