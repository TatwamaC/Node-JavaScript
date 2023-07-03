let promise = new Promise(function(resolve,reject){
/*if(cond){
 resolve(value)
}else{
    reject(new Error())
}*/
});
promise.then(fill,reject)/*two functions also one can be there*/
promise.then(function(data){
console.log(data);
})


