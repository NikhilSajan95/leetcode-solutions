/**
 * @param {number} millis
 * @return {Promise}
 */
 function promise(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(1)
    },ms)
    })
    
 }
async function sleep(millis) {
    let response = await promise(millis)
    return response
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */