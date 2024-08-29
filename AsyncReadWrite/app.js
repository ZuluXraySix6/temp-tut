const read = require('fs')
read.readFileSync

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./txtFiles/first.txt', 'utf-8')
const second = readFileSync('./txtFiles/second.txt', 'utf-8')

//console.log(first, second);

writeFileSync('newFile.txt', `This is a new text file, ${first} and ${second}`)

// Append to file
writeFileSync('newFile.txt', `This is the new Appended TEXT`, { flag: 'a' })