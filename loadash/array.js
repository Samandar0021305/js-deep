class Loadash {
    chunk(arr = [],num){
       if(!arr.length) return arr;
        const newArr = [];
       let i = 0;
       while(i < arr.length){
          const arr1 = [];
          for(let k = i; k<i+num && k < arr.length;k++){
             arr1.push(arr[k]);
          }
          newArr.push(arr1)
          i+=num;
       }
       return newArr
    };
    concat(arr = [],...args){
       for(let item of args){
         if(Array.isArray(item)){
             arr.push(...item)
         }else{
            arr.push(item);
         }
       }
       return arr;
    };
    difference(arr,...args){
       const set = new Set([...arr]);
      for(let item of args){
        for(let cur of item){
             if(set.has(cur)){
                set.delete(cur);
             }
        }
      };
      const newArr = [];
       for(let item of arr){
         if(!set.has(item)){
             continue;
            }else{
             newArr.push(item);
         }
       };
       return newArr;
    };
    drop(arr = [],num = 1){
        if(!num) return arr;
       const newArr = [];
       for(let i = 0; i < arr.length;i++){
         if(num < i+1){
            newArr.push(arr[i]);
         }
       }
       return newArr;
    };
    fill(arr = [],modif,start,end){
        if(start == end == undefined){
            for(let i = 0; i < arr.length;i++){
                 arr[i] = modif;
            }
        }else if((start || start == 0) && !end){
              for(let i = start;i<arr.length;i++){
                 arr[i] = modif;
              } 
        }else{
             for(let i = start;i<end;i++){
                 arr[i] = modif
             }
        };
        return arr;    
    };
    flattenDeep(arr = []){
      const helperFlat =(arr = [])=>{
         const result = [];
            for(let item of arr){
                if(Array.isArray(item) ){
                     result.push(...helperFlat(item));
                }else{
                    result.push(item);
                }
            }
            return result;
       }
       return helperFlat(arr)
    };
    head(arr){
      if(!Array.isArray(arr) || !arr.length){
         return undefined;
      }
      return arr[0];
    }
    initial(arr){
        const newArr = [];
        for(let i = 0; i < arr.length - 1; i++){
          newArr.push(arr[i]);
        }
        return newArr
     }
     intersection(...args){
        const set = new Set();
        for(let i = 0; i < args[0].length;i++){
          set.add(args[0][i]);
        }

        for(let i = 1;i<args.length;i++){
          for(let item of args[i]){ 
            if(!set.has(item))set.delete(item);
          }
        }

        return Array.from(set);
     }
     join(arr = [],str){
        if(!arr.length) return arr;
        if(str === undefined) return arr.join(',');
        let res = "";
        for(let item of arr){
          res+=`${item}${str}`
        }
        return res;
     }
}

const _ = new Loadash();

const res = _.chunk(['a', 'b', 'c', 'd'], 3)
const res1 = _.concat([3,4],0,[[5]],[[[9]]]);
const res3 = _.difference([1, 2, 3, 4, 5, 5],[2, 3],[4, 6]);
const res4 = _.drop([1, 2, 3, 4, 5],2);
const res5 = _.fill([4, 6, 8, 10], '*', 1, 3);
const res6 = _.flattenDeep([1, [2, 3], [4, [5, 6]]]);
