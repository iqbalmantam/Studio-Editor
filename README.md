# Studio-Editor: tambahan gaya CapCut

Semua perubahan ada di `index.html` (vendor tidak diubah). Diuji di Chromium: keyframe, mask, chroma key, animasi teks, speed ramp, split, undo, simpan/buka proyek, pemulihan PiP, dan ekspor H.264.

## Tahap 1
- Keyframe klip (tab Ukuran): zoom, geser X/Y, putar bebas, opasitas; gerak Linear/Halus. Setelah ada keyframe, mengubah nilai di posisi mana pun otomatis membuat keyframe di playhead. Waktu keyframe terhadap file sumber, jadi aman terhadap split/trim/speed.
- Mask klip: bulat, kotak membulat, hati, bintang, belah ketupat, dengan ukuran.
- PiP (tab Efek): opasitas, mask bentuk, blend mode, chroma key (toleransi, tepi halus, despill, pipet warna).
- Teks: 5 font, 5 animasi (Pop, Naik, Ketik, Memantul, Zoom masuk), fade keluar.

## Tahap 2
- Speed ramp (tab Klip): 6 preset kurva (Montage, Hero, Bullet, Flash in, Flash out, Jump). Klip dipecah 10 bagian dengan kecepatan mengikuti kurva yang dihaluskan, dikalikan kecepatan dasar klip. Sambungan antar bagian mulus saat pratinjau dan tanpa fade/dip audio palsu. Tombol Hapus ramp menggabungkan kembali.
- Pengaturan PiP kini tersimpan di file proyek dan draf; saat dibuka, pasang ulang file video PiP dan semua pengaturan pulih.
- Penanda ◆ keyframe pada timeline untuk klip terpilih.
- Memilih animasi teks langsung memutar pratinjau singkat.
- Pintasan K = tambah keyframe. Tile baru di beranda (Keyframe, Green Screen, Mask, Speed Ramp, Animasi Teks, Putar & Opasitas).

## Tahap 3
- Trek teks di timeline: tiap teks/caption jadi blok yang bisa digeser, di-trim lewat pegangan di ujung, dan diketuk untuk memilih (playhead pindah ke teks dan barisnya di daftar tersorot). Teks yang tumpang tindih otomatis ditata ke beberapa baris. Mengetuk teks langsung di preview juga memilihnya. Semua perubahan bisa di-undo dan dibatasi sampai durasi video.
- Chroma key lebih ringan di pratinjau (diproses maksimal 480 px lalu diskalakan; beban per frame di kanvas 1080p turun dari sekitar 33 ms ke sekitar 5 ms). Ekspor tetap memakai resolusi penuh.
- Perbaikan: menggeser teks atau mengubah ukuran mask tidak lagi bisa membuat keyframe tak sengaja.

## Tahap 4
- PiP multi-lapis: tambah sebanyak yang diperlukan dengan tombol + Video PiP. Tiap lapisan punya pengaturan sendiri (ukuran, opasitas, mask, blend, chroma key, waktu mulai, durasi). Pilih lapisan lewat daftar "Lapisan" atau dengan mengetuk overlay di preview; yang terpilih diberi garis putus-putus biru di preview (tidak ikut ke ekspor).
- Posisi bebas: seret overlay langsung di preview, atau pilih salah satu dari 4 sudut.
- Trek overlay di timeline (biru): geser, trim kanan, trim kiri (ikut memotong awal video sumber), ketuk untuk memilih. Overlay yang tumpang tindih ditata ke beberapa baris. Urutan lapisan = urutan pemasangan (yang terbaru di atas).
- Undo/redo kini mencakup tambah, hapus, geser, dan semua pengaturan overlay.
- Simpan/buka proyek menyimpan semua lapisan. Saat membuka proyek, pasang ulang file PiP; tiap file dicocokkan ke pengaturannya lewat nama file (kalau tidak cocok, memakai urutan). Proyek lama dengan satu PiP tetap bisa dibuka.

## Tahap 5
- Overlay gambar: tombol 🖼 + Gambar menambah PNG/JPG/WebP sebagai lapisan; transparansi PNG dipertahankan.
- Stiker emoji: 12 emoji siap pakai (jadi lapisan, bukan teks), dan bisa digeser, diputar, di-trim di trek biru, diberi mask, blend, opasitas, serta chroma key seperti overlay lain.
- Rotasi bebas (-180 sampai 180) untuk semua overlay; area sentuh dan garis pilihan ikut berputar.
- Urutan lapisan: tombol ▲ Naikkan / ▼ Turunkan (bisa di-undo).
- Stiker emoji dan gambar tersimpan di file proyek dan draf, jadi langsung pulih saat proyek dibuka (tanpa pasang ulang file). Urutan lapisan, termasuk di antara video PiP yang masih menunggu file, dipertahankan.

