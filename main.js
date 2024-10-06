function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function* primeIterator(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

const primes = [];
const primeGen = primeIterator(1, 100); 

for (let prime of primeGen) {
    primes.push(prime);
    if (primes.length === 10) break; 
}

console.log("Перші 10 простих чисел:", primes);
