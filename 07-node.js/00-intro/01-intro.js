// import node.js file system module
const fs = require("fs")

// using fs method to copy contents of a text file
fs.copyFileSync("file1.txt","file2.txt")
console.log("Example 1")
console.log("Copying file 1 to file 2")
console.log(".........")

// import "fantasy-content-generator"
const FCG = require("fantasy-content-generator")

var character1 = FCG.Names.generate()
console.log("Example 2")
console.log("Generating fantasy character")
console.log(character1)

