var global = 10;

function outer() {
    var b = 20;

    function inner() {
        console.log(b);
        console.log(global); // referrence to other environment
    }
    inner();
}

/* console.log(b); // error as execution stack is empty */
outer();
console.log(global); 