const { resolve, reject } = require('promise')
const promise = require('promise')

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("deechu")
        },3000)
    })
}

function getNum(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("90614238288464")
        },2000)
    })
}
// promise.all([getName(),getNum()]).then((result)=>{
//     console.log(result)
// }) 

async function getUser(){
 let name=await getName()
 console.log(name);
 let mobile = await getNum()
 console.log(mobile);
}

getUser()