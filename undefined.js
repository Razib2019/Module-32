/*
//8 Ways to get undefined
1. Variable that is not initialized will give undefined
let first;
console.log(first);

2. Function with no return 
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);

3. Parameter that will not pass will be undefined
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

third(2, 5);

4. If return has nothing on the right side will return undefined
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, 5);
console.log(total);

5.Property that does not exist on an object will give you undefined
const fifth = { id: 2, name: "ponchom", age: 40 };
console.log(fifth.age, fifth.salary);

6.Accessing array elements outside of the index range
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]);

7. Deleting an element inside an array
const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);

8. Set a value directly to undefined
const eight = undefined;
console.log(eight);
// It's not good rather we will use null instead of undefined
 */
