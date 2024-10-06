class customIterator{
    constructor(data){
        this.data = data;
        this.index = 0;
    }

[Symbol.iterator](){
    return this;
}

next(){
    if(this.index < this.data.length){
        return{
            value: this.data[this.index++],
            done: false
        };
    } else {
        return {
            value: undefined,
            done: true
        };
    }
}
}

const Data = [
    "hello",
    13,
    true,
    null,
    {key: "value"},
    [2, 4, 6]
]

const iterator = new customIterator(Data);

for(const item of iterator){
    console.log(item);
}