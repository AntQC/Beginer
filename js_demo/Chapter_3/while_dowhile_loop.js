/*
Note:
1. Dùng vòng lặp While và Do While sẽ khai báo biến trước khi thực hiện vòng lặp
2. Vòng lặp While check điều kiện sau đó mới chạy vòng lặp
3. Vòng lặp Do While chạy vòng lặp sau đó check điều kiện
4. Chỉ nên dùng While hoặc For
5. Sử dụng vòng lặp While/ Do While đối với trường hợp không biết chính xác số lượng vòng lặp. Muốn lặp đến 1 điều kiện cụ thể nào đó
thì dừng. (nên dùng với những trường hợp check điều kiện true)
*/

//I. Vòng lặp While

let i = 0; // khai báo biến trước khi chạy vòng lặp
while(i < 5)// điều kiện vòng lặp
{
console.log("1. Giá trị trả về trong vòng lặp While là:", i);// code block
i++;// điều kiện sau khi thực hiện xong vòng lặp
}

// let i = 0; 
// let flag = true;
// while(flag)
// {
// console.log("1. Giá trị i được trả về với điều kiện là true:", i);
// i++;
// if(i===10) flag = false;
// }

// II. Vòng lặp Do While

let j = 0;// khai báo biến trước khi chạy vòng lặp
do 
{
console.log("2. Giá trị trả về trong vòng lặp Do While là:", j)// code block
j++;// điều kiện sau khi thực hiện vòng lặp
} 
while(j<5) // điều kiện vòng lặp