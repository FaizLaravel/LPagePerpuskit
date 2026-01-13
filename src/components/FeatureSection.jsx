import { ArrowRight, ExternalLink, Github } from "lucide-react";
export const FeatureSection = () => {
  return (
    <section id="feature" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature Perpus<span className="text-primary">Kit</span>
        </h2>
        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto">
          PerpusKit menawarkan berbagai fitur unggulan yang terintegrasi untuk
          mendukung pengelolaan perpustakaan secara digital, stabil, dan siap
          pakai
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Manajemen Akses & Pengguna
                </h4>
                <p className="text-muted-foreground">
                  Kelola hak akses secara fleksibel dengan sistem peran (role)
                  yang terbagi untuk Admin, Petugas, dan Anggota guna menjaga
                  keamanan data.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Inventarisasi Buku & Kategori
                </h4>
                <p className="text-muted-foreground">
                  Sistem CRUD yang terorganisir untuk pengelolaan data buku dan
                  kategori secara efisien, memudahkan pembaruan koleksi
                  perpustakaan.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Sirkulasi Peminjaman Digital
                </h4>
                <p className="text-muted-foreground">
                  Alur transaksi lengkap mulai dari pengajuan, persetujuan,
                  hingga perpanjangan dan pengembalian buku dalam satu alur
                  kerja yang sistematis.Menghadirkan pengelolaan database yang
                  terorganisir dan desain adaptif yang optimal di seluruh
                  perangkat.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Monitoring Status & Riwayat
                </h4>
                <p className="text-muted-foreground">
                  Pantau status peminjaman secara real-time dan akses riwayat
                  aktivitas pengguna untuk transparansi data yang lebih baik.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Sistem Denda Otomatis
                </h4>
                <p className="text-muted-foreground">
                  Penghitungan denda keterlambatan secara otomatis sesuai
                  kebijakan, dilengkapi fitur pencatatan pembayaran manual yang
                  akurat.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Panel Analitik & Dashboard
                </h4>
                <p className="text-muted-foreground">
                  Visualisasi data operasional melalui grafik dan angka
                  statistik pada dashboard admin untuk mendukung pengambilan
                  keputusan yang cepat.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="text-left">
                <h4 className="font-semibold text-xl pb-2">
                  Interface Modern & Responsif
                </h4>
                <p className="text-muted-foreground">
                  Antarmuka pengguna (UI) yang bersih dan adaptif, memastikan
                  kenyamanan akses melalui perangkat desktop maupun smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
