const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

const faqs = [
  {
    q: "Berapa lama prosesnya?",
    a: "Tergantung kualifikasi, namun kami menjamin SLA tercepat karena jalur prioritas kami. Kualifikasi Kecil bisa 2-3 hari, Menengah 3-5 hari, dan Besar 5-7 hari kerja.",
  },
  {
    q: "Apakah sertifikatnya bisa dicek secara resmi?",
    a: "Ya, 100% legal dan terdaftar di portal resmi SIKI/LPJK PUPR. Anda bisa langsung mengecek nomor sertifikat Anda di website resmi lpjk.pu.go.id setelah proses selesai.",
  },
  {
    q: "Saya belum punya SKK, apakah bisa dibantu?",
    a: "Tentu, kami menyediakan layanan bundling pengurusan SKK & SBU. Bahkan dengan paket bundling Anda mendapat diskon 20% dibandingkan mengurus satu per satu.",
  },
  {
    q: "Bagaimana jika dokumen saya ditolak?",
    a: "Kami memberikan garansi 100% uang kembali jika dokumen ditolak oleh sistem pemerintah. Namun hal ini sangat jarang terjadi karena tim kami melakukan verifikasi berlapis sebelum pengajuan.",
  },
  {
    q: "Apakah bisa diurus dari luar kota atau luar pulau?",
    a: "Absolutely! Seluruh proses dapat dilakukan 100% online via WhatsApp. Kami melayani klien dari seluruh Indonesia. Cukup kirim scan dokumen dan kami tangani sisanya.",
  },
  {
    q: "Berapa biaya pengurusan SBU?",
    a: "Biaya bervariasi tergantung sub-klasifikasi dan kualifikasi yang dibutuhkan. Hubungi kami via WhatsApp untuk mendapatkan penawaran terbaik dan transparan tanpa biaya tersembunyi.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
            FAQ
          </span>
          <h2 className="text-[#0d2b55] text-3xl md:text-4xl mb-4" style={{ fontWeight: 800 }}>
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-gray-500 text-lg">
            Tidak menemukan jawaban Anda? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0d2b55]/30 transition-colors"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none">
                <span className="text-[#0d2b55] text-base leading-snug" style={{ fontWeight: 600 }}>
                  {faq.q}
                </span>
                {/* Plus/Minus icon */}
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 group-open:bg-[#0d2b55] flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-gray-500 group-open:text-white transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5">
                <div className="w-full h-px bg-gray-100 mb-4" />
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-[#f5f7fb] rounded-2xl p-8 text-center" data-aos="fade-up">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="text-[#0d2b55] text-xl mb-2" style={{ fontWeight: 700 }}>Masih Punya Pertanyaan?</h3>
          <p className="text-gray-500 mb-5">Tim konsultan kami siap menjawab dalam 5 menit!</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20bb59] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            style={{ fontWeight: 700 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya via WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
