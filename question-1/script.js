/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

function escaleras(n){
    if(n === 1 || n === 2){return 1}
    return escaleras(n - 1) + escaleras (n-2)
}

//pruebas:

console.log(escaleras(args))
//console.log(escaleras(2))
// console.log(escaleras(1))
// console.log(escaleras(33))