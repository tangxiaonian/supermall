迪米特法则

组件内的数据，尽量只做到只是该组件能用,可以封装对象在进行数据传递。

单一职责原则

各组件共同组成一个页面，组件之间 低耦合

# 首页实现

### TabController 的封装

### navbar 的封装

### scroll 的封装

### backtop 的封装

### swiper 的封装

### 吸顶盒效果实现

因为使用了better-scroll插件，直接改变tabController的posistion为fixed无效，
还是会随滚动而滚动。

解决思路: 使用2个tabController 第一个预先隐藏，到达指定吸附位置的时候，
立即显示。

1.计算tabController距离顶部的距离，要注意轮播图图片异步加载导致
获取的offsetTop值不正确的问题(解决:图片加载完成过后通知父组件再次计算offsetTop的值)。

2.监听滚动的距离是否大于tabController所在的位置，true的话，显示预先隐藏的tabController，
否则不显示。

3.2个tabController的状态改变要保持一致。

### 让Home保存离开时的位置

1. keep-alive 缓存组件

2. activated keep-alive 激活时触发
    
    重新定位，最好刷新一次
    
3. deactivated keep-alive 停用时触发
    
    记录离开时的位置
    
# 详情页

### TabBar隐藏效果实现:

顶部navbar相对定位，z-index值>其他部分的z-index

其他部分scroll包裹设置高度 包裹部分的z-index>
底部固定定位的z-index值
    
即可实现详情页隐藏tabBar