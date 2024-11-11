//Cara untuk membuat object pada javascript
//1. Object Literal
// let mahasiswa = {
//     nama: 'Khidir',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energi + porsi;
//         console.log(`Hai ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Afwan',
//     energy: 20,
//     makan: function(porsi) {
//         this.energy = this.energi + porsi;
//         console.log(`Hai ${this.nama}, selamat makan!`);
//     }
// }

//2. Function Declaration
// function mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;
// }

// let khidir = mahasiswa('Sandhika', 10);
// let afwan = mahasiswa('Khidir', 10);

//3. Constructor Function
function mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let khidir = new mahasiswa('Sandhika', 10);
//Keyword new