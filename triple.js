// Always use triple equal(===)
// Equal comparison does not work for non-primitive type
// coercion
const first = 2;
const second = "2";
if (first == second) {
  console.log("Values are equal");
} else {
  console.log("Values are not equal");
}
