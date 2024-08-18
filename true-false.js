/*  
Truthy:
1.true
2. any number (positive or negative) will be truthy except 0 
3. any string is truthy except empty string('')
4.'0', 'false'
5.{}
6.[]


Falsy:
1.false
2. 0
3.empty string('')
4. undefined
5. null
*/
let x = [];
if (x) {
  console.log("Value of x is truthy");
} else {
  console.log("Value of x is falsy");
}

// Optional
// Check Falsy
const y = null;
if (!y) {
  console.log("Value is falsy");
}

// Check Truthy
const z = { class: 9 };
if (!!z) {
  console.log("Value is truthy");
}
