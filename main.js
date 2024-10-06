function originalFor(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

const myArray = [21, 23, 24, 25, 26];
originalFor(myArray);

function rewrittenForOf(arr) {
    for(const element of arr){
        console.log(element);
    }
}
const rewrittenArray = [12, 13, 14, 15, 16];
rewrittenForOf(rewrittenArray);