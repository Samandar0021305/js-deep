class myArry {
    constructor(nums){
       this.nums = nums || [];
    }
    flat(depth = 1){
       const helperFlat =(arr = [],depth)=>{
         const result = [];
            for(let item of arr){
                if(item.constructor.name == this.nums.constructor.name && depth > 0){
                     result.push(...helperFlat(item,depth-1));
                }else{
                    result.push(item);
                }
            }
            return result;
       }
       return helperFlat(this.nums,depth)
    };
    map(func){
        const newArr = []
      for(let i = 0; i < this.nums.length;i++){
        newArr.push(func(this.nums[i],i))
      }
      return newArr
    }
    filter(func){
        const newArr = [];
        for(let i = 0; i < this.nums.length;i++){
            if(func(this.nums[i],i)){
                newArr.push()
            }
          }
          return newArr
    }
    reduce(func,initValue){
      let cur = initValue;
      for(let item of this.nums){
         cur+=func(0,item)
      }
      return cur
    }
    concat(newArr){
        for(let item of newArr){
            this.nums.push(item);
        }
        return this.nums
    }
    join(value){
      let str = "";
      for(let item of this.nums){
         str+=`${item}${value}`
      }
      return str;
    }
    find(func){
      const newArr = [];
      for(let i =0; i<this.nums.length;i++){
         if(func(this.nums[i],i)){
           newArr.push(this.nums[i])
         }
      }
      return newArr;
    };
    push(num){
       this.nums = [...this.nums,num];
    };
    pop(){
        const n = this.nums.length
        const popped = this.nums[n - 1];
        const newArr = [];
        for(let i = 0;i<n-1;i++){
            newArr.push(this.nums[i])
        }
        this.nums = newArr;
        return popped;
    };
}

const myArr = new myArry([1,2]);

const reducer = myArr.reduce((a,b)=>a+b,1)
console.log(reducer)

console.log(myArr.concat([3,4]))

const val = myArr.join('data')

console.log(myArr.pop())
console.log(myArr.nums)