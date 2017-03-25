
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

var extendCopy = function(p){
    var c = {}
    for(let k in p ){
        c[k] = p[k]
    }
    return c
}

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

module.exports = {
    isObject:isObject,
    isEmptyObject:isEmptyObject,

    extendCopy,
    deepCopy
}