### 基本用法
包括查询条件，分页，排序 
```
Model.find({
  where: { name: 'mary' },
  skip: 20,
  limit: 10,
  sort: 'createdAt DESC'
}).exec(function(err, thirdPageOfRecentPeopleNamedMary){

});
```

### 或许 
```
//（1）在其中
Model.find({
  name : ['walter', 'skyler']
}).exec(function (err, waltersAndSkylers){

});	

//（2）不在其中
Model.find({
  name: { '!' : ['walter', 'skyler'] }
}).exec(function (err, everyoneExceptWaltersAndSkylers){

});

//（3）不同字段 
Model.find({
  or : [
    { name: 'walter' },
    { occupation: 'teacher' }
  ]
}).exec(function(err, waltersAndTeachers){

});
```

### 关键字

'<' / 'lessThan'
```
Model.find({ age: { '<': 30 }})
```
'<=' / 'lessThanOrEqual'
```
Model.find({ age: { '<=': 21 }})
```
'!' / 'not'
```
Model.find({
  name: { '!': 'foo' }
})
```
'like'
```
Model.find({ 
  food: { 'like': '%beans' }
})
```

### 排序 
```
Model.find({ where: { name: 'foo' }, sort: { name:  1, age: 0 });//0代表降序，1代表升序
```