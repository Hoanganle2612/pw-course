//tạo vòng lặp từ 0->100, in i với điều kiện số âm số dương
for (let i=0; i<100; i++) {  
    if (i%2 == 0) {
        console.log( `số ${i} là số dương `)
    }
    else if (i%2 !== 0) {
        console.log( `số ${i} là số âm `)
    }
    else {
        console.log( `${i} không hợp lệ`)
    };
}
