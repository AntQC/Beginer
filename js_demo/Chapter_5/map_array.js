/**
 * Hàm map có nhiệm vụ tương tự như for
 * Tuy nhiên Hàm for sau khi lặp sẽ làm thay đổi giá trị của mảng
 * Hàm Map sau khi lặp sẽ in ra mảng mới dựa trên mảng ban đầu, không làm thay đổi giá trị của mảng ban đầu
 * Mục đích của hàm Map là sinh ra mảng mới dựa trên mảng ban đầu theo công thức nhất định
 * Cấu trúc hàm map tương tự như hàm find/ filter
 let <biến chứa arr mới được tạo ra dựa trên arr ban đầu> = <tên arr ban đầu>.map (method/ function
 chứa điều kiện để sinh ra arr mới dựa trên arr ban đầu)
 
 */

 //Ex:  khai báo arr ban đầu

 let arr_real = [1, 2, 3, 4, 5];

 let arr_fake = arr_real.map( // sinh ra mảng mới dựa trên hàm map
    (item) => {// arrow function
        return item * 2 // công thức
    }
 );
 console.log(`Mảng real là: `, arr_real);
 console.log(`Mảng fake gấp đôi mảng real là: `, arr_fake)

 // Nếu dùng hàm for sẽ modify ngay trên mảng real

 for( i = 0; i< arr_real.length; i++){
  arr_real[i] = arr_real[i]* 3;
 }
 console.log ( ` Mảng real là: `, arr_real)