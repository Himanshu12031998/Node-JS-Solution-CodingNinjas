// Please don't change the pre-written code
// Import the necessary modules here
const fs=require('fs')
const Solution = () => {
  // Write your code here
fs.writeFileSync('notes.txt', 'The world has enough coders');


let res=fs.readFileSync('notes.txt',"utf8")
console.log(res);

  fs.appendFileSync('notes.txt',' BE A CODING NINJA!')

let res1=fs.readFileSync('notes.txt',"utf8")

console.log(res1);
fs.unlinkSync('notes.txt');
}
Solution();
module.exports = Solution;


