import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { Heart, Send, Copy, Calendar, MapPin, Clock, MessageSquare, Gift, Info, ExternalLink, Video } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";

export default function InviteSections() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const targetDate = useMemo(() => new Date("2027-06-27T08:00:00").getTime(), []);

  return (
    <div className="flex flex-col gap-0 bg-[#fbfaf7] text-[#4a4a4a] overflow-hidden">
      
      {/* 1. SECTION: WEDDING TIME & COUNTDOWN */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 flex flex-col items-center justify-center min-h-[70vh] md:min-h-[90vh] text-center overflow-visible">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.568 0 30 13.432 30 30s-13.432 30-30 30S0 46.568 0 30 13.432 0 30 0zm0 4c-14.36 0-26 11.64-26 26s11.64 26 26 26 26-11.64 26-26S44.36 4 30 4z' fill='%23d6919b' fill-opacity='1' fill-rule='evenodd' text-anchor='middle'/%3E%3C/svg%3E\")" }} />
         
         <Reveal className="relative z-10 max-w-4xl w-full">
            <h2 className="font-serif text-xl md:text-3xl text-[#d6919b] mb-6 md:mb-10 tracking-[0.4em] uppercase font-bold">Save The Date</h2>
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-20 rounded-[50px] md:rounded-[80px] shadow-2xl shadow-pink-100/30 ring-1 ring-black/[0.02]">
                <Countdown targetDate={targetDate} />
                <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                    <button className="px-8 md:px-10 py-4 bg-[#d6919b] text-white rounded-full text-sm md:text-base font-black shadow-xl hover:bg-[#c57d87] transition-all flex items-center justify-center gap-3 active:scale-95 group">
                        <Calendar size={20} className="group-hover:rotate-12 transition-transform" /> Google Calendar
                    </button>
                    <button className="px-8 md:px-10 py-4 bg-[#829c83] text-white rounded-full text-sm md:text-base font-black shadow-xl hover:bg-[#6b826c] transition-all flex items-center justify-center gap-3 active:scale-95 group">
                        <Calendar size={20} className="group-hover:-rotate-12 transition-transform" /> Apple Calendar
                    </button>
                </div>
            </div>
         </Reveal>
         {/* Transition to next section color: #e8efea (Light Sage) */}
         <SectionDivider color="#e8efea" flip />
      </section>

      {/* 2. SECTION: PERKENALAN MEMPELAI PRIA */}
      <section className="relative px-4 sm:px-6 py-16 md:py-24 bg-[#e8efea] overflow-visible">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <Reveal className="flex-1 text-center md:text-right order-2 md:order-1">
                <h3 className="text-[10px] md:text-xs tracking-[0.4em] text-[#829c83] font-black mb-4 uppercase">The Groom</h3>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2c3e50] mb-6 leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>Fauzan Reza Arnanda</h2>
                <div className="max-w-md mx-auto md:ml-auto md:mr-0">
                  <p className="text-sm md:text-base text-[#6b7a6c] mb-6 leading-relaxed italic font-medium opacity-80">
                    &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.&quot;
                  </p>
                  <div className="space-y-1">
                    <p className="text-[9px] md:text-[10px] text-black/30 tracking-[0.2em] uppercase font-black">Putra Pertama Dari</p>
                    <p className="text-lg md:text-xl font-bold text-[#2c3e50] leading-tight">Bpk. Endang & Ibu. Kokom Komariah</p>
                  </div>
                </div>
            </Reveal>
            <Reveal className="relative shrink-0 order-1 md:order-2" delay={0.2}>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px]">
                    <div className="absolute inset-0 bg-[#829c83] rounded-[60px] md:rounded-[80px] rotate-6 shadow-xl opacity-20" />
                    <div className="absolute inset-0 bg-white rounded-[60px] md:rounded-[80px] -rotate-3 shadow-xl p-3 md:p-4 ring-1 ring-black/5 overflow-hidden transition-transform hover:rotate-0 duration-700">
                        <div className="relative w-full h-full rounded-[35px] md:rounded-[55px] overflow-hidden">
                            <Image 
                                src={ASSETS.cover.couple} 
                                alt="Fauzan" 
                                fill 
                                className="object-cover object-top scale-[2.8] translate-x-[18%] translate-y-[5%]" 
                            />
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
        <SectionDivider color="#ffffff" flip />
      </section>

      {/* 3. SECTION: PERKENALAN MEMPELAI WANITA */}
      <section className="relative px-4 sm:px-6 py-16 md:py-24 bg-white overflow-visible">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <Reveal className="relative shrink-0" delay={0.2}>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px]">
                    <div className="absolute inset-0 bg-[#d6919b] rounded-[60px] md:rounded-[80px] -rotate-6 shadow-xl opacity-20" />
                    <div className="absolute inset-0 bg-white rounded-[60px] md:rounded-[80px] rotate-3 shadow-xl p-3 md:p-4 ring-1 ring-black/5 overflow-hidden transition-transform hover:rotate-0 duration-700">
                        <div className="relative w-full h-full rounded-[35px] md:rounded-[55px] overflow-hidden">
                            <Image 
                                src={ASSETS.cover.couple} 
                                alt="Friska" 
                                fill 
                                className="object-cover object-top scale-[2.8] translate-x-[-22%] translate-y-[5%]" 
                            />
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal className="flex-1 text-center md:text-left" delay={0.4}>
                <h3 className="text-[10px] md:text-xs tracking-[0.4em] text-[#d6919b] font-black mb-4 uppercase">The Bride</h3>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2c3e50] mb-6 leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>Friska Andalusia</h2>
                <div className="max-w-md mx-auto md:mr-auto md:ml-0">
                  <p className="text-sm md:text-base text-[#8b6b71] mb-6 leading-relaxed italic font-medium opacity-80">
                    &quot;Cinta tidak terlihat dengan mata, tetapi dengan hati. Mencintai adalah sebuah seni yang keindahannya terpancar dari ketulusan.&quot;
                  </p>
                  <div className="space-y-1">
                    <p className="text-[9px] md:text-[10px] text-black/30 tracking-[0.2em] uppercase font-black">Putri Kedua Dari</p>
                    <p className="text-lg md:text-xl font-bold text-[#2c3e50] leading-tight">Bpk. Gembong Sumadiyono & Ibu. Lina Marlina</p>
                  </div>
                </div>
            </Reveal>
        </div>
        <SectionDivider color="#fdf2f4" flip />
      </section>

      {/* 4. SECTION: EVENT DETAILS (TIME, PLACE, MAPS) */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 bg-[#fdf2f4] text-[#2c3e50] overflow-visible">
          <Reveal className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="font-serif text-6xl md:text-8xl text-[#d6919b] mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>Waktu & Tempat</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#d6919b]/30" />
                <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-black/40 font-black">Melaksanakan Akad & Resepsi</p>
                <div className="h-px w-12 bg-[#d6919b]/30" />
              </div>
          </Reveal>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
             <Reveal delay={0.2} className="w-full">
                <EventCardDetailed 
                    type="Akad Nikah"
                    date="Minggu, 27 Juni 2027"
                    time="08:00 - 10:00 WIB"
                    location="Masjid Sunda Kelapa"
                    address="Jl. Taman Sunda Kelapa No.16, Menteng, Jakarta Pusat"
                    mapLink="https://maps.google.com"
                    accent="#829c83"
                />
             </Reveal>
             <Reveal delay={0.4} className="w-full">
                <EventCardDetailed 
                    type="Resepsi"
                    date="Minggu, 27 Juni 2027"
                    time="11:00 - selesai"
                    location="Grand Ballroom Hotel Indonesia"
                    address="Jl. MH Thamrin No.1, Jakarta Pusat"
                    mapLink="https://maps.google.com"
                    accent="#d6919b"
                    isStream
                />
             </Reveal>
          </div>

          <Reveal className="mt-20 md:mt-32 max-w-2xl mx-auto text-center px-4" delay={0.6}>
             <div className="bg-white/60 backdrop-blur-2xl p-10 md:p-16 rounded-[50px] border border-white/60 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Video size={120} />
                 </div>
                 <h4 className="text-xs font-black text-[#d6919b] mb-6 uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                    <Video size={16} className="animate-pulse" /> Live Streaming
                 </h4>
                 <p className="text-base md:text-lg text-black/60 mb-10 leading-relaxed font-medium">Bagi keluarga dan kerabat yang tidak dapat hadir secara langsung, silakan saksikan melalui siaran langsung kami:</p>
                 <a href="#" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d6919b] text-white rounded-full font-black hover:bg-[#c57d87] transition-all shadow-xl active:scale-95 text-base md:text-lg group">
                    Join Live Stream <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
             </div>
          </Reveal>
          {/* Transition to next section color: white */}
          <SectionDivider color="#ffffff" flip />
      </section>

      {/* 5. SECTION: OUR GALLERY */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16 md:mb-24">
                <h2 className="font-serif text-6xl md:text-8xl text-[#829c83] mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>Our Gallery</h2>
                <div className="w-24 md:w-32 h-1.5 bg-[#829c83]/20 mx-auto rounded-full" />
            </Reveal>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                {[ASSETS.sections.g1, ASSETS.sections.g2, ASSETS.sections.g3, ASSETS.sections.hall].map((src, i) => (
                    <Reveal key={i} delay={i * 0.1} className="w-full">
                        <div className="relative overflow-hidden rounded-[50px] shadow-2xl hover:scale-[1.02] transition-all duration-1000 cursor-zoom-in ring-1 ring-black/[0.03] group">
                            <Image 
                                src={src} 
                                alt={`Gallery ${i}`} 
                                width={800} 
                                height={1200} 
                                className="w-full h-auto object-cover group-hover:brightness-105 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
        {/* Transition to next section color: #829c83 (Strong Sage) */}
        <SectionDivider color="#829c83" flip />
      </section>

      {/* 6. SECTION: OUR LOVE STORY */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 bg-[#829c83] text-white overflow-visible">
        {/* SVG Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto">
           <Reveal className="text-center mb-24 md:mb-40">
                <h2 className="font-serif text-6xl md:text-8xl text-white mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>Our Love Story</h2>
                <p className="text-white/60 text-[10px] md:text-xs tracking-[0.6em] uppercase font-black mb-4">Bagaimana kami dipertemukan</p>
                <div className="w-16 h-px bg-white/30 mx-auto" />
           </Reveal>
           
           <div className="relative">
              {/* Desktop Vertical Line Spacer */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
              
              <div className="space-y-24 md:space-y-0">
                  <TimelineReveal index={0}>
                    <TimelineItem 
                        year="2018" 
                        title="Awal Pertemuan" 
                        content="Seutas takdir mempertemukan kami dalam sebuah momen sederhana yang tak terduga. Sebuah percakapan yang mengawali perjalanan panjang penuh makna."
                        index={0}
                    />
                  </TimelineReveal>
                  <TimelineReveal index={1}>
                    <TimelineItem 
                        year="2021" 
                        title="Bertemu Orang Tua" 
                        content="Keberanian untuk melangkah lebih jauh, membawa niat tulus di hadapan kedua orang tua. Mendapat restu yang menjadi fondasi utama ikatan kami."
                        index={1}
                    />
                  </TimelineReveal>
                  <TimelineReveal index={2}>
                    <TimelineItem 
                        year="2024" 
                        title="Acara Lamaran" 
                        content="Sebuah janji yang diikat dengan ketulusan hati. Langkah besar menuju penyatuan dua jiwa yang telah siap melengkapi satu sama lain selamanya."
                        index={2}
                    />
                  </TimelineReveal>
              </div>
           </div>
        </div>
        {/* Transition to next section color: white */}
        <SectionDivider color="#ffffff" flip />
      </section>

      {/* 7. SECTION: LOVE GIFT */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 bg-white overflow-visible">
        <div className="max-w-4xl mx-auto text-center px-4">
            <Reveal className="mb-16 md:mb-24">
                <h2 className="font-serif text-6xl md:text-8xl text-[#d6919b] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>Love Gift</h2>
                <p className="text-base md:text-xl text-black/50 leading-relaxed font-medium">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan kasih, Anda dapat mengirimkan melalui:
                </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <Reveal delay={0.2} className="w-full">
                    <GiftCard 
                        bank="BANK BRI" 
                        account="1234 5678 90" 
                        name="Friska Andalusia" 
                        onCopy={() => copyToClipboard("1234567890", "bri")} 
                        copied={copied === "bri"}
                        color="#829c83"
                    />
                </Reveal>
                <Reveal delay={0.4} className="w-full">
                    <GiftCard 
                        bank="BANK MANDIRI" 
                        account="9876 5432 10" 
                        name="Fauzan Reza Arnanda" 
                        onCopy={() => copyToClipboard("9876543210", "mandiri")} 
                        copied={copied === "mandiri"}
                        color="#d6919b"
                    />
                </Reveal>
            </div>
        </div>
        {/* Transition to next section color: #fdf2f4 (Light Pink) */}
        <SectionDivider color="#fdf2f4" flip />
      </section>

      {/* 8. SECTION: KIRIMKAN DOA RESTU */}
      <section className="relative px-4 sm:px-6 py-24 md:py-40 bg-[#fdf2f4] overflow-visible">
          <div className="max-w-4xl mx-auto">
             <Reveal className="text-center mb-16 md:mb-24">
                <h2 className="font-serif text-6xl md:text-8xl text-[#2c3e50] mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>Kirimkan Do&apos;a Restu</h2>
                <div className="w-20 h-1.5 bg-[#d6919b]/30 mx-auto rounded-full mb-8" />
                <p className="text-base md:text-lg text-black/50 italic font-medium">Berikan pesan & doa terbaik untuk keberkahan perjalanan kami</p>
             </Reveal>

             <Reveal className="bg-white rounded-[60px] md:rounded-[80px] p-8 md:p-20 shadow-2xl shadow-pink-100 ring-1 ring-black/[0.03]">
                <div className="flex gap-4 sm:gap-8 justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
                    <Stat count={24} label="Hadir" color="bg-[#829c83]" />
                    <Stat count={5} label="Tidak Hadir" color="bg-[#d6919b]" />
                    <Stat count={8} label="Ragu" color="bg-gray-400" />
                </div>

                <form className="space-y-8 md:space-y-10">
                    <input 
                        type="text" 
                        placeholder="Nama Lengkap" 
                        className="w-full px-8 md:px-10 py-5 md:py-6 rounded-3xl border border-transparent bg-[#fbfaf7] focus:outline-none focus:ring-4 focus:ring-[#d6919b]/10 transition-all font-bold text-lg"
                    />
                    <textarea 
                        rows={4} 
                        placeholder="Tuliskan ucapan dan doa terbaik Anda..." 
                        className="w-full px-8 md:px-10 py-5 md:py-6 rounded-3xl border border-transparent bg-[#fbfaf7] focus:outline-none focus:ring-4 focus:ring-[#d6919b]/10 transition-all font-bold text-lg resize-none"
                    />
                    <div className="relative">
                        <select className="w-full px-8 md:px-10 py-5 md:py-6 rounded-3xl border border-transparent bg-[#fbfaf7] focus:outline-none focus:ring-4 focus:ring-[#d6919b]/10 transition-all appearance-none cursor-pointer font-bold text-lg text-[#2c3e50]/70">
                            <option>Konfirmasi Kehadiran</option>
                            <option>Hadir</option>
                            <option>Tidak Hadir</option>
                            <option>Masih Ragu</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                            <Calendar size={20} />
                        </div>
                    </div>
                    <button className="w-full py-6 md:py-8 bg-[#829c83] text-white rounded-[32px] font-black text-xl md:text-2xl hover:bg-[#6b826c] transition-all flex items-center justify-center gap-4 group shadow-2xl mt-8">
                        Kirim Doa <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-24 space-y-10 max-h-[700px] overflow-y-auto pr-6 custom-scrollbar">
                    <Reveal delay={0.1} className="w-full">
                        <Comment 
                            name="Teggege" 
                            initial="T" 
                            time="2 minggu yang lalu" 
                            msg="Selamat menempuh hidup baru Fauzan dan Friska! Semoga menjadi keluarga Samawa yang selalu diberkahi kebahagiaan." 
                            color="#829c83"
                        />
                    </Reveal>
                    <Reveal delay={0.2} className="w-full">
                        <Comment 
                            name="Andini" 
                            initial="A" 
                            time="3 hari yang lalu" 
                            msg="Barakallah... semoga lancar sampai hari-H ya! Sangat senang melihat perjalanan kalian sampai di titik ini." 
                            color="#d6919b"
                        />
                    </Reveal>
                </div>
             </Reveal>
          </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 md:py-32 bg-[#fdf2f4] text-center relative overflow-visible px-6">
          <div className="relative z-10 space-y-4">
              <Reveal className="mx-auto">
                <h2 className="font-serif text-4xl md:text-6xl text-[#2c3e50]" style={{ fontFamily: "'Great Vibes', cursive" }}>Fauzan & Friska</h2>
              </Reveal>
              <Reveal delay={0.3} className="mx-auto">
                <p className="text-black/30 text-[10px] md:text-xs tracking-[0.6em] uppercase font-black">Terima Kasih Atas Doa Restu Anda</p>
              </Reveal>
          </div>
      </footer>
    </div>
  );
}

function SectionDivider({ color, flip = false, opacity = 1 }: { color: string, flip?: boolean, opacity?: number }) {
    return (
        <div 
            className={`absolute left-0 w-full h-[60px] md:h-[120px] z-50 pointer-events-none overflow-hidden ${flip ? 'bottom-[-1px]' : 'top-[-1px]'}`}
            style={{ opacity }}
        >
            <svg 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none" 
                className={`w-full h-full ${flip ? 'rotate-180' : ''}`}
                style={{ fill: color }}
            >
                <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,72.05,99.41,75.27,240.85,1.48,349.57-41.4,97.43-38.4,188.15-18.4,265,30.29,103.2,65.4,189.65,11.2,278.41-38.4,63.13-35.29,141.22-38.19,214.33,16,14.62,10.84,30.18,25.51,45,38.86V0Z" opacity=".1"></path>
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,42.47V0Z" opacity=".2"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
        </div>
    );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-16 scale-95 blur-sm'}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

function TimelineReveal({ children, index }: { children: React.ReactNode, index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`}`}
        >
            {children}
        </div>
    );
}

function Countdown({ targetDate }: { targetDate: number }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex justify-center gap-6 md:gap-12 backdrop-blur-sm rounded-full py-4 px-2">
            <CountdownItem value={timeLeft.days} label="Hari" />
            <CountdownItem value={timeLeft.hours} label="Jam" />
            <CountdownItem value={timeLeft.minutes} label="Menit" />
            <CountdownItem value={timeLeft.seconds} label="Detik" />
        </div>
    );
}

function CountdownItem({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-serif text-[#2c3e50] font-black tracking-tighter" style={{ fontFamily: 'Lora, serif' }}>
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d6919b] font-black mt-3">
                {label}
            </div>
        </div>
    );
}

function EventCardDetailed({ type, date, time, location, address, mapLink, accent, isStream }: any) {
    return (
        <div className="bg-white rounded-[60px] p-10 md:p-16 shadow-2xl shadow-gray-200/50 ring-1 ring-black/[0.03] flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700 h-full relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2" style={{ backgroundColor: accent, opacity: 0.1 }} />
            <div className="w-16 h-1.5 mb-10 rounded-full" style={{ backgroundColor: accent }} />
            <h3 className="font-serif text-4xl md:text-5xl mb-10 text-[#2c3e50]" style={{ fontFamily: "'Dancing Script', cursive" }}>{type}</h3>
            
            <div className="space-y-6 md:space-y-8 mb-12 flex-1">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-2xl text-black/20 group-hover:text-black/40 transition-colors">
                        <Calendar size={20} />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight">{date}</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-2xl text-black/20 group-hover:text-black/40 transition-colors">
                        <Clock size={20} />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight">{time}</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-2xl text-black/20 group-hover:text-black/40 transition-colors">
                        <MapPin size={20} />
                    </div>
                    <span className="font-black text-xl md:text-2xl leading-tight text-[#2c3e50]">{location}</span>
                    <span className="text-sm md:text-base text-black/40 leading-relaxed max-w-[280px] font-medium">{address}</span>
                </div>
            </div>

            <a href={mapLink} className={`w-full py-5 md:py-6 rounded-[32px] font-black transition-all flex items-center justify-center gap-3 text-white shadow-2xl hover:brightness-110 active:scale-95 text-lg`} style={{ backgroundColor: accent }}>
                Petunjuk Lokasi <MapPin size={20} />
            </a>
        </div>
    );
}

function TimelineItem({ year, title, content, index }: { year: string; title: string; content: string, index: number }) {
    return (
      <div className="md:w-full md:flex group relative min-h-[300px]">
         {/* Desktop Line Marker Center */}
         <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-2xl ring-[12px] ring-white/10 group-hover:scale-125 transition-transform duration-500">
                <Heart size={24} className="text-[#d6919b] fill-[#d6919b]" />
            </div>
         </div>

         {/* Mobile Line Marker Left */}
         <div className="md:hidden absolute left-0 top-0 z-20">
            <div className="bg-white rounded-full p-3 shadow-xl ring-8 ring-white/10">
                <Heart size={16} className="text-[#d6919b] fill-[#d6919b]" />
            </div>
         </div>
         
         <div className={`w-full flex ${index % 2 === 0 ? 'md:justify-end md:pr-24' : 'md:justify-start md:pl-24'} pl-12 md:pl-0`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-[40px] md:rounded-[60px] p-10 md:p-14 border border-white/20 md:w-[42%] hover:bg-white/15 transition-all duration-700 shadow-2xl group-hover:-translate-y-2 relative">
                <div className="text-white/40 font-black text-xs md:text-sm mb-4 tracking-[0.4em] uppercase">{year}</div>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>{title}</h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-bold italic opacity-90">{content}</p>
                
                {/* Connector line for desktop */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-[-96px]' : 'left-[-96px]'} w-24 h-px bg-white/20`} />
            </div>
         </div>
      </div>
    );
}

function GiftCard({ bank, account, name, onCopy, copied, color }: any) {
    return (
        <div className="bg-[#fbfaf7] rounded-[50px] md:rounded-[60px] p-8 md:p-12 ring-1 ring-black/[0.02] group hover:shadow-2xl transition-all border-b-[8px] shadow-2xl shadow-gray-100 flex flex-col items-center h-full" style={{ borderBottomColor: color }}>
            <div className="font-black mb-4 tracking-[0.4em] uppercase text-[10px] md:text-xs text-[#2c3e50]/60">{bank}</div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2c3e50] mb-4 tracking-tight font-black whitespace-nowrap">{account}</div>
            <div className="text-sm md:text-base font-black text-black/30 mb-8 tracking-tight italic">{name}</div>
            <button 
                onClick={onCopy}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 text-white rounded-[28px] text-sm md:text-base font-black shadow-xl transition-all active:scale-95 hover:brightness-110`}
                style={{ backgroundColor: color }}
            >
                {copied ? "Berhasil Disalin!" : <><Copy size={18} /> Salin Rekening</>}
            </button>
        </div>
    );
}

function Stat({ count, label, color }: any) {
    return (
        <div className="flex flex-col items-center shrink-0">
            <div className={`${color} px-8 md:px-12 py-4 md:py-6 rounded-3xl text-white font-black text-2xl md:text-4xl mb-3 shadow-2xl`}>{count}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/30 font-black">{label}</div>
        </div>
    );
}

function Comment({ name, initial, time, msg, color }: any) {
    return (
        <div className="flex gap-6 md:gap-10 p-6 md:p-10 rounded-[50px] hover:bg-[#fbfaf7] transition-all border border-transparent hover:border-black/[0.03] group">
            <div className={`w-16 h-16 md:w-24 md:h-24 rounded-3xl md:rounded-[40px] flex items-center justify-center font-black text-2xl md:text-4xl shrink-0 shadow-2xl text-white transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500`} style={{ backgroundColor: color }}>
                {initial}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <span className="font-black text-[#2c3e50] text-base md:text-xl uppercase tracking-tight">{name}</span>
                    <span className="text-[10px] md:text-xs text-black/20 font-black uppercase tracking-[0.2em]">{time}</span>
                </div>
                <div className="text-black/60 text-base md:text-xl leading-relaxed bg-[#fbfaf7]/80 p-6 md:p-10 rounded-[40px] rounded-tl-none italic ring-1 ring-black/[0.03] shadow-inner font-medium">
                   &quot;{msg}&quot;
                </div>
                <div className="mt-6 flex gap-8 md:gap-12 ml-4">
                    <button className="text-xs font-black text-[#d6919b] uppercase tracking-[0.2em] hover:opacity-100 opacity-60 transition-all">Suka</button>
                    <button className="text-xs font-black text-black/20 uppercase tracking-[0.2em] hover:text-black/60 transition-all">Balas</button>
                </div>
            </div>
        </div>
    );
}
