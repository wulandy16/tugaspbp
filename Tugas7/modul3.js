function cekGenapGanjil(angka) {
    return angka % 2 === 0 ? 'Genap' : 'Ganjil';
  }
  module.exports = {
    cekGenapGanjil,
  };