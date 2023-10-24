let p = new Promise (function(resolve,reject)
{
 resolve("Promise is fullfilled")
 //reject("Rej")
})

setTimeout =>
{
    console.log("Hello promise session",5000)
}
console.log(p)