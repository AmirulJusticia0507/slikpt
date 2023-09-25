const mysql = require('mysql2');
require('dotenv').config(); // Menggunakan dotenv untuk mengambil konfigurasi dari file .env

// Konfigurasi koneksi database dari variabel lingkungan (.env)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Membuka koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err);
    } else {
        console.log('Koneksi database berhasil');
    }
});

module.exports = db;