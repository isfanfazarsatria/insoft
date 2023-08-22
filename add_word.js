function insertWord(originalText, wordToInsert, position) {
    var words = originalText.split(/\s+/);
    words.splice(position, 0, wordToInsert);
    var newText = words.join(' ');
    return newText;
}
// Contoh penggunaan
var inputText = "Ini adalah contoh kalimat untuk dihitung jumlah katanya.";
var wordToInsert = "tambahan";
var positionToInsert = 3;
var newText = insertWord(inputText, wordToInsert, positionToInsert);
console.log("Teks baru:", newText);