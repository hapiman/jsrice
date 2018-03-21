'use strict'

const _ = require('lodash')

//判断是否是对象, 可能为对象或者数组
var isObject = function(obj) {
  return obj !== null && typeof obj === 'object'
}

//判断是否是空对象
var isEmptyObject  = function(obj){
   if(obj === null) return false
   if(typeof  obj != 'object') return false
   if(obj instanceof Array) return false
   if(Object.keys(obj).length > 0) return false
   return true
}

//浅拷贝
var extendCopy = function(p){
    var c = {}
    for(let k in p ){
        c[k] = p[k]
    }
    return c
}

//深拷贝
var deepCopy = function(p){
    var c = {}
    for(let k in p){
        if(typeof p[k] === 'object'){
            c[k] = p[k].constructor === 'Array' ? []:{}
            deepCopy(p[i], c[k])
        }else{
            c[k] = p[k]
        }
    }
    return c
}

//获取对象的私有属性 使用hasOwnProperty, for-in会列出全部属性
//使用 isPrototypeOf判断是否是选型上的方法
var printOwnKeys = function(obj){
    for(var k in obj){
        if(obj.hasOwnProperty(k)){
            console.log(k);
        }
    }
}

//判断是否是’纯’对象，即字典类型
var isDictionary = function isDictionary(thing) {
    return _.isObject(thing) && !_.isArray(thing) && !_.isFunction(thing);
}

// 获取文件的后缀名
var fileExtension = function(str) {
    if(str === null) return '';
    var pieces = String(str).split('.');
    return pieces.length > 1 ? _.last(pieces) : '';
}

module.exports = {
    isObject:isObject,
    isEmptyObject:isEmptyObject,

    extendCopy,
    deepCopy,

    printOwnKeys,
    isDictionary,
    fileExtension
}

