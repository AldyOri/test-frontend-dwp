## 📝 Laporan Pengerjaan Frontend Internship Task

Berikut adalah laporan hasil pengerjaan tugas frontend internship sesuai studi kasus yang diberikan:

---

### ✅ Halaman yang Telah Dibuat

- `/` - **Home Page**  
- `/login` - **Login Page**  
- `/cart` - **Cart Page**

---

### 🎨 Desain Responsif

- Seluruh halaman sudah responsif untuk **layar mobile dan desktop**
- *Catatan:* halaman `/cart` belum sepenuhnya responsif

---

### 🔐 Fitur Autentikasi (Fake Auth)

- Login hanya bisa dilakukan jika akun **terdaftar di `db.json`**
- Simulasi sesi login dilakukan menggunakan penyimpanan lokal (localStorage)

---

### 🛡️ Protected Route

- Route `/` hanya bisa diakses **jika sudah login**
- Route `/login` hanya bisa diakses **jika belum login**

---

### 🔍 Fitur Filter & Search

- **Filter berdasarkan provider** (Telkomsel, Indosat, XL, dll.)
- **Filter berdasarkan masa aktif** (1 Hari, 7 Hari, 30 Hari, dst.)
- **Search produk** berdasarkan nama paket

---

### ⚡ Fitur Flash Sale

- Produk dengan diskon ditandai sebagai **Flash Sale**
- Menampilkan harga asli, diskon (%), dan harga setelah diskon

---

### 🛒 Fitur Cart / Keranjang Belanja

- Setiap akun memiliki **keranjang yang berbeda**
- Fitur menambahkan produk ke keranjang
- Produk yang ditambahkan ditampilkan di halaman `/cart`

---

### 💳 Fitur Pembelian & Riwayat

- Simulasi **pembelian produk** dari cart
- Melihat **riwayat pembelian produk**
- **Edit transaksi pembelian** secara manual (simulasi)

---

### 📁 Teknologi & Tools

- React.js (Vite + Typescript)
- React Router
- JSON Server (`db.json`)
- Tailwind CSS / Shadcn UI
- State management: React Hooks (`useState`, `useEffect`, `useContext`)

---

### ▶️ Cara Menjalankan Project

```bash
$ git clone https://github.com/AldyOri/test-frontend-dwp.git
$ cd test-frontend-dwp
$ npm install
$ npm run dev
