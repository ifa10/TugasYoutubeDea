// ultis/karyawan.js
import fs from 'fs';
import path from 'path';

export function getKaryawanData() {
  const filePath = path.join(process.cwd(), 'ultis', 'data.json');
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}
