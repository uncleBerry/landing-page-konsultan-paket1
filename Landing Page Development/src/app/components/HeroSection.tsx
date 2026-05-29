const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

export function HeroSection() {
  return (
    <section className="bg-[#0d2b55] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1a4a8a] opacity-30" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[#0a2040] opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-white" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full mb-6 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
            Layanan #1 Pengurusan SBU Konstruksi
          </div>

          <h1 className="text-3xl md:text-5xl text-white leading-tight mb-6" style={{ fontWeight: 800 }}>
            Jasa Pengurusan SBU Konstruksi{" "}
            <span className="text-orange-400">Kilat</span> &{" "}
            <span className="text-emerald-400">100% Legal</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
            Jangan sampai ketinggalan tender besar! Kami bantu selesaikan berkas SBU & SKK Anda dengan proses tercepat. Langsung terbit di portal resmi pemerintah.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "500+", label: "Klien Aktif" },
              { value: "3 Hari", label: "Proses Tercepat" },
              { value: "100%", label: "Garansi Legal" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl text-orange-400" style={{ fontWeight: 800 }}>{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 animate-pulse-cta"
            style={{ fontWeight: 700 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konsultasi Gratis via WhatsApp
          </a>

          <p className="text-blue-300 text-sm mt-4">
            ✅ Respon dalam 5 menit &nbsp;•&nbsp; ✅ Tanpa biaya tersembunyi
          </p>
        </div>

        {/* Hero Image / Certificate Illustration */}
        <div className="flex-1 flex justify-center" data-aos="fade-left" data-aos-delay="200">
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* Main certificate card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0d2b55] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0d2b55] text-sm" style={{ fontWeight: 700 }}>KEMENTERIAN PUPR</div>
                  <div className="text-gray-500 text-xs">Republik Indonesia</div>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 mb-5">
                <div className="text-center mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Sertifikat Badan Usaha</div>
                  <div className="text-[#0d2b55] text-xl" style={{ fontWeight: 800 }}>SBU KONSTRUKSI</div>
                </div>
                <div className="space-y-2">
                  {["No. Sertifikat", "Nama Badan Usaha", "Kualifikasi", "Sub Klasifikasi"].map((label) => (
                    <div key={label} className="flex justify-between text-xs">
                      <span className="text-gray-500">{label}</span>
                      <div className="w-28 h-3 bg-gray-200 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Seal */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-4 border-[#0d2b55] flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#0d2b55] rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Status</div>
                    <div className="text-emerald-600 text-xs" style={{ fontWeight: 700 }}>TERVERIFIKASI ✓</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Berlaku s/d</div>
                  <div className="text-[#0d2b55] text-xs" style={{ fontWeight: 600 }}>31 Des 2027</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg z-20" style={{ fontWeight: 700 }}>
              ✓ 100% Legal
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg z-20" style={{ fontWeight: 700 }}>
              ⚡ Proses 3 Hari
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
