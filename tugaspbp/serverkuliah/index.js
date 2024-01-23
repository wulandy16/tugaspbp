const mahasiswaNim = '2110438932';
const updatedData = {
    nama : 'jhonny',
    gender : 'L',
    prodi : 'TE',
    alamat : 'Jl.Cibolang'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updatedData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// METHOD POST
const newData = {
  nim: "2110267341",
  nama: "Dimas",
  gender: "L",
  prodi: "TE",
  alamat: "Serpong",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nimToDelete = "2110543781";

fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

  // DOSEN
// METHOD PUT
const dosenNip = "2020153456";
const updatedDosenData = {
  nama: "Yariska",
  gender: "P",
  alamat: "Pamulang",
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD POST
const newDosenData = {
  nip: "2020986102",
  nama: "Archella",
  gender: "P",
  alamat: "Cisaat",
};

fetch(`http://localhost:3000/dosen`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nipToDelete = "2020153420";

fetch(`http://localhost:3000/dosen/${nipToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));