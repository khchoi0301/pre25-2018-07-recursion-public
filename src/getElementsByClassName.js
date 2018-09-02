// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

 //console.log(document.body)           // 하위 구조를 볼수 있다<body><div><p><iframe><body>
 //console.log(document.body.classList)  //class를 가진 argu를 볼수 있다. 
 //console.log(document.body.children)   // node를 볼수 있다   <div><p>
 //console.log(document.body.childNodes)  // text까지 볼수있다. <div>text<p>text  
  
 //console.log(document.body.length)  // undefined
 //console.log(document.body.childNodes.length)  // text까지 length 4
 //console.log(document.body.children.length)   // node length 2

 
  var newArr = [];
  var body = document.body;

  (function addClassName(parent){
    if((parent.classList)&&(parent.classList).contains(className)){
      newArr.push(parent) 
    } 
    if(parent.childNodes) {
      for(var i=0;i<parent.childNodes.length;i++){
      addClassName(parent.childNodes[i])      
      }
    }    
  })(body)

  return newArr
  
  /*                 // 왜 children은 안되는지??
  function addClassName(parent){
    console.log('in',parent,parent.classList,parent.children)
    if((parent.classList)&&(parent.classList).contains(className)){
      newArr.push(parent) 
      console.log('if',newArr)
    } 
    if(parent.children) {
      //console.log(parent.children)
      for(var i=0;i<parent.childNodes.length;i++){
      addClassName(parent.children[i])      
      }
    }  
  }
  console.log('last',newArr)
*/
  
};
