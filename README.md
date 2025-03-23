**Penugasan Inkubasi DevOps Week II : CI/CD dengan GitHub Actions dan Firebase Deployment**

**Live site:** https://poros-week2-cicd-fcbee.web.app/
_Dokumentasi proyek bisa dilihat di bagian akhir_

# **Detail Penugasan**

## **Deskripsi Tugas**

Kembangkan dan Terapkan CI/CD pipeline menggunakan GitHub Actions untuk aplikasi React, serta melakukan deployment otomatis ke Firebase Hosting.  
Tugas ini dirancang untuk melatih pemahaman tentang Git, GitHub Actions, dan manajemen branch, termasuk menangani merge conflict di GitHub.

## **Poin Pemahaman**

1. Menguasai Git & GitHub untuk manajemen kode versi.
2. Memahami branching strategy, pull request, dan penyelesaian merge conflict.
3. Menggunakan GitHub Actions untuk otomatisasi CI/CD.
4. Melakukan deployment aplikasi React ke Firebase secara otomatis.

## **Instruksi**

### **1\. Inisialisasi Repository GitHub**

-  Buat repository GitHub baru (ex: react-firebase-devops.)
-  Clone repository ke lokal dan buat branch baru bernama dev untuk pengembangan.
-  Lakukan commit awal dengan pesan "Initial setup".

**Output yang Diharapkan:**

-  Repository GitHub dengan branch main dan dev.
-  Commit pertama berisi setup awal proyek.

### **2\. Pengembangan Aplikasi React**

-  Buat aplikasi React menggunakan create-react-app.  
   Note : Boleh menggunakan app berbasis react yang sudah pernah digunakan atau dibuat sendiri atau orang lain sebelumnya
-  Tambahkan komponen Navbar di src/App.js.
-  Buat branch baru (feature-navbar), lalu commit dan push perubahan tersebut.
-  Buka Pull Request (PR) dari feature-navbar ke dev di GitHub dan lakukan merge.

**Output yang Diharapkan:**

-  Aplikasi React sederhana dengan Navbar.
-  Branch feature-navbar berhasil dibuat dan di merge ke dev.

### **3\. Manajemen Branch dan Merge Conflict**

-  Buat branch baru (feature-footer) dan tambahkan komponen Footer di src/App.js.
-  Modifikasi struktur Navbar di branch dev, lalu commit perubahan.
-  Buka PR dari feature-footer ke dev dan selesaikan konflik yang terjadi secara manual.

Output yang Diharapkan:

-  Merge conflict terjadi dan berhasil diselesaikan di GitHub.

### **4\. Konfigurasi CI/CD dengan GitHub Actions**

-  Buat folder .github/workflows dan tambahkan file firebase-deploy.yml.
-  Tambahkan langkah-langkah dalam workflow untuk:
   -  Checkout repository
   -  Install dependencies & build aplikasi
   -  Deploy ke Firebase Hosting

**Output yang Diharapkan:**

-  Workflow GitHub Actions yang berjalan otomatis pada push ke main.

### **5\. Deployment ke Firebase Hosting**

-  Install dan login ke Firebase CLI.
-  Konfigurasi Firebase Hosting di aplikasi React.
-  Dapatkan Firebase CI Token dan tambahkan sebagai GitHub Secret.
-  Lakukan push ke branch main dan pantau hasil deployment di GitHub Actions.

**Output yang Diharapkan:**

-  Aplikasi berhasil terdeploy ke Firebase Hosting dan dapat diakses melalui URL yang diberikan Firebase.

# **Dokumentasi Proyek**

## **Tech Stack**

-  ReactJS
-  ViteJS -> Digunakan untuk inisialisasi dan setup proyek react, karena CRA (Create React App) sudah ditandai sebagai _deprecated_
-  Proyek ini menggunakan inline styling agar lebih sederhana dan ringkas

## **Github Workflows**

-  Terdiri atas 3 github workflows (2 firebase-generated dan 1 custom):
   -  firebase-deploy: sebuah workflow yang akan otomatis dijalankan ketika ada commit baru di branch main
   -  firebase-hosting-merge: sebuah workflow yang akan otomatis dijalankan ketika ada merge ke main
   -  firebase-hosting-pull-request: sebuah workflow yang akan otomatis dijalankan ketika ada pull request, kode PR akan dibuild dan dideploy ke preview channel di Firebase Hosting.
