// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //console.log(obj,typeof(obj),Array.isArray(obj));
  
  var newObj;  
  var resArr=[];
  var index;

  if(index<0){
    return
  }

  if((typeof(obj)=='string')){
    newObj='"'+obj+'"';

  } else if(obj==null||typeof(obj)=='boolean'||(typeof(obj)=='number')){
    newObj = obj+""

  } else if (Array.isArray(obj)){
    index = obj.length
    for(var i=0;i<obj.length;i++){
      resArr.push(stringifyJSON(obj[i]))     
    }
    newObj='['+resArr.join(",")+']'
    
  } else if((typeof(obj)=='object')){
    index = obj.length
      for(var key in obj){
        if(key!="undefined"&&key!=='functions'){
        resArr.push(stringifyJSON(key));
        resArr.push(':')
        resArr.push(stringifyJSON(obj[key]));
        resArr.push(',')
        }
      }
      //console.log(resArr)
      resArr.pop();
      newObj = '{'+resArr.join("")+'}'
      //console.log(newArr)
    
  } else {
  newObj = obj+""
  }  
  index--;
  //console.log(newObj,typeof(newObj),index);
  return newObj
};

// function 일 때 어떻게 처리하는가??