### 简单介绍

`Array.from`是ES2016中的用法，可以将一个`arrayLike`的变量转化为数组
 类数组对象：一个拥有length属性和若干其它任意属性的对象

### 语法 
使用方式 `Array.from(arrayLike[, mapFn[, thisArg]])`
参数说明 
1.`arrayLike`类数组对象
2.`mapFn`使用Array.map来匹配
3.`this`当前的环境 

### 使用示例
```js

//将参数的列表arguments
(function(){
    return Array.from(arguments)
})(1,2,3)

// 将可迭代对象（Set 对象）转换成数组
Array.from(new Set(["foo", window]));       // ["foo", window]

// Map 对象也可以
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]  

// 字符串对象既是类数组又是可迭代对象
Array.from("foo");                      // ["f", "o", "o"]

// 使用 map 函数转换数组元素
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// 生成一个数字序列
Array.from({length:5}, (v, k) => k);    // [0, 1, 2, 3, 4]

```
### 关于其它 
如何不使用`for`循环获取一个包含1-100的数组  
```js
Array.from({length:100},(v, k) => k)	
Array.from(new Array(100).keys());

//使用扩展运算符展开 
[...Array(100).keys()]	
[...Array.from({ length: 100 }).keys()]
```