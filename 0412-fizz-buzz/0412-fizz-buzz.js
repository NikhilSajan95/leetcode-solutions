/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const ans = []
    let i = 1
    function answer(num){
        
        if(i % 3 === 0 && i % 5 === 0){
            ans.push("FizzBuzz")
        }else
        if(i % 3 === 0){
            ans.push("Fizz")
        }else
        if(i % 5 === 0){
            ans.push("Buzz")
        }else
        ans.push(i.toString())
    i++
    if(i <= n){
    answer(i)
    }
    }
    answer(i)
    return ans
};
