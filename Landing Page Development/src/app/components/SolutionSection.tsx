const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600",
    accent: "border-emerald-200",
    badge: "Garansi Penuh",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Jaminan 100% Uang Kembali",
    desc: "Garansi uang kembali penuh jika dokumen ditolak sistem pemerintah. Tanpa syarat, tanpa pertanyaan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-orange-50 text-orange-500",
    accent: "border-orange-200",
    badge: "Tercepat",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "Proses Tercepat di Kelasnya",
    desc: "Berkas langsung diproses hari itu juga. Jalur prioritas eksklusif kami memastikan SBU Anda terbit dalam waktu tercepat.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
    accent: "border-blue-200",
    badge: "Gratis",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Gratis Konsultasi Pra-Syarat",
    desc: "Tim ahli kami siap mendampingi pengecekan dokumen sebelum proses dimulai. Tidak ada biaya tersembunyi.",
  },
];

export function SolutionSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
            Mengapa Memilih Kami
          </span>
          <h2 className="text-[#0d2b55] text-3xl md:text-4xl mb-4" style={{ fontWeight: 800 }}>
            Solusi Cepat, Aman & Bergaransi
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kami bukan sekadar jasa pengurusan biasa. Kami adalah mitra legal terpercaya yang telah membantu ratusan kontraktor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-7 border-2 ${item.accent} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <span className={`inline-block text-xs px-2.5 py-1 rounded-full mb-5 ${item.badgeColor}`} style={{ fontWeight: 700 }}>
                {item.badge}
              </span>
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-[#0d2b55] text-xl mb-3" style={{ fontWeight: 700 }}>{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
            style={{ fontWeight: 700 }}
          >
            Dapatkan Konsultasi Gratis Sekarang →
          </a>
          <p className="text-gray-400 text-sm mt-3">Tidak perlu datang ke kantor. Cukup via WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
