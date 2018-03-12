/* jshint esversion: 6 */
var sum = 0;

// const [head, , ...tail] = process.argv;
// tail.forEach(n => {
//   sum += Number(n);
// });

// process.argv.forEach((n, i) => {
//   if (i >= 2) {
//     sum += Number(n);
//   }
// });

for (let i = 2; i < process.argv.length; i += 1) {
  sum += Number(process.argv[i]);
}

console.log(sum);
