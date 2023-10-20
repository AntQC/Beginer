/**
 * Không phân biệt được loại data mà sẽ convert các loại data thành dạng chuỗi sau đó sort theo 
 thứ tự từ a-z
 * Để sắp xếp đúng cho các loại data sẽ dùng so sánh biến 1 và biến 2 bằng cú pháp 
 var1 - var2 => Nó sẽ so sánh từng cặp
 * Cấu trúc hàm sort tương tự như hàm map/ find/ filter

 */

 // Khai báo mảng

 let sort_arr = [1, 100, 30, 0, 50, 9, 8, 80, 70];

 // sắp xếp mảng theo hàm sort bình thường

let sorted = sort_arr.sort()
console.log(` Mảng được sắp sếp theo hàm sort bình thường: `, sorted)

// sắp xếp mảng khi có function so sánh

let sorted2 = sort_arr.sort(
    (item1, item2) => { // gọi 1 function có nhiệm vụ so sánh
        return item1 - item2; // ký hiệu - tức là so sánh item1 < item2
    }
);
console.log( ` Mảng được sắp xếp khi có function so sánh:`, sorted2);