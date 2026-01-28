// Fungsi Welcoming Speech "Hi Name"
function replaceName() {
    let name = prompt("Siapa nama anda?", "");
    if (name !== null && name !== "") {
        document.getElementById("display-name").innerText = name;
    }
}

// Jalankan fungsi ganti nama saat pertama kali load
replaceName();

// Validasi Form dan Menampilkan Hasil
const form = document.getElementById('messageForm');

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan reload halaman

    // Ambil data dari elemen input
    const nameValue = document.getElementById('name').value;
    const dateValue = document.getElementById('birthdate').value;
    const genderValue = document.querySelector('input[name="gender"]:checked').value;
    const messageValue = document.getElementById('message').value;
    
    // Generate waktu saat ini
    const currentTime = new Date();

    // Tampilkan data ke kotak hasil secara konsisten
    document.getElementById('res-time').innerText = currentTime.toString();
    document.getElementById('res-name').innerText = nameValue;
    document.getElementById('res-birthdate').innerText = dateValue;
    document.getElementById('res-gender').innerText = genderValue;
    document.getElementById('res-message').innerText = messageValue;

    // Opsional: Alert sukses
    alert("Terima kasih! Pesan Anda telah diterima.");
});