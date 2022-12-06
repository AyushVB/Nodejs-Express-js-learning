const {createReadStream}=require('fs')

const Stream=createReadStream('./content/big.txt',{highWaterMark:90000,})

// default size=64kb
// const Stream=createReadStream('./content/big.txt') =>default creation 

// last buffer=remainder

// highWaterMark =control size
// const Stream=createReadStream('./content/big.txt',{highWaterMark:90000})

// encoding
// const Stream=createReadStream('./content/big.txt',{encoding:'utf8'})

Stream.on('data',(result)=>{
    console.log(result)
})

Stream.on('error',(err)=>{
    console.log(err)
})