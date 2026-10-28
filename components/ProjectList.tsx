'use client'

const techPalette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-sky-700', 'bg-violet-600', 'bg-orange-600', 'bg-green-700']

// warna lencana dipilih konsisten dari teksnya, jadi tag baru otomatis mendapat warna tanpa perlu didaftarkan
const techColor = (tech: string) => techPalette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % techPalette.length]

// rincian dari butir-butir pengalaman di CV (magang & pengalaman akademik)
const projects = [
  {
    number: '01',
    title: "Perencanaan Pengadaan, Penerimaan & Distribusi Obat",
    description: "Mempelajari proses perencanaan pengadaan, penerimaan, dan distribusi obat sesuai standar operasional Pedagang Besar Farmasi (PBF).",
    framework: "PBF — PBF MARGA NUSANTARA JAYA MAKASSAR",
    techStack: ["PBF", "Pengadaan", "Distribusi Obat"],
    link: '#',
  },
  {
    number: '02',
    title: "Penyiapan Obat Berdasarkan Faktur",
    description: "Menyiapkan obat berdasarkan faktur serta memeriksa kesesuaian jenis dan jumlah barang sebelum proses pengiriman.",
    framework: "PBF — PBF MARGA NUSANTARA JAYA MAKASSAR",
    techStack: ["Faktur", "Pemeriksaan Barang", "Pengiriman"],
    link: '#',
  },
  {
    number: '03',
    title: "Penyimpanan Obat: FEFO, Alfabetis & Bentuk Sediaan",
    description: "Menerapkan prinsip FEFO, urutan alfabetis, dan pengelompokan bentuk sediaan dalam penyimpanan obat.",
    framework: "PBF — PBF MARGA NUSANTARA JAYA MAKASSAR",
    techStack: ["FEFO", "Alfabetis", "Bentuk Sediaan"],
    link: '#',
  },
  {
    number: '04',
    title: "Pengelolaan & Pemantauan Stok",
    description: "Membantu pengelolaan dan pemantauan stok untuk memastikan ketersediaan serta mengidentifikasi obat mendekati tanggal kedaluwarsa.",
    framework: "PBF — PBF MARGA NUSANTARA JAYA MAKASSAR",
    techStack: ["Pemantauan Stok", "Kedaluwarsa", "Ketersediaan"],
    link: '#',
  },
  {
    number: '05',
    title: "Skrining Resep & Penyiapan Obat Rawat Jalan",
    description: "Melakukan skrining resep serta menyiapkan obat racikan dan nonracikan untuk pasien rawat jalan sesuai resep.",
    framework: "PELAYANAN PRIMER — PUSKESMAS ANTANG PERUMNAS MAKASSAR",
    techStack: ["Skrining Resep", "Racikan", "Nonracikan"],
    link: '#',
  },
  {
    number: '06',
    title: "Penyerahan Obat & Informasi Penggunaan",
    description: "Membantu proses penyerahan obat serta pemberian informasi mengenai aturan pakai dan penggunaan obat yang tepat.",
    framework: "PELAYANAN PRIMER — PUSKESMAS ANTANG PERUMNAS MAKASSAR",
    techStack: ["Penyerahan Obat", "Aturan Pakai"],
    link: '#',
  },
  {
    number: '07',
    title: "Penyimpanan Obat: FIFO, FEFO & Alfabetis",
    description: "Menyimpan obat berdasarkan prinsip FIFO dan FEFO, urutan alfabetis, serta bentuk sediaan.",
    framework: "PELAYANAN PRIMER — PUSKESMAS ANTANG PERUMNAS MAKASSAR",
    techStack: ["FIFO", "FEFO", "Alfabetis"],
    link: '#',
  },
  {
    number: '08',
    title: "Pengelolaan & Pemantauan Persediaan",
    description: "Membantu pengelolaan dan pemantauan persediaan obat untuk menjaga ketersediaan perbekalan farmasi.",
    framework: "PELAYANAN PRIMER — PUSKESMAS ANTANG PERUMNAS MAKASSAR",
    techStack: ["Persediaan", "Perbekalan Farmasi"],
    link: '#',
  },
  {
    number: '09',
    title: "Penataan Penyimpanan & Pemeriksaan Stok",
    description: "Mendukung penataan penyimpanan obat dan pemeriksaan stok untuk memastikan kesesuaian antara persediaan fisik dan pencatatan.",
    framework: "PELAYANAN PRIMER — PUSKESMAS ANTANG PERUMNAS MAKASSAR",
    techStack: ["Pemeriksaan Stok", "Pencatatan"],
    link: '#',
  },
  {
    number: '10',
    title: "Penyiapan Obat, PIO & Edukasi Pasien",
    description: "Menyiapkan obat racikan dan nonracikan sesuai resep serta memberikan Pelayanan Informasi Obat (PIO) dan edukasi penggunaan obat kepada pasien.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Racikan", "PIO", "Edukasi"],
    link: '#',
  },
  {
    number: '11',
    title: "Visite Pasien & Pemantauan Penggunaan Obat",
    description: "Mengikuti kegiatan visite pasien untuk mempelajari pelayanan farmasi klinis dan pemantauan penggunaan obat selama perawatan.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Visite", "Farmasi Klinis"],
    link: '#',
  },
  {
    number: '12',
    title: "Kesesuaian Terapi, Dosis & Keamanan Obat",
    description: "Mempelajari kesesuaian terapi obat berdasarkan kondisi pasien serta pentingnya ketepatan dosis, aturan pakai, dan keamanan penggunaan obat.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Terapi Obat", "Dosis", "Keamanan Obat"],
    link: '#',
  },
  {
    number: '13',
    title: "Penyimpanan & Distribusi Obat",
    description: "Menyimpan dan mendistribusikan obat berdasarkan urutan alfabetis, prinsip FIFO/FEFO, bentuk sediaan, dan persyaratan suhu penyimpanan.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["FIFO/FEFO", "Suhu Penyimpanan"],
    link: '#',
  },
  {
    number: '14',
    title: "Penanganan Obat LASA",
    description: "Menerapkan pemisahan serta kewaspadaan dalam penanganan obat LASA (Look-Alike Sound-Alike) untuk meminimalkan risiko kesalahan pengambilan obat.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["LASA", "Keselamatan Pasien"],
    link: '#',
  },
  {
    number: '15',
    title: "Pelayanan Kefarmasian di Bawah Supervisi Preseptor",
    description: "Melaksanakan pelayanan kefarmasian di bawah supervisi preseptor, meliputi skrining resep, dispensing obat, Pelayanan Informasi Obat (PIO), dan konseling pasien.",
    framework: "FARMASI KOMUNITAS — APOTEK KLINIK LIFIYURA MAKASSAR",
    techStack: ["Skrining Resep", "Dispensing", "PIO", "Konseling"],
    link: '#',
  },
  {
    number: '16',
    title: "Informasi Dosis, Aturan Pakai & Penyimpanan Obat",
    description: "Memberikan informasi mengenai dosis, aturan pakai, penyimpanan, dan hal-hal yang perlu diperhatikan selama penggunaan obat.",
    framework: "FARMASI KOMUNITAS — APOTEK KLINIK LIFIYURA MAKASSAR",
    techStack: ["Dosis", "Aturan Pakai", "Penyimpanan"],
    link: '#',
  },
  {
    number: '17',
    title: "Home Pharmacy Care",
    description: "Mempelajari pelaksanaan Home Pharmacy Care untuk mendukung penggunaan obat yang tepat dan rasional.",
    framework: "FARMASI KOMUNITAS — APOTEK KLINIK LIFIYURA MAKASSAR",
    techStack: ["Home Pharmacy Care", "Penggunaan Obat Rasional"],
    link: '#',
  },
  {
    number: '18',
    title: "Pengelolaan Logistik Kefarmasian",
    description: "Membantu pengelolaan logistik kefarmasian, termasuk penerimaan, pemeriksaan, penyimpanan, dan pengendalian persediaan obat.",
    framework: "FARMASI KOMUNITAS — APOTEK KLINIK LIFIYURA MAKASSAR",
    techStack: ["Logistik", "Penerimaan", "Pengendalian Persediaan"],
    link: '#',
  },
  {
    number: '19',
    title: "Pengujian Bahan Baku & Produk Jadi",
    description: "Melaksanakan pengujian bahan baku dan produk jadi di laboratorium R&D untuk mempelajari mutu sediaan farmasi.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI ANGKATAN UDARA (LAFI AU), BANDUNG",
    techStack: ["Pengujian Mutu", "Laboratorium R&D"],
    link: '#',
  },
  {
    number: '20',
    title: "Persiapan Sampel & Pelaksanaan Pengujian",
    description: "Membantu persiapan sampel dan pelaksanaan pengujian sesuai prosedur kerja laboratorium yang berlaku.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI ANGKATAN UDARA (LAFI AU), BANDUNG",
    techStack: ["Persiapan Sampel", "Prosedur Laboratorium"],
    link: '#',
  },
  {
    number: '21',
    title: "Penerapan CPOB",
    description: "Mempelajari penerapan CPOB dalam mendukung konsistensi mutu, keamanan, dan kualitas produk farmasi.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI ANGKATAN UDARA (LAFI AU), BANDUNG",
    techStack: ["CPOB", "Mutu Produk"],
    link: '#',
  },
  {
    number: '22',
    title: "Keterkaitan Fungsi R&D, QC & QA",
    description: "Memahami keterkaitan fungsi R&D, QC, dan QA dalam proses pengembangan, pengujian, serta pelepasan produk sebelum didistribusikan.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI ANGKATAN UDARA (LAFI AU), BANDUNG",
    techStack: ["R&D", "QC", "QA"],
    link: '#',
  },
  {
    number: '23',
    title: "Penyiapan Perbekalan Farmasi & Pemantauan Stok",
    description: "Menyiapkan perbekalan farmasi dan alat kesehatan untuk pelayanan rawat inap dan rawat jalan serta memantau pencatatan stok.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Rawat Inap", "Rawat Jalan", "Pencatatan Stok"],
    link: '#',
  },
  {
    number: '24',
    title: "Penyiapan Obat Racikan Puyer & Nonracikan",
    description: "Menyiapkan obat racikan puyer dan nonracikan sesuai prosedur operasional.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Racikan Puyer", "Nonracikan"],
    link: '#',
  },
  {
    number: '25',
    title: "Distribusi Obat ke Nurse Station",
    description: "Membantu mendistribusikan obat dan alat kesehatan ke nurse station sesuai kebutuhan pelayanan.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Nurse Station", "Distribusi"],
    link: '#',
  },
  {
    number: '26',
    title: "Penyerahan Obat & PIO kepada Pasien",
    description: "Menyerahkan obat dan alat kesehatan kepada pasien disertai Pelayanan Informasi Obat (PIO).",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Penyerahan Obat", "PIO"],
    link: '#',
  },
  {
    number: '27',
    title: "Kartu Stok & Dokumentasi Barang Gudang",
    description: "Mengelola kartu stok obat dan alat kesehatan serta mendokumentasikan serah terima barang masuk dan keluar gudang.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Kartu Stok", "Administrasi Gudang"],
    link: '#',
  },
  {
    number: '28',
    title: "Pembekalan Manajemen Rumah Sakit",
    description: "Mengikuti pembekalan mengenai manajemen rumah sakit yang disampaikan oleh Kepala Instalasi RSUP Dr. Tadjuddin Chalid Makassar.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUP DR. TADJUDDIN CHALID MAKASSAR",
    techStack: ["Manajemen Rumah Sakit", "Pembekalan"],
    link: '#',
  },
  {
    number: '29',
    title: "Evaluasi & Skrining Resep Pasien Umum",
    description: "Melakukan evaluasi dan skrining resep pasien umum serta memastikan ketepatan penyiapan obat.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["Skrining Resep", "Pasien Umum"],
    link: '#',
  },
  {
    number: '30',
    title: "Penerimaan & Pemeriksaan Sediaan Farmasi",
    description: "Membantu penerimaan dan pemeriksaan sediaan farmasi dari distributor resmi.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["Penerimaan Sediaan", "Distributor Resmi"],
    link: '#',
  },
  {
    number: '31',
    title: "Penyimpanan Obat dengan Prinsip FEFO",
    description: "Menerapkan prinsip FEFO (First Expired, First Out) dalam penyimpanan obat untuk menjaga mutu dan keamanan sediaan.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["FEFO", "Mutu Sediaan"],
    link: '#',
  },
  {
    number: '32',
    title: "Pelayanan Informasi Obat (PIO)",
    description: "Memberikan Pelayanan Informasi Obat (PIO) kepada pasien dan tenaga medis.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["PIO", "Pasien", "Tenaga Medis"],
    link: '#',
  },
  {
    number: '33',
    title: "Pembimbingan Praktikum Peracikan Sediaan Steril & Nonsteril",
    description: "Membimbing mahasiswa dalam praktikum peracikan sediaan farmasi steril dan nonsteril sesuai prosedur dan pedoman yang berlaku.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIKA, UNIVERSITAS MUSLIM INDONESIA (2025)",
    techStack: ["Asisten Laboratorium", "Sediaan Steril", "Sediaan Nonsteril"],
    link: '#',
  },
  {
    number: '34',
    title: "Pemeriksaan Dosis, Resep, Inkompatibilitas & Excipient",
    description: "Memeriksa ketepatan perhitungan dosis, kelengkapan resep, inkompatibilitas obat, serta pemilihan bahan tambahan (excipient) dalam proses peracikan.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIKA, UNIVERSITAS MUSLIM INDONESIA (2025)",
    techStack: ["Perhitungan Dosis", "Inkompatibilitas", "Excipient"],
    link: '#',
  },
  {
    number: '35',
    title: "Pengawasan Teknik Peracikan Berbagai Sediaan",
    description: "Mengawasi penerapan teknik pencampuran, penggerusan, pengayakan, dan pengemasan berbagai sediaan farmasi, seperti puyer, salep, krim, suspensi, dan sirup.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIKA, UNIVERSITAS MUSLIM INDONESIA (2025)",
    techStack: ["Puyer", "Salep", "Krim", "Suspensi", "Sirup"],
    link: '#',
  },
  {
    number: '36',
    title: "Pembuatan Etiket & Label Peringatan",
    description: "Membimbing mahasiswa dalam pembuatan etiket, pemasangan label peringatan, serta pencantuman aturan pakai obat yang tepat.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIKA, UNIVERSITAS MUSLIM INDONESIA (2025)",
    techStack: ["Etiket", "Label Peringatan", "Aturan Pakai"],
    link: '#',
  },
  {
    number: '37',
    title: "Peralatan Laboratorium, Sterilisasi & Stok Bahan Baku",
    description: "Menyiapkan dan memelihara peralatan laboratorium, melakukan sterilisasi sesuai kebutuhan, serta membantu pengelolaan stok bahan baku obat.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIKA, UNIVERSITAS MUSLIM INDONESIA (2025)",
    techStack: ["Peralatan Lab", "Sterilisasi", "Stok Bahan Baku"],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PENGALAMAN MAGANG & AKADEMIK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Praktik & Akademik</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rincian kegiatan magang di PBF, puskesmas, rumah sakit, apotek klinik, dan industri farmasi, serta pengalaman akademik sebagai asisten laboratorium.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
