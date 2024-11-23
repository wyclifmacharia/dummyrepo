// npm  - global command, comes with node
// npm -- version

//local depandency - use it only in this particular project project
// npm i <packageName >

//global dependacy - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json - manifest file (store import info about the project/package)
//you can create manual approach (create package .json in the root ,create properties etc)
// esy way : npm init (step by step,press enter to skip)
//or : npm init -y(everything as default)
//whenever you  clone a repo with packaje.json diles you only need to run npm install to set up the dependancies 

const lodash = require('lodash')

const item = [1,[2,[3,[4]]]]
const flattenedArray= lodash .flattenDeep(item)
console.log(flattenedArray)
console.log("Hey there good people  ")


