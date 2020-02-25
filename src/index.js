
// You should implement your task here.

module.exports = function towelSort(arr){
  var newarr = [];
  if(arr === undefined || arr.length === 0){
    return [];
  } else {
     for(var i = 0; i<arr.length; i++){
        if(i % 2 === 0 || i === 0) {
         for(var j= 0; j<arr[i].length; j++){
            newarr.push(arr[i][j]);
         }
       } else {
          for(var k= arr[i].length -1; k >= 0; k--){
             newarr.push(arr[i][k]);
          }
       }
  }
  }
 return newarr
}
