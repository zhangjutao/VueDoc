# javascript

---
## JavaScript中的隐式转换和!![]==true与[]==true的思考
[链接](https://blog.csdn.net/u014465934/article/details/84642329)
1. 问题
```js
!![] == true //结果是true 
[] == true   //结果是false 
![] == []    //结果是true
```

2. 解析
[]的类型转换规则   
   ```js
    [] 转为字符串是 ""       // String([]) 返回""
    [] 转为数字是 0            // Number([]) 返回0
    [] 转为布尔值是 true        // Boolean([]) 返回true
    true 转为数字是 1       // Number(true) 返回1
    false 转为数字是 0      // Number(false) 返回0
   ```
   2. 
3. 重点说说，相等运算符（==） 在遇到两个操作数类型不同的时候，要遵守的规则和类型转换：
   1. 如果一个值是null, 另一个是undefined，则它们相等
    ```js
      null == undefined //返回true 
    ```
   2. 如果一个值是数字，另一个是字符串，先将字符串转换为数字，然后使用转换后的值进行比较。
    ```js
      1 == "1" //1==1  //结果是true
      2 == "1" //2==1  //结果是false
    ```
   3. 如果其中一个值是true，则将其转换为1再进行比较。如果其中一个值是false，则将其转换为0再进行比较。
    ```js
      "1" == true     //1==1 结果是true
      0 == false      //0==0 结果是true
    ```
   4. 如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值，然后再进行比较。对象通过toString()方法或者valueOf()方法转换为原始值，JavaScript语言核心的内置类先尝试使用valueOf()，再尝试使用toString()，除了日期类，日期类只能使用toString()转换，那些不是JavaScript语言核心中的对象则通过各自的实现中定义的方法转换为原始值。   
    ```js
      var obj = new Date();
      console.log(obj);//Wed May 10 2017 12:19:05 GMT+0800 (中国标准时间)
      console.log(obj.valueOf());//1494389910179

      var obj = new Date();
      console.log(obj);//Wed May 10 2017 18:20:05 GMT+0800 (中国标准时间)
      console.log(typeof obj);//object
      console.log(obj.toString());//"Wed May 10 2017 18:20:05 GMT+0800 (中国标准时间)"
      console.log(typeof obj.toString());//string
    ```
    >原始值：不可变更的值，包括undefined、null、布尔值、数字、和字符串。
    >所有的对象都有toString() 和 valueOf()这两个方法。
    >toString()方法的作用是，返回一个反映这个对象的字符串。
    >valueOf()方法的作用是，一个对象那个如果存在任意原始值，它就默认将对象转换为表示它的原始值。
   5、其他不同类型之间的比较均不相等
4. 结果解析
```js
!![] == true //结果是true   []先转为 布尔值（true），然后取反再取反得true
[] == true   //结果是false  true 会转为1 ,[ ] 会转为 0 ，最后是比较的是 0 == 1，所以结果是false。
![] == []    //结果是true  ![ ] ，也就是 [] 先转为 布尔值（true），然后求反，就是false，false 转为数字就是0 ，[ ]转为数字就是0 ，最后就是 0 == 0 ，所以结果就是true。
```

5. 延伸
```js
[] == 0      //true  有一边是数字，所以[]转换成数字0， 0 === 0   ----> 规则三
![] == 0     //true   ![]转换成false，然后false转换成0 0 === 0    ----> 规则三
[] == ''     //true []转换成字符串为''                            
!![] == ''   //false  !![]转换成false, 然后转换成数字1， ''转换成数字0  ----> 规则三 规则二
'' == true   //false   true转换成数字1， 然后''转换成数字0     ----> 规则三 规则二
```
---

## Promise中return new Promise和return value有何差别
[Promise详解](https://blog.csdn.net/normal_people/article/details/80850491)
```js
console.log('start');
new Promise(function(resolve,reject){
    setTimeout(function(){    //定时器模拟异步
        resolve('hello');    //修改promise状态调用then中的第一个函数
    },2000);
}).then((value)=>{
    console.log(value);    //接收resolve传来的值
    return new Promise(function(resolve){   //该then()返回一个新的promise实例，后面可以继续接then
        setTimeout(function(){
            resolve('world');       //修改新promise的状态，去调用then
        },3000)
    })  
}).then((value)=>{
   console.log(value);
})

//输出结果：
/*
    立即输出   start
    两秒输出   hello
    再三秒     world
*/
```
上面我们在 then() 函数中返回的是一个新的promise，如果返回的不是一个新的promise会怎样呢？依然是上面的代码，稍作修改:
```js
console.log('start');
new Promise(function(resolve,reject){
    setTimeout(function(){  
        resolve('hello');    
    },2000);
}).then((value)=>{
    console.log(value);  
    (function(){
        return new Promise(function(resolve){   
            setTimeout(function(){
                resolve('world');       
            },3000)
        })  
    })();  
    return false; 
}).then((value)=>{
   console.log(value);
})
/*
    结果：
       立即输出   start
       两秒输出   hello
       接着输出   flase
*/
```

::: tip 解析
根据上面的运行结果来看，如果在一个then（）中没有返回一个新的promise，则return 什么下一个then就接受什么，在上面的实例代码中return的是false，下一个then中接受到的value就是false，如果then中没有return，则默认return的是undefined.
:::

::: danger 注意
then中return Promise必须是在then函数的作用域中return，不能在其他函数作用域中return，否则无效。上面的例子中return Promise就是在一个立即执行函数中返回的，所以无效。
:::

---
## CommonJS规范，以及exports、module.exports和export、export default区别
[参考链接](https://blog.csdn.net/qq_38801354/article/details/78024680)

1. module.exports导出的是值的拷贝，exprot导出的是值的引用
2. module.exports是动态引入的，可以在条件语句中使用导入；export是静态导入，只能在文件顶部导入(静态引入方便进行模块的静态分析，构建依赖树，能去除冗余的模块或变量,能使用tree shaking，而动态引入没法在代码编译打包时进行分析，因此无法使用tree shaking
3. module.exports导出一个对象；export可以导出多个
---

## module.exports中的module对象包含哪些属性？
::: tip module对象属性
* module.id 模块的识别符，通常是带有绝对路径的模块文件名
* module.filename 模块的文件名，带有绝对路径
* module.loaded 返回一个布尔值，表示模块是否已经完成加载
* module.parent 返回一个对象，表示调用该模块的模块
* module.children 返回一个数组，表示该模块要用到的其他模块
* module.exports 表示模块对外输出的值
:::
```js
Module {
  id: '.',//这里是相对路径
  exports: { '$': { addx: [Function: addx], x: 1 } },
  parent: null,
  filename: 'E:\\html&css\\test2.js',//这里是绝对路径
  loaded: false,
  children: 
   [ Module {
       id: 'E:\\html&css\\test.js',
       exports: [Object],
       parent: [Circular],
       filename: 'E:\\html&css\\test.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths: [ 'E:\\html&css\\node_modules', 'E:\\node_modules' ] 
 }
```
---


## XMLHttpRequest使用方式
属性  
* readyState  
HTTP 请求的状态.当一个 XMLHttpRequest 初次创建时，这个属性的值从 0 开始，直到接收到完整的 HTTP 响应，这个值增加到 4。    

| 状态 | 名称 | 描述 |
| ------ | ------ | ------ |
| 0 | Uninitialized | 初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。 |
| 1 | Open | open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。 |
| 2 | Sent | send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。 |
| 3 | Receiving | 所有响应头部都已经接收到。响应体开始接收但未完成。 |
| 4 | Loaded | HTTP 响应已经完全接收 |

* responseText
* responseXML
* status: 由服务器返回的 HTTP 状态代码
* statusText: 描述了HTTP状态代码文本

方法
* abort()： 
    取消当前响应，关闭连接并且结束任何未决的网络活动；把 XMLHttpRequest 对象重置为 readyState 为 0 的状态，并且取消所有未决的网络活动  
* getAllResponseHeaders()  
    把 HTTP 响应头部作为未解析的字符串返回  
* getResponseHeader()  
    返回指定的 HTTP 响应头部的值。其参数是要返回的 HTTP 响应头部的名称  
* open()  
    初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求  
* send()  
    发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求体；  
    如果通过调用 open() 指定的 HTTP 方法是 POST 或 PUT，body 参数指定了请求体, 作为一个字符串或者 Document 对象。  
    如果请求体不是必须的话，这个参数就为 null  
    ```js
        send(body);
    ```
* setRequestHeader()  
    向一个打开但未发送的请求设置或添加一个 HTTP 请求头  


```js
<link rel="stylesheet" type="text/css" href="theme.css" >
<script type="text/javascript">
var xmlhttp = null;
if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else if(window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
if (xmlhttp != null) {
    xmlhttp.open('GET', url, true); // 第三个参数是Async 
    //该参数规定请求是否异步处理。True 表示脚本会在 send() 方法之后继续执行，而不等待来自服务器的响应。
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
                var xmlDoc = xmlhttp.responseText
                console.log(xmlDoc);
                // 将上一步请求返回的数据当成参数发送到下一个请求中
                xmlHttp.open("POST", "demo_dom_http.asp", false);
                xmlHttp.send(xmlDoc);
                document.write(xmlHttp.responseText);
            }
        }
    }
    xmlhttp.send(null);
} else {
  alert("Your browser does not support XMLHTTP.");
}
</script>
```