// CommanJS ,every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

// const secret="very secret"
// const john="john"
// const peter="peter"
const name=require('./4-names')

// const sayHi =(name)=>{
//     console.log(`Hello there ${name}`)
// }
const sayHii=require('./5-utils')

const example=require('./6-alternative-flavor-toExport')


// console.log(example)

// sayHii("ayush")
// sayHii(name.john)
// sayHii(name.peter)
// sayHii(example.person.person2.name)

require('./7-mind-grenade')