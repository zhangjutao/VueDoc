# CSS

---

## Position属性四个值：static、fixed、absolute和relative的区别和用法
1. static（静态定位）：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

2. relative（相对定位）：生成相对定位的元素（未脱离正常文档流），通过top,bottom,left,right的设置相对于其正常（原先本身）位置进行定位。可通过z-index进行层次分级。　　

3. absolute（绝对定位）：生成绝对定位的元素（脱离文档流），相对于<font color="red"> static 定位以外的第一个父元素</font>进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

4. fixed（固定定位）：生成绝对定位的元素（脱离文档流），相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

:::  tip absolute和relative的关系
其实absolute跟relative是相互独立的，但是因为absolute会以第一个position非static的父元素作为定位，而且relative元素不脱离正常的文档流，因此为了定位准确，常常将需要absolute定位元素的父元素设置为relative，这样既不影响父元素的定位，又能准确的将子元素进行absolute定位

:::

---

## 元信息类标签详解
所谓元信息标签，是指描述自身的信息，元信息类标签，就是HTML用于描述文档自身的一类标签，他们通常出现在head标签中，一般不会在页面被显示出来（与此相对，其他标签，如语义标签，描述的就是业务）

* title: 标题

* base: 给页面上所有的URL相对地址提供一个基础。是一个历史遗留标签，最多只有一个

* meta: 通过的元信息表示标签。由一组键值对组成
   1. 一般的meta标签由name和content两个属性来定义。例如
    	```html 
      <meta	name="application-name"	content="lsForums">
      ```
   2. 为了简化写法, meta标签新增了charset属性。可以无需name/content的写法。
      ```html 
      <meta charset='UTF-8'>
      ```
   3. 具有http-equiv属性的meta标签，表示执行一个命令，这样的meta标签可以不需要name属性了。
      ```html 
      <meta	http-equiv="content-type"	content="text/html;	charset=UTF-8">
      ```
      ```
      除了content-type，还有以下几种命令：  
         * content-language	指定内容的语言  
         * default-style	指定默认样式表   
         * refresh	刷新   
         * set-cookie	模拟http头set-cookie，设置cookie   
         * x-ua-compatible	模拟http头x-ua-compatible，声明ua兼容性   
         * content-security-policy	模拟http头content-security-policy，声明内容安全策略 
      ```  
   4. name为viewport的meta  
    <font color="red">没有在HTML标准中定义，却是移动端开发的事实标准</font>,这类meta的name属性为viewport，它的content是一个复杂结构，是用逗号分隔的键值对，键值对的格式 是key=value。   
    ```html
    <meta	name="viewport"	content="width=500,	initial-scale=1">
    ```
       * width：页面宽度，可以取值具体的数字，也可以是device-width，表示跟设备宽度相等。
       * height：页面高度，可以取值具体的数字，也可以是device-height，表示跟设备高度相等
       * initial-scale：初始缩放比例
       * minimum-scale：最小缩放比例
       * maximum-scale：最大缩放比例
       * user-scalable：是否允许用户缩放
   5. 其它预定义的meta 
       * author:	页面作者
       * description：页面描述，这个属性可能被用于搜索引擎或者其它场合
       * generator:	生成页面所使用的工具，主要用于可视化编辑器，如果是手写HTML的网页，不需要加这个 meta
       * <font color="red">keywords:	页面关键字，对于SEO场景非常关键</font>
       * referrer:	跳转策略，是一种安全考量
       * theme-color:	页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的UI（如窗口边框 或者tab的颜色）
   6. meta标签的用法扩展
      ```js
       <meta	http-equiv="X-UA-Compatible"	content="IE=edge,chrome=1"> 
       <!--	默认使用最新浏览器	--> 
       <meta	http-equiv="Cache-Control"	content="no-siteapp"> 
       <!--	不被网页(加速)转码	--> 
       <meta	name="robots"	content="index,follow"> 
       <!--	搜索引擎抓取	--> 
       <meta	name="renderer"	content="webkit"> 
       <meta	name="viewport"	content="width=device-width,	initial-scale=1,	maximum-scale=1,	minimum-sc ale=1,	user-scalable=no,	minimal-ui"> 
       <meta	name="apple-mobile-web-app-capable"	content="yes">
       <!--	删除苹果默认的工具栏和菜单栏	--> 
       <meta	name="apple-mobile-web-app-status-bar-style"	content="black-translucent"> 
       <!--	设置苹果工具栏颜色	-->

       <meta	name="format-detection"	content="telephone=no"> 
       <meta	name="format-detection"	content="date=no"> 
       <meta	name="format-detection"	content="address=no"> 
       <meta	name="format-detection"	content="email=no"> 
       关闭iOS上的内容识别
      ```

---
