const {readFile,writeFile}=require('fs').promises

// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)


// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// const getText=(path)=>{
//     return new Promise((reject ,resolve)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/second.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))

// const start=async()=>{
//     try {
//         const first=await getText('./content/first.txt')
//         const second=await getText('./content/second.txt')
//         console.log(first,second) 
//         console.log(second) 
//     } catch (error) {
//         console.log(error)
//     }   
// }

const start=async()=>{
    try {
        const first=await readFile('./content/first.txt','utf8')
        const second=await readFile('./content/second.txt','utf8')
        await writeFile('./content/mind-grened.txt',`This is output :${first} ${second}`,{flag:'a'})
        
    } catch (error) {
        console.log(error)
    }   
}
start()