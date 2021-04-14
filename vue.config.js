// 类似webpack配置
module.exports = {
  publicPath:process.env.NODE_ENV === 'production' ? '/vuedemo/' : '/' ,
  devServer:{
    open:true
  }
}