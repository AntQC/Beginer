// I. Phân biệt == vs ====
// khai báo biến
let compare1 = 6;
let compare2 = '6';

// compare bằng dấu ==
console.log(` so sánh 2 phần tử bằng dấu ==: `, `compare1: `, compare1, 'và compare2: ', compare2, compare1==compare2);

// compare bằng dấu ===
console.log(` so sánh 2 phần tử bằng dấu ===: `, `compare1: `, compare1, 'và compare2: ', compare2, compare1===compare2);

/* Note
1. gán giá trị cho biến dùng dấu =
2. So sánh giá trị không quan tâm kiểu dữ liệu dùng dấu ==, <=, >=. Nó sẽ cố gắng conver các giá trị về dạng number
3. So sánh giá trị quan tâm đến kiểu dữ liệu dùng dấu === (nên sử dụng dâu === thay vì dùng dấu ==)
 */

//II. Phân biệt empty, null, undefined

// khai báo biến bị undefined
let undefined1;
console.log(`check trả lỗi undefined:`, undefined1);

// khai báo biến bị empty
let empty1 = {};
console.log(`check trả lỗi empty:`, empty1);

// khai báo biến bị null
let null1 = null;
console.log(`check trả lỗi null:`, null1);


/* Note
1. Bị undefined khi khai báo biến nhưng không gán giá trị
2. Bị empty do khi khai báo biến có giá trị rỗng, giá trị này vẫn sẽ được ghi vào bộ nhớ
3. Bị null khi khai báo biến có giá trị là null, giá trị này không được ghi vào bộ nhớ
 */
