## vue版芒果tv
* api api是通过axios绕过接口限制拿到的真实数据

## 使用步骤
* 下载 
  gtt clone https://github.com/clyclycly/mgtv
* 
* 组件结构如下，传入不同id为不同路由
#
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
