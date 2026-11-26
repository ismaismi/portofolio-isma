
// Menampilkan tahun secara otomatis
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Isma | My Personal Website ♡`;
}

// Membuat tombol kembali ke atas
const tombol = document.createElement("button");

tombol.textContent = "↑";
tombol.title = "Kembali ke atas";

tombol.style.position = "fixed";
tombol.style.bottom = "25px";
tombol.style.right = "25px";
tombol.style.width = "45px";
tombol.style.height = "45px";
tombol.style.border = "none";
tombol.style.borderRadius = "50%";
tombol.style.background = "#d4779e";
tombol.style.color = "white";
tombol.style.fontSize = "25px";
tombol.style.cursor = "pointer";
tombol.style.display = "none";

document.body.appendChild(tombol);

// Menampilkan tombol saat halaman digulir
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        tombol.style.display = "block";
    } else {
        tombol.style.display = "none";
    }
});

// Kembali ke bagian paling atas
tombol.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
