/*会和公共的配置合并*/
module.exports = {
  configureWebpack: {
    /*resolve 和路径相关的东西*/
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}