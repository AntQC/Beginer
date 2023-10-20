/*
1. Cấu trúc câu điều kiện if là: if(condition) { code block}
2. Cấu trúc câu điều kiện else là : else { code block}
3. Ngoài ra còn có câu điều kiện else if (condition) { code block}
4. Break/ continue được dùng trong câu điều kiện
5. Break được dùng khi muốn dừng vòng lặp nếu đã tìm được kết quả theo điều kiện
6. Dùng continue khi đã tìm thấy kết quả đúng điều kiện nhưng vẫn thực hiện tiếp vòng lặp

 */

/* I. Câu điều kiện
 */
let arrpackage = ['MM01', 'MM0', 'MC01000', 'MM04','MM1233334'];
let k = 0;

while(k < arrpackage.length)
{
    if(arrpackage[k].length == 4)
    {
        console.log('Package có độ dài 4 là:', arrpackage[k]);
    }
    else if(arrpackage[k].length===3)
    {
        console.log('Package có độ dài 3 là:', arrpackage[k]);
    }
    else
    {
        console.log('Package có độ dài khác 4 và 3 là:', arrpackage[k]);
    }

    k++;
};


/* II. Break & Continue */
let h = 0
let myfen = ['An', 'Như', 'Linh', 'NA', 'Mai', 'Linh'];

for(h = 0; h < myfen.length; h++){
    if(myfen[h]== 'Linh')
    {
    console.log(`Bạn tên Linh ở vị trí: `, h+1)

    break // dừng vòng lặp nếu tìm thấy kết quả Linh

    //continue // tìm thấy kết quả Linh nhưng vẫn muốn thực hiện tiếp vòng lặp

    }
    else{
        console.log('Bạn khác tên Linh ở vị trí: ', h+1)
    }
}