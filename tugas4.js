// Masukkan total pendapatan penjualan (dalam Rupiah)
var pendapatan = 800000;

// Inisialisasi variabel untuk uang jasa dan persentase komisi
var uangJasa, persentaseKomisi;

// Cek total pendapatan penjualan menggunakan if-else
if (pendapatan <= 200000) {
    uangJasa = 10000;
    persentaseKomisi = 0.1;
} else if (pendapatan > 200000 && pendapatan <= 500000) {
    uangJasa = 20000;
    persentaseKomisi = 0.15;
} else if (pendapatan > 500000) {
    uangJasa = 30000;
    persentaseKomisi = 0.2;
}

// Hitung jumlah komisi
var komisi = pendapatan * persentaseKomisi;

// Hitung total pembayaran
var totalPembayaran = uangJasa + komisi;

// Output hasil menggunakan switch case
switch (true) {
    case pendapatan <= 200000:
        console.log("Total pembayaran: Rp.", totalPembayaran);
        break;
    case pendapatan > 200000 && pendapatan <= 500000:
        console.log("Total pembayaran: Rp.", totalPembayaran);
        break;
    case pendapatan > 500000:
        console.log("Total pembayaran: Rp.", totalPembayaran);
        break;
    default:
        console.log("Total pembayaran tidak valid.");
}
