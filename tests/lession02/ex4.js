//In cân nặng lý tương
const HEIGHT = 1700; // đơn vị là cm
if (HEIGHT > 100 && HEIGHT < 200) {
    let happyWeight = ((HEIGHT%100)*9)/10 ;
    let maxWeight = HEIGHT%100;
    let minWeight = ((HEIGHT%100)*8)/10;
    console.log (happyWeight , maxWeight, minWeight)
}
else {
    console.log("Chieu cao khong hop le")
}