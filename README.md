# 1:安装node
# 2:npm install
# 3:npm run dev
# 4:创建新的路由
    1) 找到src/router/index.js注册你的路由
    2) 找到src/components/mg-tab添加一个router-link
    3) 组件结构如下，传入不同id为不同路由（如id=130为电视剧tv,id=145为音乐music，项目获取芒果卫视的真实数据vclassId为不同页面的索引值）
    <template>
      <item :id="130"></item>
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

> 项目优点：结构清晰，创建一个新页面只有一分钟
下次更新：播放页子路由
> 使用技术：vue + style
代码风格：eslint
