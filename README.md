# abo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 官网网址：http://www.abochain.io

# 注意事项：安装的依赖中 vue-particles/index.js 中 要改成 
/* eslint-disable */
import particles from './vue-particles.vue'

var VueParticles = {
    install: function (Vue, options) {
        Vue.component('vue-particles', particles)
    }
}

export default VueParticles
/* eslint-disable */
否则IE下会报错
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
