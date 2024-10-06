function SomeiteratorObject(iterable) {
    const iterator = iterable[Symbol.iterator]();
    let result = iterator.next();

    while (!result.done){
        console.log(result.value);
        result = iterator.next();
    }
}

const SomeArray = [
    1, 2, 3, 4, 5, 6, 7, 8
]

const String = "hello"

SomeiteratorObject(SomeArray);
SomeiteratorObject(String);