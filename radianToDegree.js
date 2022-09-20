function radianToDegree(radian){
   let pi = Math.PI;
   let degree = radian * (180 / pi);
   degree = parseFloat(degree.toFixed(2));
   if(!radian){
      console.error('You did not input');
   }
   return degree;

  
}
// User input: 10, 25, 199 |

console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));

// User Output: 572.96, 1432.39, 11401.86 | 
