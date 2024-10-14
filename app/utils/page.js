// app/page.js
import dynamic from 'next/dynamic';

const KaryawanPage = dynamic(() => import('../ultis/page')); // Mengimpor halaman Karyawan secara dinamis

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Aplikasi Next.js Saya</h1>
      <KaryawanPage />
    </div>
  );
}
