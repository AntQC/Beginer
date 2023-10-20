
/* NOTE
1. Sử dụng như câu điều kiện if- esle
2. Cấu trúc là:
switch (điều kiện/ biểu thức)){
    case <kết quả>: giá trị trả ra tương ứng với kết quả
    break;
}
3. Có thể gôm nhiều case để trả về cùng 1 kết quả
4. Không thích hợp dùng trong vòng lặp. Chỉ thích hợp để check giá trị rõ ràng

*/


for(let sc1 = 0; sc1 < 5; sc1++){
switch(sc1)
{
    // case 0:
    // sc1 = 'An'
    // break;
    case 0:
    case 1:
    sc1 = 'HAHA'
    break;
    case 2:
    sc1= 'Linh'
    break;
    case 3:
    sc1= 'NA'
    break;
}
console.log(`Kết quả của sc1 có giá trị là: `, sc1)
}