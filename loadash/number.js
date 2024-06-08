class NumberLoadash {
    clamp(x,y,z){
      const arr = [x,y,z]
      const a = Math.max(...arr);
      const b = Math.min(...arr);
      for(let item of arr){
         if(item != a && item != b) return item;
      }
    }
    inRange(x,y,z){
       if( z == undefined && x < y && x > 0  || ( x > y && x < z )) return true;
       return false
    }
    random(x,y){
       if(x.constructor.name == y.constructor.name){
           return Math.random()*Math.abs(x-y) + Math.min(x,y);
       }else{
         if(y.constructor.name != "Number"){
           return Math.random()*x;
         }
         return Math.random();
       }
    }
}

const _ = new NumberLoadash();

const res = _.clamp(-10, -5, 5);
const res1 = _.inRange(3, 4)