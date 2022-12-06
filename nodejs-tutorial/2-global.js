//GLOBALS - NO WINDOW!!!

// __dirname  -path to current directory
// __filename -file name path
// require    -function to use modules(CommanJS)
// module     -info about currnet module (file)
// process    -info about the env where the program is being executed

console.log(__dirname)
console.log(__filename)

// setInterval(arrow func,1000 ms) setTimeout()
setInterval(()=>{
    console.log(`Hello world`)
},1000)