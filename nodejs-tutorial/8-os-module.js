const os=require('os')

// information about current user 
const user=os.userInfo()
console.log(user)

// method returns the system uptime in second
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)