## Tahap 6
- Chroma key klip utama (tab Ukuran): warna, pipet, toleransi, tepi halus. Pratinjau memproses sampai 720 px, ekspor memakai resolusi penuh.
- Blend klip utama (Normal, Screen, Multiply, Overlay, Lighten, Darken, Difference); efeknya terlihat bila ada lapisan di belakang klip.
- Overlay "di belakang klip utama": tombol ↧ di tab Efek menaruh overlay (video, gambar, emoji) di bawah klip utama. Dengan chroma key klip, ini jadi green screen sungguhan: area hijau memperlihatkan overlay latar. Overlay di belakang tidak menangkap sentuhan di preview, jadi geser klip tetap normal; atur lewat daftar Lapisan atau trek biru (diberi tanda ↧).
- Tombol ⛶ Isi layar: overlay diperbesar menutup seluruh kanvas dan dipusatkan (batas ukuran slider dinaikkan ke 400%).
- Saat chroma key klip aktif dan layar mode Blur, latar blur dilewati supaya area yang dihapus tidak menampilkan hijau yang diburamkan.
- Semua pengaturan baru ikut tersimpan di proyek, bisa di-undo.

## Batasan
- Speed ramp berbentuk 10 langkah, bukan kurva kontinu; nada audio ikut berubah mengikuti kecepatan.
- Animasi teks tampil penuh saat jeda; gunakan Play atau ganti animasi untuk melihatnya.
- Overlay belum punya keyframe/animasi masuk-keluar sendiri (keyframe baru untuk klip utama).
- Chroma key bekerja di ruang warna CbCr tanpa algoritma matting lanjutan, jadi rambut halus/tepi transparan bisa kurang rapi dibanding CapCut.
- Gambar overlay disimpan ke proyek dalam resolusi maksimal 512 px.
- Belum ada: stabilisasi, hapus background, TTS, template, auto-caption berbasis model (masih pengenalan suara browser lewat mikrofon).

## Tampilan gaya CapCut
- Blok `<style id="cc-skin">` dan `<script id="cc-skin-js">` di `index.html`; logika editor tidak diubah.
- Desktop: bilah atas, panel alat kiri dengan tab ikon, pemutar tengah, toolbar timeline (undo, redo, split, hapus, zoom), trek dengan playhead putih.
- HP: pemutar di atas, toolbar timeline, panel alat dan bilah ikon bawah.
- Warna: latar gelap #0b0b0c, panel #1b1b1d, aksen cyan #2de3e8.

## Tampilan CapCut, tahap 2
- Desktop: panel Detail di kanan (tab Video dan Klip), panel kiri berisi Teks, Audio, Efek, Proyek. Di HP semua tab tetap satu panel.
- Klip video di timeline menampilkan strip thumbnail; klip audio menampilkan gelombang suara.
- Ikon beranda memakai SVG, bukan emoji.

## Tampilan CapCut, tahap 3
- Penggaris waktu (0:00, 0:02, ...) di atas timeline; jaraknya menyesuaikan zoom.
- Thumbnail klip video kini berupa deretan frame berbeda sepanjang klip yang di-trim (foto dan freeze tetap memakai satu gambar).
- Logo Mantam (burung phoenix) tidak diubah.

## Tampilan CapCut, tahap 4 (rombak)
- Urutan trek seperti CapCut: overlay, teks, video utama, audio. Playhead putih menembus semua trek.
- Tab Media (pertama): tombol Impor besar dan pustaka klip proyek; ketuk klip untuk pindah ke posisinya.
- Bar pemutar: waktu berjalan cyan, tombol rasio, layar penuh.
- Format dan kualitas ekspor pindah ke popover di samping tombol Ekspor. Judul proyek di tengah bilah atas.
- Logo Mantam tidak diubah.

## Optimasi dan fitur baru
- Performa: tidak ada lagi timer yang berjalan terus untuk playhead, penggaris, dan pustaka media; pembaruan hanya terjadi saat ada perubahan. Beban saat diam turun dari sekitar 0,044 detik ke 0,002 detik per 3 detik. Pembaruan berhenti saat tab tersembunyi.
- Thumbnail dibuat satu per satu, berhenti saat video diputar, dan cache dibatasi (40 thumbnail, 120 gelombang suara).
- Pengaman error: kendala tak terduga menampilkan pesan singkat, tidak spam, dan tidak menghentikan editor. Peringatan sebelum menutup tab saat ekspor berjalan.
- Fitur: klik atau seret penggaris untuk pindah posisi, tombol Pas layar, daftar pintasan keyboard (tombol di bilah atas atau tekan ?).
- Diuji: desktop, HP, dan laptop kecil (impor, split, undo, duplikat, hapus, seek, zoom, pemutaran, ekspor sampai file MP4 jadi), tanpa error.
