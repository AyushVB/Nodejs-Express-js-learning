const http =require('http')

const server=http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello world')
})
server.listen(8000,()=>{
    console.log('server is listenting on 8000 port...')
})