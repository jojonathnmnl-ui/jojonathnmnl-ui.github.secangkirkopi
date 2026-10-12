# Secangkir Kopi — Landing Page

HTML5 + Tailwind CSS + JavaScript ES6 (GSAP, AOS, Lenis via CDN). Tanpa build step.

## Jalankan
Buka `index.html`, atau `npx serve .` lalu buka alamat yang tampil.

## Yang perlu kamu ganti
- **Gambar**: semua file di `assets/images/` adalah placeholder SVG (`m1-8` = menu, `g1-8` = galeri/Instagram/TikTok). Timpa dengan foto asli (WebP/JPG) dan sesuaikan ekstensi di `js/menu-filter.js` & `js/main.js`. Tambahkan `assets/images/og.jpg` (1200×630) untuk Open Graph.
- **Menu & harga**: array `MENU` di `js/menu-filter.js` (harga masih contoh).
- **WhatsApp**: `WA_NUMBER` di `js/main.js` (sekarang 6285741296343).
- **Alamat, jam buka, peta**: `index.html` bagian `#lokasi`. Untuk peta asli: Google Maps → Bagikan → Sematkan peta → salin `src` iframe.
- **Instagram/TikTok**: link ke akun Instagram `jonathanmnlla` dan TikTok `@joonaathanmnuela22`. Ganti di `index.html` dan `js/main.js` bila perlu.
- **Preview video TikTok**: letakkan mp4 di `assets/videos/` lalu isi `data-video` pada kartu di `js/main.js`.

## Mencapai Lighthouse ≥ 95
Versi ini memakai Tailwind CDN agar mudah diedit; untuk produksi:
1. Build Tailwind: `npx tailwindcss -i ./css/style.css -o ./css/out.css --minify` (dengan `tailwind.config.js` berisi warna & font), ganti tag CDN dengan `out.css`.
2. Kompres gambar ke WebP/AVIF dan beri ukuran `width/height`.
3. Pertimbangkan self-host GSAP/AOS/Lenis.

## Deploy
Upload folder ini ke Netlify, Vercel, GitHub Pages, atau hosting statis mana pun.

## Foto & kredit
Foto menu/galeri/hero dimuat dari CDN **Unsplash** (lisensi gratis untuk komersial, atribusi tidak wajib tapi dihargai). Pinterest tidak dipakai karena pin di sana milik kreator masing-masing dan tidak aman untuk bisnis. Kredit: Wenceslao Moya grondona de luca (espresso), Dali Bek (barista), Nathan Dumlao (mesin espresso), Dmytro Korobka (biji kopi), Patrick Fore (pour over), Jeremy Ricketts (cangkir espresso), Jess Bailey (croissant), Gaia&Co (matcha), Rob Wingate (iced coffee), Jasmin Schuler (hot chocolate), Tina Dawson (banana bread).
- Kalau foto gagal dimuat, otomatis kembali ke placeholder SVG.
- Untuk performa terbaik, unduh foto ke `assets/images/` (WebP) dan ubah fungsi `ph()` ke path lokal. Foto asli kedaimu tentu paling bagus.

## Lokasi
Peta memakai Plus Code `FW22+G79 Damarwulan, Jepara`. Ganti di `index.html` bagian `#lokasi` (iframe dan tombol navigasi).
