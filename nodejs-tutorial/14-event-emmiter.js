const EventEmmiter=require('events')
const customEmmiter=new EventEmmiter()

customEmmiter.emit('response')

customEmmiter.on('response',(Name,id)=>{
    console.log(`data recieved user ${Name} with id ${id}`)
})

// customEmmiter.emit('response','shrikant',19)

customEmmiter.on('response',()=>{
    console.log('some other logic here')
})

// customEmmiter.emit('response','shrikant',19)