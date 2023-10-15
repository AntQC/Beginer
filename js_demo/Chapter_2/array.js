// Cách khai báo biến dạng array
/* Note:
Array khai báo trong cặp dấu []
Array khai báo giá trị dạng index (0,1,2), bao gồm tất cả các format type
Giá trị index  có thể để trong dấu "", dấu backtick, ...
Các giá trị index cách nhau bởi dấu ,
Cách lấy giá trị index: <array name>.[index] hoặc <array name>.[index].<key> đối với object
*/


// array = [arr1, arr2, arr3]
let array1 = ["An nè", "Thi nè", "Someone else"];

console.log(` Mảng của tui là:`, array1);

// array chứa object
let array2 = [
    {
        name: "An nè",
        dob: "26/06/1997"
    },
    {
        name: "Thi nè", 
        dob: "25/11/1997"
    },
    
];
console.log(` Mảng dạng Object của tui là: `, array2);

// Lấy giá trị trong mảng
console.log(` Giá trị đầu tiên trong mảng 1 là: ${array1[0]}`);
console.log(` Giá trị name thứ 2 trong mảng 2 là: ${array2[1].name}`);



