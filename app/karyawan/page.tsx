// app/karyawan/page.ts
import { getKaryawanData } from '../../utils/karyawan';
import './karyawan.css'; // Import CSS for this page

const karyawan = async () => {
  const data = getKaryawanData();

  return (
    <div className="karyawan-container">
      <h1>Detail Karyawan</h1>
      <ul>
        {data.karyawan.map((k) => (
          <li key={k.id}>
            {k.nama} - {k.jabatan || k.posisi} - Gaji: {k.gaji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default karyawan;
