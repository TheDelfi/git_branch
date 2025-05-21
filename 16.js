const nums = [1,2,3,4,5,6,7,8,12]
let result_number = 0

for (let i of nums){
    if (i % 3 == 0 &&  i % 10 == 2){
        result_number += i
    }
}

console.log(result_number)