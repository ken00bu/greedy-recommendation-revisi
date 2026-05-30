# Greedy Recommendation

Project CLI untuk rekomendasi/tambah data manga.

## Prasyarat

- Git
- Node.js (disarankan **v20+**)

## Cara jalanin (step by step)

1) Clone repo dari GitHub

```bash
git clone https://github.com/<username>/<repo>.git
```

2) Masuk ke folder project

```bash
cd <repo>
```

3) Install dependencies

Pakai salah satu:

```bash
npm ci
```

atau:

```bash
npm install
```

Catatan: setelah install, `patch-package` akan jalan otomatis (via script `postinstall`) untuk memperbaiki tampilan checkbox prompt yang sebelumnya bisa muncul `undefined`.

4) Jalankan program

```bash
npm run dev
```

## Troubleshooting singkat

- Kalau saat pilih genre masih muncul tulisan `undefined ...`:
  - Pastikan kamu sudah menjalankan `npm ci` / `npm install` (jangan skip).
  - Pastikan file `patches/inquirer-checkbox-plus-plus+1.1.1.patch` ikut ada di repo yang kamu clone.
  - Coba install ulang dependency (hapus `node_modules`, lalu jalankan `npm ci` lagi).
