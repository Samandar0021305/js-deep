class MathLoadash {
    add(x,y){
        if(typeof y == 'number' && typeof x == 'number'){
            return x+y;
        }
        return x;
    }
}

const _ = new MathLoadash();

console.log(_.add(5,6))