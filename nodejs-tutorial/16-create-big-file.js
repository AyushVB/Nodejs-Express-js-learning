const {writeFileSync}=require('fs')
for(let i=0;i<100000;i++){
    writeFileSync('./content/big.txt',`${i} hello world\n`,{flag:'a'})
}