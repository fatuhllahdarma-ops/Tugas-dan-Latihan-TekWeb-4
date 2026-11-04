function hitung(operator) {
    const a = parseFloat(document.getElementById('angka1').value);
    const b = parseFloat(document.getElementById('angka2').value);
    let hasil;

    if (isNaN(a) || isNaN(b)) {
        hasil = 'Masukkan kedua angka';
    } else if (operator === '+') hasil = a + b;
    else if (operator === '-') hasil = a - b;
    else if (operator === '*') hasil = a * b;
    else if (operator === '/') hasil = b === 0 ? 'Tidak bisa dibagi 0' : a / b;

    document.getElementById('muncul').textContent = 'Hasil: ' + hasil;
}