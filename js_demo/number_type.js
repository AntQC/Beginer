
let string3 = `Bài 5 - Học kiểu dữ liệu Number`;

// chữ in hoa
console.log(string3.toUpperCase());
// chữ thường
console.log(string3.toLowerCase());

// các dạng toán tử trong java script

let num1 = 2; // int
let num2 = 3.1; // float
let str1 = '2'; // string

// phép cộng
console.log('num + num = num:',num1+num2); // num + num = num
console.log('num + string = string:',num1+str1); // num + string = string
console.log('num + string = string:',str1+num2); // num + string = string

// phép trừ, tương tự phép * và /
console.log('num - num = num:', num1-num2); // num - num = num
console.log('num - string = num:', num1-str1); // num - string = num
console.log('string - num = num:',str1-num2); // string - num = num

// so sánh chuỗi

console.log(num1==num2, 'num1:' , typeof num1, 'num2:', typeof num2); // so sánh number với number
console.log(num1===str1, 'num1:', typeof num1, "str1:", typeof str1); // so sánh number với string

// convert string thành number để so sánh

let num3 = +str1; // dùng dấu cộng để convert
let num4 = Number(str1); // dùng hàm Number để convert

console.log(num1==num3, 'num1:', typeof num1, 'num3:', typeof num3);
console.log(num1==num4, 'num1:', typeof num1, 'num4:', typeof num4);



