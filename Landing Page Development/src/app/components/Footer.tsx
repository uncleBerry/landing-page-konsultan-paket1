const WA_URL =
  "https://wa.me/6280000000000?text=Halo%2C%20saya%20butuh%20bantuan%20urus%20SBU%20untuk%20PT%20saya%21";

export function Footer() {
  return (
    <footer className="bg-[#071e3d] text-blue-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white" style={{ fontWeight: 800 }}>Fanatik Digital Agency</div>
                <div className="text-blue-400 text-xs">Jasa SBU Konstruksi Kilat</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Mitra legal terpercaya untuk pengurusan SBU & SKK Konstruksi. Proses cepat, transparan, dan bergaransi.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white text-sm mb-4 uppercase tracking-wider" style={{ fontWeight: 700 }}>Layanan</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Pengurusan SBU Kualifikasi Kecil",
                "Pengurusan SBU Kualifikasi Menengah",
                "Pengurusan SBU Kualifikasi Besar",
                "Bundling SKK + SBU",
                "Konsultasi Pra-Syarat Gratis",
              ].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white text-sm mb-4 uppercase tracking-wider" style={{ fontWeight: 700 }}>Kontak</h4>
            <div className="space-y-3 text-sm">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +62 800-0000-0000
              </a>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jakarta Selatan, Indonesia<br />(Layanan Online Seluruh Indonesia)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-400">
          <p>© 2024 Fanatik Digital Agency. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</span>
            <span className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
