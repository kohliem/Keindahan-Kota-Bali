// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Form Validation (Sederhana)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = contactForm.nama.value.trim();
    const email = contactForm.email.value.trim();
    const pesan = contactForm.pesan.value.trim();

    if (nama === '' || email === '' || pesan === '') {
        alert('Semua field harus diisi!');
        return;
    }

    // Anda bisa menambahkan logika pengiriman formulir di sini
    alert('Pesan Anda telah terkirim!');
    contactForm.reset();
});
