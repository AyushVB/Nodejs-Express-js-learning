const {readFile,writeFile}=require('fs')
console.log('start')
// readFile('./content/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
// output:<Buffer 48 65 72 65 20 69 73 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65>

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/read_write_asyn.txt',
                    `result is : ${first} ${second}`,{flag:'a'},
                    (err,result)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log('done with this task')
                    }) 
    })
})
console.log('starting the next task')