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
[] == 0      //false  有一边是数字，所以[]转换成数字0， 0 ！== 0   ----> 规则三
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
       三秒输出   flase
*/
```
::: tip 
根据上面的运行结果来看，如果在一个then（）中没有返回一个新的promise，则return 什么下一个then就接受什么，在上面的实例代码中return的是false，下一个then中接受到的value就是false，如果then中没有return，则默认return的是undefined.
:::

::: danger 注意
then中return Promise必须是在then函数的作用域中return，不能在其他函数作用域中return，否则无效。上面的例子中return Promise就是在一个立即执行函数中返回的，所以无效。
:::

---
