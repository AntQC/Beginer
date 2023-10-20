/*
NOTE:
1. Mục đích của sử dụng function là để dễ quản lý và reuse
2. Cấu trúc của function
function <tên function> (tham số đầu vào)
{
    return <tham số>
}
block code để gọi hàm
;

3. Đặc điểm nhận dạng là có key function
4. Tên của function là 1 động từ
5. Định nghĩa function ở trên và gọi hàm ở dưới

*/

//I. Cấu trúc function cơ bản
function sum (a, b, c)
{
    return a + b + c;
    
}
let sum1 = sum (6, 2, 3);

console.log("tổng của hàm sum là:", sum(1,2,3));
console.log("tổng của sum1 là:", sum1);

//II. Return trong function

/**
1. Return tương tự như biến block, chỉ được sử dụng trong 1 phạm vi dấu {}
2. Return có thể dùng để dừng 1 function khi đã thõa mãn điều kiện

*/
function check_return (g, h, z)
{
    console.log(1)
    console.log(5)
    console.log(0)

    if (z==8) return;// return để dừng function khi thõa điều kiện
   
    return g + h; // return các giá trị cần trả ra

}
console.log("tổng của g và h là: ", check_return(26, 6, 8))

// III. Arrow function

/** 
 1. Cấu trúc arrow function:
 let <tên fuction> = (param) => {
    return <phương thức param>
 }
 2. Mục đích là để code ngắn hơn
 3. arrow function là bản upgrade của function
 */

 let arr = (arr1, arr2) => { // khai báo như khai báo biến
    return arr1 + arr2;
 }
 console.log("Tổng của arr là: ", arr(1, 2))

 // IV. Phân biệt Function và Method


