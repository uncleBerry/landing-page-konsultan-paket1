const problems = [
  "Tender proyek sudah di depan mata tapi SBU belum terbit?",
  "Bingung dengan aturan sistem regulasi OSS & LPJK yang berubah-ubah?",
  "Takut kena tipu makelar sertifikat bodong?",
];

export function ProblemSection() {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block bg-red-100 text-red-600 text-sm px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
            Kenali Masalah Anda
          </span>
          <h2 className="text-[#0d2b55] text-3xl md:text-4xl mb-4" style={{ fontWeight: 800 }}>
            Tender Sudah Dekat, Tapi SBU Belum Siap?
          </h2>
          <p className="text-gray-500 text-lg">
            Anda tidak sendirian. Ribuan kontraktor menghadapi masalah yang sama setiap tahunnya.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-red-50 hover:shadow-md hover:border-red-100 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-xl">
                ❌
              </div>
              <div>
                <p className="text-gray-800 text-lg leading-relaxed" style={{ fontWeight: 500 }}>{problem}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 bg-[#0d2b55] text-white px-6 py-3 rounded-2xl">
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm" style={{ fontWeight: 600 }}>
              Fanatik Digital hadir sebagai solusi #1 untuk semua masalah di atas
            </span>
          </div>
          <div className="mt-6 flex justify-center">
            <svg className="w-8 h-8 text-orange-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
