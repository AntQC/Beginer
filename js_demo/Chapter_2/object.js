// khai báo biến dạng object basic
/*
Note:
Object khai báo trong cặp dấu {}
Object khai báo dạng key:value
Key không được dùng dấu cách
key có thể để trong dấu backtick hoặc " "
Các cặp giá trị cách nhau bởi dấu ,
Lấy value của key có 2 cách: 1. <object name>.<key cần lấy value>. ví dụ object.name, 2.<object name[biến chứa key]>. Ví dụ object[key_dymamic]
*/


// key:value
let object1 = {
    name: 'Ant nè',
    dob: `26/06/1997`,
    address: `TP HCM`,
    gender: `Female`,
    age: 26
};
console.log(`Object của tui là: `, object1);

// khai báo biến chứa các value động cho các key trong object

let key_dymamic = 'name'; // lưu các value của key: name vào biến key_dynamic
object1.name = 'Thi nè'; // set các giá trị của biến key: name. Lúc này chỉ lấy giá trị nằm trong biến object1.name. 
// hoặc
object1[key_dymamic] ='Thi nè';

// lấy value trực tiếp từ key
console.log(`My name is: ${object1.name}`);
console.log(`I'm from: ${object1.address} and ${object1.age} years old `);

// lấy value từ biến lưu các value của key
console.log(`My name is: ${object1[key_dymamic]}`);

