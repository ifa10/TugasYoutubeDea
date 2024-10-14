// pages/index.js
import { getKaryawanData } from '../ultis/karyawan';

export default function Home({ karyawan, departemen }) {
  return (
    <div>
      <h1>Daftar Karyawan</h1>
      <ul>
        {karyawan.map((k) => (
          <li key={k.id}>
            {k.nama} - {k.jabatan || k.posisi} - Gaji: {k.gaji}
          </li>
        ))}
      </ul>

      <h1>Daftar Departemen</h1>
      <ul>
        {departemen.map((d) => (
          <li key={d.id}>
            {d.nama} - Kepala: Karyawan {d.kepala}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = getKaryawanData();
  
  return {
    props: {
      karyawan: data.karyawan,
      departemen: data.departemen,
    },
  };
}
