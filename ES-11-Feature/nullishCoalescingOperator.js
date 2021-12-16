//It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
const age = undefined ?? 28;
console.log(age); //28

const result = (null || undefined) ?? 'OK'; 
console.log(result); //ok

let result = undefined ?? "Hello";
console.log(result); // Hello

result = null ?? true; 
console.log(result); // true

result = NaN ?? true; 
console.log(result); // NaN

result = 4 > 5 ?? true; 
console.log(result); // false because 4 > 5 evaluates to false

result = 4 < 5 ?? true;
console.log(result); // true because 4 < 5 evaluates to true

result = [1, 2, 3] ?? true;
console.log(result); // [1, 2, 3]
result = false ?? true;
console.log(result); // false

result = 45 ?? true; 
console.log(result); // 45

result = "" ?? true; 
console.log(result); // ""