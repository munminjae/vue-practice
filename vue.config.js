/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');  //prefetch 삭제
  }
}
//import(/* webpackPrefetch: true */ './views/About.vue');
