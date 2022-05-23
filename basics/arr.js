var a = [1,2,3,4];
var b = new Array(2,3,4,5);
var c = new Array();
var d = new Array(3);
var e = new Array(2,3);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

c.push(5); // insertion at the end
c.push(6);
c.pop(); // removes last element and return it as well

e.push(7); e.push(8); e.pop();

var len = c.length, len2 = d.length, len3 = e.length;
console.log(c, " ", d, " ", e);

var arr = [1,2,3,4,5];
arr.splice(1,1); // splice(starting index, deletion count, elements to be inserted)
console.log(arr);

arr.splice(1,0,15); // Insertion only 
console.log(arr);

arr.splice(2,2,40);
console.log(arr);