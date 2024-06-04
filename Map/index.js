class MyMap {
    data;
    constructor(){
     this.data = {};
    };

    set(key,value){
       this.data[key] = value;
    }
    get(key){
     return this.data[key];
    };
    has(key){
        return `${key}` in this.data;
    }
    delete(key){
      delete this.data[key]
    };
    clear(){
        this.data = {};
    };
    size(){
        return Object.keys(this.data).length;
    }
};


const map = new MyMap();
map.set(3,4)
console.log(map.has(3))
console.log(map.constructor)
