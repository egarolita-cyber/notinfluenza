
// Menu navigasi
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("open");
});

// Tutup menu setelah diklik
document.querySelectorAll("#mainNav a").forEach(function(link) {
    link.addEventListener("click", function() {
        mainNav.classList.remove("open");
    });
});

// Form konsultasi
document.getElementById("consultForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    const status = document.getElementById("status");

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const polaTelepon = /^[0-9+\-\s]{9,16}$/;

    if (nama.length < 3) {
        status.textContent = "Nama minimal 3 karakter!";
        status.style.color = "red";
        return;
    }

    if (!polaEmail.test(email)) {
        status.textContent = "Email tidak valid!";
        status.style.color = "red";
        return;
    }

    if (!polaTelepon.test(telepon)) {
        status.textContent = "Nomor telepon tidak valid!";
        status.style.color = "red";
        return;
    }

    if (pesan.length < 10) {
        status.textContent = "Pesan minimal 10 karakter!";
        status.style.color = "red";
        return;
    }

    status.textContent =
        "Terima kasih " + nama +
        ", formulir berhasil divalidasi!";

    status.style.color = "green";

    this.reset();
});
