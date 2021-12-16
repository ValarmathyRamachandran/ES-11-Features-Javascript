//new built-in object called BigInt that allows you to represent whole numbers larger 253 – 1.
//To make a BigInt, you append n to the end of an integer literal

let bigInt = 9007199254740991n;

console.log(typeof bigInt); // bigint
console.log(typeof BigInt(100) === 'bigint'); // true It doesn’t support the unary operator (+).

let result = 3n / 2n;
console.log(result); // 1n, not 1.5n
console.log(1n === 1); // false
console.log(1n == 1); // true    BigInt is not strictly equal (===) to a Number

console.log(1n < 2); // true
console.log(2n > 1); // true
console.log(2n >= 2); // true

let count = 0n;

if(count) {
    console.log(true);
} else {
    console.log(false); //false
}
