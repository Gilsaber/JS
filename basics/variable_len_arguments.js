function sum(a,b) {
    console.log(a, b);
    return a + b;
}

var result = sum(4), result2 = sum(4, 5, 6); // ignores the third argument
console.log(result);
console.log(result2);