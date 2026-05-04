/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let largest = ""
   const arr = ["999","888","777","666","555","444","333","222","111","000"]
         arr.forEach((val)=>{
            if(num.includes(val)){
                largest = largest > val ? largest:val
            }
         })
   return largest
};