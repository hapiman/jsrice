## 四种设计模式 
主要是Module，Protoytpe，Observer和Singleton

### module 
主要是为了封装模块，细分代码， 主要格式如下 
```js 
(function() {
    // declare private variables and/or functions
    return {
      // declare public variables and/or functions
    }
})();
//example

var HTMLChanger = (function() {
  var contents = 'contents'
  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }
  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };
})();
HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

//在nodejs后台代码中 
var Exposer = (function() {
  var privateVariable = 10;
  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }
  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }
  var otherMethodIWantToExpose = function() {
    privateMethod();
  }
  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();
module.exports = Exposer
```

### prototype 
主要是提取公共代码放置在`prototype`上面 
```js
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}
TeslaModelS.prototype = function() {
  var go = function() {
    // Rotate wheels
  };
  var stop = function() {
    // Apply brake pads
  };
  return {
    pressBrakePedal: stop, //隐藏方法的名称
    pressGasPedal: go //隐藏方法的名称
  }
}();
```

### observer
观察者模式在`angularjs`和`vuejs`中都有涉及,如`watch`等关键字的使用 
```js
// Controller 1
$scope.$on('nameChanged', function(event, args) {
    $scope.name = args.name;
});
...
// Controller 2
$scope.userNameChanged = function(name) {
    $scope.$emit('nameChanged', {name: name});
};
```

### singleton
对于系统级公用的东西，都可以想办法使用单列模式，如网站中的弹窗,Toast, Loading等效果设置 

