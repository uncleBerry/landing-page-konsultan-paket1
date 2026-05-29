const logos = [
  { name: "PT Waskita Karya", abbr: "WK" },
  { name: "PT Pembangunan Perumahan", abbr: "PP" },
  { name: "PT Adhi Karya", abbr: "AK" },
  { name: "PT Wijaya Karya", abbr: "WK" },
  { name: "PT Brantas Abipraya", abbr: "BA" },
];

export function ClientLogos() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8" data-aos="fade-up">
          Dipercaya oleh 500+ Kontraktor & Perusahaan Konstruksi
        </p>

        {/* Mobile: horizontal scroll */}
        <div
          className="flex items-center gap-8 overflow-x-auto pb-2 md:overflow-visible md:justify-center md:flex-wrap"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex-shrink-0 flex flex-col items-center gap-2 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-xs" style={{ fontWeight: 700 }}>{logo.abbr}</span>
              </div>
              <span className="text-gray-500 text-xs whitespace-nowrap" style={{ fontWeight: 500 }}>{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500" data-aos="fade-up" data-aos-delay="150">
          {[
            { icon: "🏛️", text: "Terdaftar LPJK PUPR" },
            { icon: "🔒", text: "Data Perusahaan Aman" },
            { icon: "📜", text: "Proses Transparan" },
            { icon: "⭐", text: "Rating 4.9/5 (200+ ulasan)" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span style={{ fontWeight: 500 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
