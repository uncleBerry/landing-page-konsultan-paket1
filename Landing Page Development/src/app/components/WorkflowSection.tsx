const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Hubungi Tim & Kirim Berkas",
    desc: "Hubungi Tim Kami & Kirim Berkas Teknis via WA. Konsultan kami akan memverifikasi kelengkapan dokumen Anda.",
    badge: "Hari 1",
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-200",
    dot: "bg-orange-500",
  },
  {
    num: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Verifikasi & Input Data Sistem",
    desc: "Proses Verifikasi & Input Data ke Sistem Pemerintah. Tim ahli kami langsung memproses di portal resmi SIKI/LPJK.",
    badge: "Hari 2",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    dot: "bg-blue-600",
  },
  {
    num: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Sertifikat Terbit & Siap Tender",
    desc: "Sertifikat Terbit & Siap Digunakan untuk Tender. SBU Anda 100% legal, terverifikasi, dan bisa dicek secara resmi.",
    badge: "Hari 3",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
];

export function WorkflowSection() {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-[#0d2b55]/10 text-[#0d2b55] text-sm px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
            Cara Kerja
          </span>
          <h2 className="text-[#0d2b55] text-3xl md:text-4xl mb-4" style={{ fontWeight: 800 }}>
            3 Langkah Mudah Menuju Tender
          </h2>
          <p className="text-gray-500 text-lg">
            Proses sederhana, transparan, dan terukur. Dari berkas hingga sertifikat terbit.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dashed vertical line */}
          <div
            className="absolute left-8 md:left-10 top-8 bottom-8 w-0 border-l-2 border-dashed border-gray-300"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex gap-6 md:gap-8"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 ${step.bg} ${step.color} flex items-center justify-center shadow-sm z-10 relative`}
                  >
                    {step.icon}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-5 h-5 ${step.dot} rounded-full flex items-center justify-center z-20`}>
                    <span className="text-white text-xs" style={{ fontWeight: 700 }}>{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs ${step.color} uppercase tracking-widest`} style={{ fontWeight: 700 }}>
                      LANGKAH {step.num}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full" style={{ fontWeight: 600 }}>
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-[#0d2b55] text-lg mb-2" style={{ fontWeight: 700 }}>{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after workflow */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-500 mb-5">Siap memulai proses? Hubungi kami sekarang!</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0d2b55] hover:bg-[#1a4a8a] text-white px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ fontWeight: 700 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Mulai Langkah 1 Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
