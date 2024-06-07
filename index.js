function flat(arr, depth = 1) {
   if(depth == Infinity){
      const newArr = [];
      let bool = true;
      for(let item of arr){
         if(Array.isArray(item)){
             bool = false;
             newArr.push(...item);
         }else{
            newArr.push(item);
         }
      }

      return !bool ? flat(newArr,Infinity) : newArr;

   }
   if(depth === 0) return arr;
   const newArr = [];
   for(let item of arr){
        if(Array.isArray(item)) newArr.push(...item);
        else newArr.push(item);
   } 
   return flat(newArr,depth-1);
}

console.log(flat([1, [2], [3, [4]]]))