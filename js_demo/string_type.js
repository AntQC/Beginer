
// khai báo dạng string
let string1 = 'Bài 3- Học kiểu dữ liệu string    ';
console.log(string1);

let number1 = 2, number2 = 3;
let string2 = 'Ant'

// cộng chuỗi
console.log(number1 + number2 + string2);
console.log(string2 + number1 + number2);
console.log(number1 + string2 + number2);

// kiểm tra chiều dài chuỗi có tính khoảng trắng bằng hàm lenght
console.log(string1.length);

// kiểm tra chiều dài chuỗi không tính khoảng trắng bằng hàm trim()
console.log(string1.trim().length);

// khai báo dạng chuỗi trong chuỗi
let exp1 = `my name's Ant.`
let exp2 = 'I love "myselft."'
let exp3 = "I improve 'my skill'."
let exp4 = "But i recommend ``"
console.log(exp1,exp2,exp3, exp4 )

// method của string
console.log(string1.split())
