// Cách khai báo vòng lặp for

/* 
** Note:
1. Cấu trúc của vòng lặp for là 
for(<điều kiện vòng lặp>) 
{ <Các thao tác cần làm cho vòng lặp> }

2. Điều kiện vòng lặp có 3 phần:
- Khai báo biến với giá trị bắt đầu. VD: let i = 0, tức là vòng lặp bắt đầu từ giá trị i = 0
- Điều kiện của vòng lặp. VD: i <= 10, tức là kiểm tra biến i nếu <= 10 thì sẽ hợp lệ
- Công việc cần thực hiện sau khi chạy vòng lặp. VD: i++, tức là sau khi chạy xong 1 vòng lặp, giá trị i sẽ + 1 để thực hiện vòng lặp tiếp theo

3. Phân biệt giữa i++, i--, ++i, --i
- i++: Tức là i = i + 1. Ví dụ: x = i++ => Thì x sẽ được gán giá trị của i trước khi i + 1
- i--: Tức là i = i - 1. Ví dụ: x = i-- => Thì x sẽ được gán giá trị của i trước khi i -1
- ++i: Tức là i = i + 1. Ví dụ: x = ++i => Thì x sẽ được gán giá trị của i sau khi i + 1
- --i: Tức là i = i + 1. Ví dụ: x = ++i => Thì x sẽ được gán giá trị của i sau khi i - 1
*/
/*------------------------------------------------------------------------------------------------------------------- */

// 1. khai báo vòng lặp với biến khai báo trực tiếp
for(let i =0; i <= 5; ++i)
{
console.log(` 1. Check value trong biến i: `, i);
// console.log(` 1. Check value trong biến j:`, j);
};

// 2. khai báo vòng lặp với biến lấy từ Mảng

// khai báo 1 mảng
let arr1 = ["an nè", "thi nè", "someone else"];

// vòng lặp lấy giá trị từ mảng
for(let i = 0; i < arr1.length; i++)
{
console.log(` 2. Check value trong biến i lấy từ mảng arr1: `, arr1[i]); // dùng arr1[i]: tức là lấy giá trị arr1[0], arr1[1], arr1[2]
};

// 2. Khai báo vòng lặp với biến lấy từ Object

let arr2  = [
{
    name: "an 1",
    age: 26  
},
{
    name: "an 2",
    age: 25
},
{
    name: "an 3",
    age: 28
}
];

for(let i = 0; i< arr2.length; i++)
{
    console.log(` 3. Kiểm tra giá trị name ở vị trí ${i} trong mảng arr2: ` + arr2[i].name);
    console.log(` 3. Kiểm tra giá trị age ở vị trí ${i} trong mảng arr2: `  + arr2[i].age);
};

// Bài tập: kiểm tra giá trị PackgeCode trong từng object của array packageInfo

let packageCode_Expect = ["MM001", "MM002", "MM003", "MM004"]

let packageInfo = [
{
    packageCode: "MM001",
    amount: 2000000,
    tenort: 3
},
{
    packageCode: "MM002",
    amount: 3000000,
    tenort: 4   
},
{
    packageCode: "MM003",
    amount: 4000000,
    tenort: 5  
},
{
    packageCode: "MM004",
    amount: 5000000,
    tenort: 6
}
];

for(let i = 0; i < packageInfo.length; ++i)
{
    console.log(` 4. Kiểm tra packageCode ở vị trí ${i} là: ` + packageInfo[i].packageCode);
};

for(let j = 0; j<packageCode_Expect.length; j++)
{
    console.log(` 5. PackageCode_Expected ở vị trí ${j} là: ` + packageCode_Expect[j]);
};


let i1 = 5;
let i2 = 6;
let i3 = 7;
let i4 = 8; 
let j1 = i1++;
let j2 = ++i2;
let j3 = i3--;
let j4 = --i4;


console.log(`check giá trị của (i,j) khi j = i++ là:`, "(" + i1 + "," + j1 + ")");
console.log(`check giá trị của (i,j) khi j = ++i là:`, "(" + i2 + "," + j2 + ")");
console.log(`check giá trị của (i,j) khi j = i-- là:`, "(" + i3 + "," + j3 + ")");
console.log(`check giá trị của (i,j) khi j = --i là:`, "(" + i4 + "," + j4 + ")");