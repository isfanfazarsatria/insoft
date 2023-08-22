function printTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}
// Contoh penggunaan
var numRows = 5;
printTriangle(numRows);