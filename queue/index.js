class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(_value){
        this.items.push(_value);
    };
    isEmpty(){
        if(!this.items.length) return true;
        return false;
    }
    dequeue(){
        if(this.isEmpty()) return null;
        return this.items.shift();
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}

const queue = new Queue();
console.log(queue.enqueue())