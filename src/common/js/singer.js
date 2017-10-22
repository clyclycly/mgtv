/*Singer类
 * class xxx {} 为一个类
 * constructor(为构造方法，类似java里的构造方法）
 * new一个实例的时候回自己调用构造方法constructor
 * new Singer({id:xxx;name:xxx})
 * this.id = id表示当前对象的id等于你传的id
 * 优点，面对对象，结构好点，最重要的不要我重复敲代码，哈哈哈
 * */
export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
export default class S{
  constructor() {
    if (this.msg.length) { /* 保证在有数据情况下的渲染 */
      if (this.msg[$index].moduleType === 'banner') {
        return '、'
      }
      if (this.msg[$index].moduleType === 'ipmodel') {
        return 'medium-title'
      }
      if (this.msg[$index].moduleType === 'scrossm' || this.msg[$index].moduleType === 'nonbcross' || this.msg[$index].moduleType === 'noncross') {
        return 'mg-list'
      }
      if (this.msg[$index].moduleType === 'title') {
        return 'min-title'
      }
    }
  }
}
