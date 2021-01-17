# TS面试题

## interface接口和type类型别名的异同？
1. 两者都可以用来描述对象或函数，但语法不一样
2. 类型别名(除对象和函数外)还能用于基本类型、联合类型、元组等
3. 接口可以被extends和implements，类型别名type不但不能被extends和implements，就连自己也不能extends和implements其它类型
4. 接口可以同名合并，类型别名不能
5. type支持计算属性(type支持in keyof关键字生成映射类型)，接口不能
---