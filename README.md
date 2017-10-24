* 1:安装node
* 2:npm install
* 3:npm run dev

* 项目优点：完全模块化创建一个新页面只需要一分钟
* 代码风格：eslint

## 例：创建新页（如电视剧）
* 1) 找到src/router/index.js注册你的路由
* 2) 找到src/components/mg-tab添加一个router-link
* 3) 组件结构如下，传入不同id为不同路由
    <template>
      <item :id="130"></item>（如id=130为电视剧tv,id=145为音乐music，项目获取芒果卫视的真实数据，vclassId为不同页面的索引值）
    </template>

    <script type="text/ecmascript-6">
      import item from 'base/item/item'

      export default {
        components: {
          item
        }
      }
    </script>

    <style lang="stylus" rel="stylesheet/stylus">
    </style>
