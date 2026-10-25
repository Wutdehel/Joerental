import React, { useState, useEffect } from 'react';
import Button from './Button';
import whatsappIcon from '../../assets/whatsapp.png';
import {
  UNITS,
  KOTA,
  BANDARA,
  TARIF_ZONA,
  SELISIH_ZENIX,
  CATATAN,
} from '../../data/tarifRental';

const formatRupiah = (n) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n);

const formatTanggal = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-2.5 font-poppins text-primary-black focus:outline-none focus:ring-2 focus:ring-secondary-yellow';

const PriceCalculatorModal = ({
  isOpen,
  onClose,
  phoneNumber = '6285885053055',
}) => {
  const [unit, setUnit] = useState('');
  const [pickup, setPickup] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const allLocations = [...KOTA, ...BANDARA];

  // reset hasil jika input berubah
  useEffect(() => {
    setResult(null);
    setError('');
  }, [unit, pickup, tujuan, tanggal]);

  // Esc + kunci scroll body
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unitLabel = UNITS.find((u) => u.id === unit)?.label;

  const handleHitung = () => {
    if (!unit || !pickup || !tujuan.trim() || !tanggal) {
      setError('Mohon lengkapi semua field terlebih dahulu.');
      return;
    }
    const loc = allLocations.find((l) => l.name === pickup);
    if (!loc) return;

    if (loc.zone === 'luar-pulau') {
      setResult({ needChat: true });
      return;
    }

    const zona = TARIF_ZONA[loc.zone];
    const total = zona.reborn + (unit === 'zenix' ? SELISIH_ZENIX : 0);
    setResult({ needChat: false, total, zonaLabel: zona.label });
  };

  const handleWhatsApp = () => {
    const lines = [
      'Halo Joe Rental, saya ingin bertanya mengenai ketersediaan mobil untuk disewakan.',
      '',
      `Jenis mobil: ${unitLabel}`,
      `Titik pengantaran: ${pickup}`,
      `Tujuan: ${tujuan.trim()}`,
      `Tanggal: ${formatTanggal(tanggal)}`,
    ];
    if (result && !result.needChat) {
      lines.push(`Estimasi harga: ${formatRupiah(result.total)}`);
    }
    lines.push(
      '',
      'Catatan:',
      ...CATATAN.map((c) => `- ${c}`),
      '',
      'Mohon infonya, terima kasih.',
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-xl"
          aria-label="Tutup"
        >
          ✕
        </button>

        <h3 className="font-cabin font-bold text-primary-black text-2xl mb-6 pr-8">
          Kalkulator Harga Sewa
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block font-poppins text-sm font-semibold mb-1">
              Pilih Unit
            </label>
            <select
              className={inputClass}
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">-- Pilih unit --</option>
              {UNITS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-poppins text-sm font-semibold mb-1">
              Titik Pengantaran
            </label>
            <select
              className={inputClass}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            >
              <option value="">-- Pilih titik pengantaran --</option>
              <optgroup label="Kota">
                {KOTA.map((k) => (
                  <option key={k.name} value={k.name}>
                    {k.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Bandara">
                {BANDARA.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block font-poppins text-sm font-semibold mb-1">
              Tujuan
            </label>
            <input
              type="text"
              className={inputClass}
              placeholder="Contoh: Puncak, Bandung, Yogyakarta"
              value={tujuan}
              onChange={(e) => setTujuan(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-poppins text-sm font-semibold mb-1">
              Tanggal
            </label>
            <input
              type="date"
              className={inputClass}
              min={todayISO()}
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm font-poppins">{error}</p>
          )}

          <Button
            variant="secondary"
            size="default"
            onClick={handleHitung}
            className="w-full font-bold cursor-pointer"
          >
            Hitung
          </Button>
        </div>

        {result && (
          <div className="mt-6 rounded-xl bg-gray-100 p-5 text-center">
            {result.needChat ? (
              <p className="font-poppins text-primary-black">
                Untuk tujuan di luar Pulau Jawa, harga perlu dikonfirmasi
                terlebih dahulu. Silakan chat kami via WhatsApp.
              </p>
            ) : (
              <>
                <p className="font-poppins text-sm text-gray-600">
                  {unitLabel} · {result.zonaLabel}
                </p>
                <p className="font-cabin font-bold text-secondary-yellow text-3xl md:text-4xl my-1">
                  {formatRupiah(result.total)}
                </p>
                <p className="font-poppins text-xs text-gray-500">
                  Harga per hari, bersifat tentatif
                </p>
              </>
            )}

            <Button
              variant="whatsapp"
              size="default"
              onClick={handleWhatsApp}
              className="w-full mt-4 flex items-center justify-center gap-2 cursor-pointer"
            >
              <img src={whatsappIcon} alt="" className="w-5 h-5" />
              Chat via WhatsApp
            </Button>
          </div>
        )}

        <div className="mt-6 border-t pt-4">
          <p className="font-poppins text-sm font-semibold mb-1">Notes:</p>
          <ul className="list-disc pl-5 font-poppins text-sm text-gray-600 space-y-1">
            {CATATAN.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculatorModal;
