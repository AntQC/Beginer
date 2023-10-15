// khai báo biến
let template_tring1 = 2;
let template_string2 = 3;

// kiểm tra kết quả cách thông thường
console.log(`thực hiện phép toán cộng giữa 2 biến là: ` + (template_tring1+template_string2) + ` \nvà ` + `thực hiện phép toán nhân giữa 2 biến là: ` + (template_string2*template_tring1));

// kiểm tra kết quả cách dùng template string*
console.log(` thực hiện phép toán cộng giữa 2 biến là: ${template_tring1+template_string2}
 và thực hiện phép toán nhân giữa 2 biến ${template_string2*template_tring1}`); // sử dụng dấu $ để gọi biến và dấu {variable} để chứa biến

// phân biệt giữa dấu , và dấu + trong console.log: Dấu , để phân cách các giá trị cần hiển thị trong console.log. Dấu + để cộng chuỗi
// Nhưng khi sử dụng template string thì không cần quan tâm dấu , hoặc dấu +. Chỉ cần sử dụng cặp dấu backtick `<content>` $ gọi biến và {variable}

