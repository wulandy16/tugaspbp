function sapaWaktu(waktu) {
    let sapaan = 'Selamat ';
    if (waktu === 'pagi') {
      sapaan += 'Pagi';
    } else if (waktu === 'sore') {
      sapaan += 'Sore';
    } else if (waktu === 'malam') {
      sapaan += 'Malam';
    }
    return `${sapaan} !`;
  }

  module.exports = {
    sapaWaktu,
  };
    