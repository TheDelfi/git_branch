const nums = [22,11,2,3]
let summa_num = 0
let skolko_chisel = 0
let result_num = 0



for(i of nums){
    if(String(i).length == 2){
        skolko_chisel += 1
        summa_num += i
    }
}


result_num = summa_num / skolko_chisel
console.log(result_num)