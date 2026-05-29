const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

export function FinalCTASection() {
  return (
    <section className="bg-[#0d2b55] relative overflow-hidden py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#1a4a8a] opacity-30 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#071e3d] opacity-50 -translate-x-1/2 translate-y-1/2" />
        {/* Urgency timer decoration */}
        <div className="absolute top-8 left-8 opacity-10">
          <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Urgency badge */}
        <div
          className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full mb-8 text-sm"
          style={{ fontWeight: 700 }}
          data-aos="fade-down"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          ⚠️ PERHATIAN: Slot Prioritas Minggu Ini Terbatas!
        </div>

        <h2
          className="text-white text-3xl md:text-5xl mb-6 leading-tight"
          style={{ fontWeight: 800 }}
          data-aos="fade-up"
        >
          Waktu Tender Terus Berjalan.{" "}
          <span className="text-orange-400">Amankan SBU Anda Hari Ini!</span>
        </h2>

        <p
          className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dapatkan jaminan 100% uang kembali dan proses kilat. Slot prioritas minggu ini tersisa sedikit.
        </p>

        {/* Guarantees */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {[
            "✅ Garansi 100% Uang Kembali",
            "⚡ Proses Tercepat",
            "🔒 100% Legal & Resmi",
            "📞 Respon 5 Menit",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full"
              style={{ fontWeight: 600 }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 animate-pulse"
            style={{ fontWeight: 800 }}
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Klaim Gratis Konsultasi Dokumen Sekarang
          </a>
          <p className="text-blue-300 text-sm mt-4">
            Klik tombol di atas → Chat otomatis terbuka → Konsultan langsung merespon
          </p>
        </div>

        {/* Slot counter */}
        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="250">
          <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 inline-flex items-center gap-4">
            <div className="text-center">
              <div className="text-orange-400 text-3xl" style={{ fontWeight: 800 }}>3</div>
              <div className="text-blue-200 text-xs uppercase tracking-widest">Slot Tersisa</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <div className="text-white text-sm" style={{ fontWeight: 600 }}>
                Minggu ini • Prioritas Ekspres
              </div>
              <div className="text-blue-300 text-xs">Diperbarui setiap hari Senin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
