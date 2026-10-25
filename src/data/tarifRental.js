// Selisih Zenix dibanding Reborn
export const SELISIH_ZENIX = 200000;

export const UNITS = [
  { id: 'reborn', label: 'Innova Reborn' },
  { id: 'zenix', label: 'Innova Zenix' },
];

// Tarif dasar (Reborn). Zenix = tarif Reborn + SELISIH_ZENIX
export const TARIF_ZONA = {
  'dalam-kota': { label: 'Dalam kota (termasuk bandara)', reborn: 1000000 },
  jabodetabek: { label: 'Sekitar Jabodetabek', reborn: 1350000 },
  jawa: { label: 'Pulau Jawa (harga tentatif)', reborn: 1600000 },
  // 'luar-pulau' sengaja tidak punya harga: wajib chat dulu
};

// zone: 'dalam-kota' | 'jabodetabek' | 'jawa' | 'luar-pulau'
export const KOTA = [
  // Jakarta & sekitarnya
  { name: 'Jakarta', zone: 'dalam-kota' },
  { name: 'Bogor', zone: 'jabodetabek' },
  { name: 'Depok', zone: 'jabodetabek' },
  { name: 'Tangerang', zone: 'jabodetabek' },
  { name: 'Bekasi', zone: 'jabodetabek' },
  // Jawa
  { name: 'Serang', zone: 'jawa' },
  { name: 'Sukabumi', zone: 'jawa' },
  { name: 'Bandung', zone: 'jawa' },
  { name: 'Cirebon', zone: 'jawa' },
  { name: 'Semarang', zone: 'jawa' },
  { name: 'Yogyakarta', zone: 'jawa' },
  { name: 'Surakarta (Solo)', zone: 'jawa' },
  { name: 'Surabaya', zone: 'jawa' },
  { name: 'Malang', zone: 'jawa' },
  { name: 'Banyuwangi', zone: 'jawa' },
  // Sumatera
  { name: 'Sabang', zone: 'luar-pulau' },
  { name: 'Banda Aceh', zone: 'luar-pulau' },
  { name: 'Medan', zone: 'luar-pulau' },
  { name: 'Padang', zone: 'luar-pulau' },
  { name: 'Pekanbaru', zone: 'luar-pulau' },
  { name: 'Batam', zone: 'luar-pulau' },
  { name: 'Jambi', zone: 'luar-pulau' },
  { name: 'Palembang', zone: 'luar-pulau' },
  { name: 'Bandar Lampung', zone: 'luar-pulau' },
  // Kalimantan
  { name: 'Pontianak', zone: 'luar-pulau' },
  { name: 'Banjarmasin', zone: 'luar-pulau' },
  { name: 'Balikpapan', zone: 'luar-pulau' },
  { name: 'Samarinda', zone: 'luar-pulau' },
  // Sulawesi
  { name: 'Manado', zone: 'luar-pulau' },
  { name: 'Makassar', zone: 'luar-pulau' },
  // Bali & Nusa Tenggara
  { name: 'Denpasar', zone: 'luar-pulau' },
  { name: 'Mataram', zone: 'luar-pulau' },
  { name: 'Kupang', zone: 'luar-pulau' },
  // Maluku & Papua
  { name: 'Ambon', zone: 'luar-pulau' },
  { name: 'Ternate', zone: 'luar-pulau' },
  { name: 'Sorong', zone: 'luar-pulau' },
  { name: 'Jayapura', zone: 'luar-pulau' },
  { name: 'Merauke', zone: 'luar-pulau' },
];

export const BANDARA = [
  { name: 'Bandara Soekarno-Hatta (CGK)', zone: 'dalam-kota' },
  { name: 'Bandara Halim Perdanakusuma (HLP)', zone: 'dalam-kota' },
  { name: 'Bandara Husein Sastranegara (BDO)', zone: 'jawa' },
  { name: 'Bandara Kertajati (KJT)', zone: 'jawa' },
  { name: 'Bandara Ahmad Yani (SRG)', zone: 'jawa' },
  { name: 'Bandara YIA Yogyakarta (YIA)', zone: 'jawa' },
  { name: 'Bandara Adi Soemarmo (SOC)', zone: 'jawa' },
  { name: 'Bandara Juanda (SUB)', zone: 'jawa' },
  { name: 'Bandara Abdul Rachman Saleh (MLG)', zone: 'jawa' },
  { name: 'Bandara Sultan Iskandar Muda (BTJ)', zone: 'luar-pulau' },
  { name: 'Bandara Kualanamu (KNO)', zone: 'luar-pulau' },
  { name: 'Bandara Minangkabau (PDG)', zone: 'luar-pulau' },
  { name: 'Bandara Hang Nadim (BTH)', zone: 'luar-pulau' },
  { name: 'Bandara Sultan Mahmud Badaruddin II (PLM)', zone: 'luar-pulau' },
  { name: 'Bandara Radin Inten II (TKG)', zone: 'luar-pulau' },
  { name: 'Bandara Supadio (PNK)', zone: 'luar-pulau' },
  { name: 'Bandara Syamsudin Noor (BDJ)', zone: 'luar-pulau' },
  { name: 'Bandara Sultan Aji Muhammad Sulaiman (BPN)', zone: 'luar-pulau' },
  { name: 'Bandara Sam Ratulangi (MDC)', zone: 'luar-pulau' },
  { name: 'Bandara Sultan Hasanuddin (UPG)', zone: 'luar-pulau' },
  { name: 'Bandara I Gusti Ngurah Rai (DPS)', zone: 'luar-pulau' },
  { name: 'Bandara Lombok (LOP)', zone: 'luar-pulau' },
  { name: 'Bandara El Tari (KOE)', zone: 'luar-pulau' },
  { name: 'Bandara Pattimura (AMQ)', zone: 'luar-pulau' },
  { name: 'Bandara Sentani (DJJ)', zone: 'luar-pulau' },
  { name: 'Bandara Mopah (MKQ)', zone: 'luar-pulau' },
];

export const CATATAN = [
  'Tidak bisa lepas kunci',
  'Harga belum termasuk BBM, biaya makan supir, dan tol',
];
