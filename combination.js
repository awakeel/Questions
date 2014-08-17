function convert(str){
   var ar=[];
   for(var i=0; i<str.length; ++i){
       ar.push(str.slice(0, i+1));
   }
   for(var j=1; j<str.length; ++j){
       ar.push(str.slice(j, str.length));
   }
   return ar;
} 
var r = convert('Game');
console.log(r);
