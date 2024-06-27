class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            let temp = this.head;
            while(temp != null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.size++;
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insert(index,value){
        const newNode = new Node(value);
        if(index === 0){
            this.prepend(value);
            return;
        }
    }
    remove(value){
        if(this.size === 0) return null;
        if(this.head.val == value){
            this.head = this.head.next.next;
            this.size--
            return value
        }
        let temp = this.head;
        while(temp != null && temp.next != null && temp.next.val != value){
           temp = temp.next;
        }
        temp = temp.next.next;
         this.size--
        return value

    }
    GetSize(){
        return this.size;
    }

    print(){
        let current = this.head;
        let result = [];
        while (current !== null) {
          result.push(current.value);
          current = current.next;
        }
        console.log(result.join(' -> '));
    }
}