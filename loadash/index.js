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
            console.log(...item)
             arr.push(...item)
         }else{
            arr.push(item);
         }
       }
       return arr;
    }
}

const _ = new Loadash();

const res = _.chunk(['a', 'b', 'c', 'd'], 3)
const res1 = _.concat([3,4],0,[[5]],[[[9]]]);
