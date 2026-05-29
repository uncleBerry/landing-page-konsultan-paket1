import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Maju Jaya Konstruksi",
    city: "Jakarta",
    time: "10:42",
    avatar: "BS",
    color: "bg-orange-400",
    messages: [
      { from: "them", text: "Halo, saya butuh SBU untuk PT saya sebelum tender minggu depan 😭" },
      { from: "us", text: "Tenang pak, kami bisa bantu proses ekspres! Berkas apa saja yang sudah siap?" },
      { from: "them", text: "Alhamdulillah, SBU sudah terbit hari ini! Bisa ikut tender! Terima kasih Fanatik Digital 🙏⭐⭐⭐⭐⭐" },
    ],
    result: "SBU terbit dalam 2 hari kerja",
  },
  {
    name: "Dewi Rahayu",
    company: "CV Bangun Sejahtera",
    city: "Surabaya",
    time: "14:15",
    avatar: "DR",
    color: "bg-blue-500",
    messages: [
      { from: "them", text: "Saya sudah coba urus sendiri tapi ditolak terus di sistem OSS 😤" },
      { from: "us", text: "Banyak klien kami juga mengalami hal ini. Izin kami cek berkas Ibu ya." },
      { from: "them", text: "WOW! Dalam 3 hari langsung terbit! Profesional banget, 5 bintang! ⭐⭐⭐⭐⭐" },
    ],
    result: "Berhasil setelah ditolak berkali-kali",
  },
  {
    name: "Ahmad Fauzi",
    company: "PT Karya Mandiri",
    city: "Bandung",
    time: "09:30",
    avatar: "AF",
    color: "bg-emerald-500",
    messages: [
      { from: "them", text: "Butuh SBU kualifikasi Besar, apa bisa diurus dengan cepat?" },
      { from: "us", text: "Bisa pak! Kualifikasi Besar kami tangani dengan jalur prioritas. Estimasi 5 hari kerja." },
      { from: "them", text: "Mantap! Dokumen sudah di tangan. Rekomendasi banget buat kontraktor lain! 👍" },
    ],
    result: "SBU Kualifikasi Besar berhasil terbit",
  },
  {
    name: "Siti Nurhaliza",
    company: "PT Graha Konstruksi",
    city: "Semarang",
    time: "11:20",
    avatar: "SN",
    color: "bg-purple-500",
    messages: [
      { from: "them", text: "Takut kena tipu, apa ada jaminannya kalau pakai jasa ini?" },
      { from: "us", text: "Ada garansi 100% uang kembali jika ditolak sistem pemerintah, Ibu. Kami juga bisa dikunjungi." },
      { from: "them", text: "Terbukti! Amanah dan profesional. SBU sudah bisa dicek di portal LPJK 🎉" },
    ],
    result: "Terdaftar resmi di portal LPJK",
  },
  {
    name: "Rizki Pratama",
    company: "PT Cipta Karsa",
    city: "Medan",
    time: "16:45",
    avatar: "RP",
    color: "bg-red-500",
    messages: [
      { from: "them", text: "SKK saya juga belum ada, apa bisa diurus bersamaan dengan SBU?" },
      { from: "us", text: "Bisa pak! Kami punya paket bundling SKK + SBU dengan harga lebih hemat 20%." },
      { from: "them", text: "Dua-duanya sudah terbit sekarang! Ikut tender dengan percaya diri 💪 Top markotop!" },
    ],
    result: "Bundling SKK + SBU berhasil",
  },
  {
    name: "Hendra Wijaya",
    company: "PT Nusantara Bangun",
    city: "Makassar",
    time: "08:00",
    avatar: "HW",
    color: "bg-yellow-500",
    messages: [
      { from: "them", text: "Saya di Makassar, apa bisa diurus tanpa harus ke Jakarta?" },
      { from: "us", text: "100% bisa pak! Semua proses online. Cukup kirim scan berkas via WhatsApp." },
      { from: "them", text: "Luar biasa! Dari Makassar bisa urus SBU tanpa kemana-mana. Rekomen! ⭐⭐⭐⭐⭐" },
    ],
    result: "Proses 100% online dari Makassar",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0d2b55] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
            Testimoni Klien
          </span>
          <h2 className="text-white text-3xl md:text-4xl mb-4" style={{ fontWeight: 800 }}>
            Kontraktor yang Memenangkan Tender Bersama Kami
          </h2>
          <p className="text-blue-200 text-lg">
            Lebih dari 500 kontraktor telah mempercayakan pengurusan SBU mereka kepada kami.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                {/* WhatsApp-style chat card */}
                <div className="aspect-[9/16] bg-[#e5ddd5] rounded-2xl overflow-hidden shadow-xl flex flex-col">
                  {/* WA Header */}
                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs" style={{ fontWeight: 700 }}>{t.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm truncate" style={{ fontWeight: 700 }}>{t.name}</div>
                      <div className="text-green-300 text-xs truncate">{t.company}</div>
                    </div>
                    <div className="flex gap-2 text-white opacity-80">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="flex-1 p-3 space-y-2 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZTVkZGQ1Ii8+PC9zdmc+')]">
                    {t.messages.map((msg, j) => (
                      <div
                        key={j}
                        className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 shadow-sm text-xs leading-relaxed ${
                            msg.from === "us"
                              ? "bg-[#dcf8c6] text-gray-800 rounded-br-none"
                              : "bg-white text-gray-800 rounded-bl-none"
                          }`}
                        >
                          {msg.text}
                          <div className={`text-right mt-1 text-[10px] text-gray-400`}>{t.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Result badge */}
                  <div className="bg-emerald-600 px-4 py-3 flex items-center gap-2">
                    <span className="text-white text-lg">✅</span>
                    <div>
                      <div className="text-white text-xs" style={{ fontWeight: 700 }}>{t.result}</div>
                      <div className="text-emerald-200 text-xs">{t.city} • Klien Terverifikasi</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overall rating */}
        <div className="mt-4 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-4">
            <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
            <div className="text-left">
              <div className="text-white" style={{ fontWeight: 700 }}>4.9 / 5.0</div>
              <div className="text-blue-200 text-sm">Dari 200+ ulasan terverifikasi</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #fff;
          background: rgba(255,255,255,0.15);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
        }
        .testimonial-swiper .swiper-button-next::after,
        .testimonial-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 800;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  );
}
