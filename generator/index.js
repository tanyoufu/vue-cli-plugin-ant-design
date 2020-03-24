module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'ant-design-vue': '^1.5.0-rc.5'
    }
  })

  api.injectImports('src/main.js', `import './plugins/element.js'`)

  api.render({
    './src/plugins/element.js': './templates/src/plugins/ant-design-vue.js',
    './src/App.vue': './templates/src/App.vue'
  })

  api.onCreateComplete(() => {
    console.log('已安装ant-design-vue')
  })
}