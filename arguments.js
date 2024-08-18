// Array like object
function sum(a, b, c) {
  arguments;
  const result = a + b + c;
  return result;
}

const total = sum(45, 89, 12);
console.log(total);
