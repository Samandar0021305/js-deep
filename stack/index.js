class Stack {
    constructor(){
      this.items = [];
      this.size = 0;
    };
    isEmpty(){
        if(this.size === 0) return true;
        return false
    }

    push(_value){
        this.size++;
        this.items.push(_value);
    }
    peek(){
      if(this.isEmpty()) return null;
      return this.items[this.items.length - 1];
    }
    pop(){
        if(this.isEmpty()) return null
        this.size--;
        return this.items.pop();
    }
   
    clear(){
        this.items = [];
        this.size = 0;
    }

}

const stack = new Stack();
stack.push(3)
console.log(stack.peek())
console.log(stack)
console.log(stack.size)
console.log(stack.pop())
console.log(stack)
