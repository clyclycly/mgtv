## vue版芒果TV

> api api是通过axios绕过接口限制拿到的真实数据

## 使用步骤

``` bash
# 下载
git clone https://github.com/clyclycly/mgtv

# 安装依赖
npm install

# 运行开发环境
npm run dev

# 构建生产环境
npm run build

## 技术栈
 + vue2：基础框架
 + vue-router2：路由跳转
 + vuex：全局数据管理
 + es6：采用部分es6特性，大大简化了写法
 + webpack：vue-cli基于webpack，修改了部分配置
 + axios：基于Promise的http库，用来请求数据
 + style：写起css来十分方便，需要安装style-loader，另外使用自定义其中的自定义函数配合rem来适配移动端设备简直不要太方便
 + flex：弹性布局，在移动端兼容性较好，写各种布局非常方便
 
 ## 说明
1. 这个项目大小组件大概二十几个，目前还未完工，以后还会继续更新，目标是还原整个芒果TV（虽然不知道什么时候能填完坑o(╯□╰)o）。
2. 关于路由，刚开始设计路由的时候想了很多，由于一开始的目标就是芒果TV的所有内容，所以设计了三级路由，/root/index/recommed，大概这样，[点击查看](https://github.com/tgxhx/vue-music/blob/e43c4975e42b93b6ccf5d8609687879a589d4d8f/src/router/index.js)。
3. 关于体会，写到这个项目也算是对vue全家桶比较熟了，体会就是，不论是简单的复杂的项目，只要分割成一个个组件再拼起来，也没什么难的，组件之间通信又有vuex，也是非常简单的，总之就是熟能生巧。
4. 关于难点，对于自己来说，audio标签以前没有接触过，有点麻烦，不过还算有[相关文档](http://caibaojian.com/html5-audio.html)music/blob/771218f2929de6b64a34c62597777a4fc0b6ed6e/src/components/Player.vue)；
5. 关于打包后的资源路径，比如要放在二级目录www.xxx.com/music，那么修改config/index.js中的assetsPublicPath: '/music/'即可。
6. 关于移动设备适配，我使用的是js动态设置html元素font-size的方式，页面元素使用rem，这样可达到在不同设备下显示内容基本一样的效果


## 部分截图
![](http://wx4.sinaimg.cn/large/7b9a6229ly1fhwlyxi2mrj20ad0icn43.jpg)![](http://wx4.sinaimg.cn/large/7b9a6229ly1fhwlz0lmr2j20ac0idmzv.jpg)
![](http://wx2.sinaimg.cn/large/7b9a6229ly1fhwlz4rv98j20ac0ic78c.jpg)![](http://wx1.sinaimg.cn/mw690/7b9a6229ly1fhwlz76gf8j20ac0idq4u.jpg)
![](http://wx1.sinaimg.cn/mw690/7b9a6229ly1fhwlzckmt6j20ac0idtdf.jpg)![](http://wx2.sinaimg.cn/mw690/7b9a6229ly1fhwlzevul9j20ac0ic76k.jpg)
![](http://wx3.sinaimg.cn/mw690/7b9a6229ly1fhwlzgb1uvj20ad0id0tp.jpg)![](http://wx1.sinaimg.cn/mw690/7b9a6229ly1fhwlzlcu5ej20ac0idq6w.jpg)
