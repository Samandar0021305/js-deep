class NumberLoadash {
    clamp(x,y,z){
      const arr = [x,y,z]
      const a = Math.max(...arr);
      const b = Math.min(...arr);
      for(let item of arr){
         if(item != a && item != b) return item;
      }
    }
}

const _ = new NumberLoadash();

const res = _.clamp(-10, -5, 5);