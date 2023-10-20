/*
NOTE
1. Có 2 dạng biến: global (toàn cục), block (cục bộ)
2. Biến block scope sẽ được khai báo trong phạm vi cặp dấu {}
3. Biến global sẽ được khai báo ngoài phạm vi cặp dấu {}
*/

// I. Khai báo biến block

{
let block1 = "Khai báo biến block";// chỉ có thể sử dụng biến block1 trong phạm vi {}

console.log(block1)
}
// console.log("Không thể sử dụng biến block1 ngoài phạm vi {}", block1) // không thể sử dụng biến block1 trong phạm vi {}

// II. Khai báo biến global

let global1 = 'Khai báo biến global1';
let global2 = 'Khai báo biến global2';

{
    for (let block2 = 0; block2< 3; block2++){
    if(block2 !=0)
    {
        console.log(` Nếu block2 là ${block2} thì hiển thị biến global1: `, global1);
    }
    else{
        console.log(` Nếu block2 là ${block2} thì hiển thị biến global2: `, global2);
    }
}
}
console.log(global1, global2)