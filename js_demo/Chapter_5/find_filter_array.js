/* 
1. Filter là lọc data trong mảng có các giá trị thõa điều kiện-> Có thể trả nhiều dữ liệu
2. Find là tìm data trong mảng  có giá trị thõa điều kiện đầu tiên-> Chỉ trả 1 dữ liệu
3. Hàm filter sẽ trả về mảng mới, mảng ban đầu không bị ảnh hưởng
*/


// I. Hàm filter

/* cấu trúc hàm filter:
 let <biến chứa giá trị filter> = <tên mảng>.filter (method/ function để chưa điều kiện filter)
*/

// khai bảo 1 mảng

let arr_filter = [
{ 
        name: "An",
        age: 26 
},
{
        name: "Thi",
        age: 26,
},
{ 
         name: "Nhung",
        age: 20 
},
{
         name: "NA",
         age: 29,
}
];

// gọi hàm filter

// gọi hàm function bình thường
let filter_age = arr_filter.filter( // biến fiter_age sẽ chứa kết quả filter các giá trị age
    function check_age (age_var) { // tham số trong function
        return age_var.age > 20; // điều kiện/ công thức để xuất ra dữ liệu
    }
);
console.log(` age > 20 là: `, filter_age);

// dùng hàm function arrow

let filter_age_2 = arr_filter.filter(
    (age_var) => {
    return age_var.age < 29;
  }
);
console.log('age < 29 là: ', filter_age_2);

//II. Hàm find
/* 
1. Cấu trúc hàm find, tương tự hàm filter nhưng thay thành từ find
let <biến chứa giá trị find> = <tên mảng>.find (method/ function để chứa điều kiện find)
*/

// khai báo mảng

let arr_find = [
{
    id: "001",
    color: "Red",
    total: 5
},
{
    id: "001",
    color: "Green",
    total: 9
},
{
    id: "001",
    color: "Black",
    total: 5
},
{
    id: "001",
    color: "Blue",
    total: 15
},
{
    id: "001",
    color: "Pink",
    total: 5
}
]

// tìm màu có số lượng là 5

let find_total = arr_find.find(
    (total_find) =>{
        return total_find.total === 5;
    }
);
console.log(` màu có total = 5 là: `, find_total);
