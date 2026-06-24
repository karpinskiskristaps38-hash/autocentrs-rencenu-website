import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  useEffect(() => {
    const helloWorldApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log(response.data.message);
      } catch (e) {
        console.error(e, `errored out requesting / api`);
      }
    };
    helloWorldApi();
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-neutral-900 bg-neutral-950/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-black font-black px-3 py-1 rounded text-xl">R</span>
            <span className="font-black tracking-wider text-lg">AUTO CENTRS <span className="text-orange-500">RENCĒNU</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-neutral-400">
            <a href="#pakalpojumi" className="hover:text-orange-500 transition">Pakalpojumi</a>
            <a href="#atsauksmes" className="hover:text-orange-500 transition">Atsauksmes</a>
            <a href="#atrasanas" className="hover:text-orange-500 transition">Atrašanās</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex bg-neutral-900 p-0.5 rounded text-xs font-bold border border-neutral-800">
              <span className="bg-orange-500 text-black px-2 py-1 rounded-sm">LV</span>
              <span className="text-neutral-400 px-2 py-1">EN</span>
            </div>
            <a href="tel:+37125558884" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded text-sm flex items-center gap-2 transition uppercase tracking-wider">
              📞 Zvanīt
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-6 border-b border-neutral-900 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-orange-500 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Auto Centrs Rencēnu • Rīga
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl leading-none uppercase mb-6">
            Profesionāls auto <br />remonts <span className="text-orange-500">Rīgā</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Uzticami. Ātri. Caurspīdīgi. Godīgas cenas un pieredzējuši meistari — Tavs auto ir drošās rokās, kurām vari uzticēties.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="tel:+37125558884" className="bg-orange-500 hover:bg-orange-600 text-black font-black px-8 py-4 rounded text-center tracking-wider uppercase transition flex items-center justify-center gap-2">
              Zvanīt mums ❯
            </a>
            <a href="#pakalpojumi" className="border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded text-center tracking-wider uppercase transition">
              Skatīt pakalpojumus
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-10 border-t border-neutral-900 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            <div><span className="text-orange-500 mr-2">01</span> 12+ gadu pieredze</div>
            <div><span className="text-orange-500 mr-2">02</span> Caurspīdīgas cenas</div>
            <div><span className="text-orange-500 mr-2">03</span> Vietējs uzticams serviss</div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="pakalpojumi" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">// Ko mēs darām</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Pakalpojumi tavam auto</h2>
          <p className="text-neutral-400 max-w-xl mt-4 font-light">No ātras apkopes līdz pilnai diagnostikai — katrs darbs paveikts pareizi jau pirmajā reizē.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Eļļas maiņa", desc: "Kvalitatīvas eļļas un filtri. Ātrs serviss ar skaidrām cenām visām auto markām." },
            { title: "Bremžu remonts", desc: "Kluči, diski, suporti un šķidrums. Drošas bremzes — bez kompromisiem." },
            { title: "Datordiagnostika", desc: "Moderni OBD skeneri, lai ātri atrastu kļūmes un saprotami tās izskaidrotu." },
            { title: "Riteņu izlīdzināšana", desc: "Precīza 3D izlīdzināšana. Rādām mērījumus un izskaidrojam katru regulējumu." },
            { title: "Riepu serviss", desc: "Sezonas maiņa, balansēšana, glabāšana. Vienmērīga gaita un drošība." },
            { title: "Filtru maiņa", desc: "Gaisa, salona, degvielas un eļļas filtri — svaigi filtri, svaigs dzinējs." }
          ].map((item, idx) => (
            <div key={idx} className="border border-neutral-900 bg-neutral-900/30 p-8 rounded-lg hover:border-orange-500/30 transition flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center rounded mb-6 font-bold group-hover:bg-orange-500 group-hover:text-black transition">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold uppercase mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">{item.desc}</p>
              </div>
              <a href="tel:+37125558884" className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-1 hover:text-orange-400 transition">
                📞 Book
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="atsauksmes" className="py-24 px-6 border-t border-neutral-900 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">// Klientu atsauksmes</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Rīgas autovadītāji uzticas mums</h2>
            <p className="text-neutral-400 max-w-xl mt-4 font-light">Īstas atsauksmes no īstiem klientiem. Mūsu darbs runā pats par sevi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Aleksandrs K.", service: "EĻĻAS MAIŅA", text: "Mainīju eļļu un gaisa filtru. Visas cenas (eļļa, filtri, darbs) tika paziņotas iepriekš. Saprātīga cena un savlaicīgi paveikts darbs." },
              { name: "Georg Bohvalov", service: "RITEŅU IZLĪDZINĀŠANA", text: "Veicu riteņu izlīdzināšanu šajā servisā. Puiši paveica lielisku darbu un parādīja un izskaidroja visas problēmas un to, kas vēl darāms, lai uzlabotu." },
              { name: "Maris Reinbergs", service: "PILNS SERVISS", text: "Ļoti labs serviss! Darbs tiek paveikts ļoti kvalitatīvi, esmu apmierināts, jo meistari atdzīvināja manu veco Audi, kurš tagad jūtami darbojas labāk. Paldies arī meistariem, kuri tai dienā pat palika ārpus darba laika." }
            ].map((review, idx) => (
              <div key={idx} className="border border-neutral-900 bg-neutral-950 p-8 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex text-orange-500 gap-1 mb-6 text-sm">★★★★★</div>
                  <p className="italic text-neutral-300 font-light text-sm leading-relaxed mb-6">"{review.text}"</p>
                </div>
                <div className="border-t border-neutral-900 pt-4 flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <span className="text-[10px] tracking-widest font-bold text-neutral-500 uppercase block mt-0.5">{review.service}</span>
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">Atpakaļ</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <section id="atrasanas" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">// Apciemo mūs</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Atrodi mūs un iebrauc ciemos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-neutral-900 bg-neutral-900/30 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded text-orange-500 font-bold">📍</div>
              <div>
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Adrese</span>
                <p className="font-bold text-lg leading-snug">Meirānu iela 6, Latgales priekšpilsēta, Rīga, LV-1073</p>
              </div>
            </div>
            <div className="border border-neutral-900 bg-neutral-900/30 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded text-orange-500 font-bold">📞</div>
              <div>
                <span className="text-xs text-neutral-500 uppercase font-bold block mb-1">Tālrunis</span>
                <p className="font-bold text-xl text-orange-500">+371 25 558 884</p>
              </div>
            </div>
            <div className="border border-neutral-900 bg-neutral-900/30 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-900">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold">🕒</span>
                  <span className="text-xs text-neutral-500 uppercase font-bold">Darba laiks</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">● Atvērts</span>
              </div>
              <div className="space-y-2 text-sm font-medium text-neutral-400">
                <div className="flex justify-between"><span>Pirmdiena</span><span className="text-neutral-600">Slēgts</span></div>
                <div className="flex justify-between"><span>Otrdiena</span><span className="text-neutral-600">Slēgts</span></div>
                <div className="flex justify-between text-white font-bold"><span>Trešdiena • <span className="text-orange-500 uppercase text-xs">Tagad</span></span><span>9:00 - 18:00</span></div>
                <div className="flex justify-between"><span>Ceturtdiena</span><span>9:00 - 18:00</span></div>
                <div className="flex justify-between"><span>Piektdiena</span><span>9:00 - 17:00</span></div>
                <div className="flex justify-between"><span>Sestdiena</span><span className="text-neutral-600">Slēgts</span></div>
                <div className="flex justify-between"><span>Svētdiena</span><span className="text-neutral-600">Slēgts</span></div>
              </div>
            </div>
          </div>
          {/* MAP EMBED */}
          <div className="w-100 h-96 border border-neutral-900 rounded-lg overflow-hidden bg-neutral-900">
            <iframe 
              title="Auto Centrs Rencēnu Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x46eec7b9bc5c38bf%3A0x6b7724a10dfbecc2!2sMeir%C4%81nu%20iela%206%2C%20Latgales%20priek%C5%A1pils%C4%93ta%2C%20R%C4%ABga%2C%20LV-1073!5e0!3m2!1slv!2slv!4v1719234000000!5m2!1slv!2slv" 
              className="w-full h-full border-none grayscale invert contrast-125 opacity-80"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <section className="py-24 px-6 text-center border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Gatavs sakārtot savu auto?</h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8">Paņem telefonu. Atbildam ātri, kotējam godīgi un salabojam kā nākas.</p>
          <a href="tel:+37125558884" className="inline-flex bg-orange-500 hover:bg-orange-600 text-black font-black px-10 py-5 rounded text-lg uppercase tracking-wider transition items-center gap-3 shadow-xl shadow-orange-500/10">
            📞 Zvanīt mums <span className="text-sm font-bold opacity-80">+371 25 558 884</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 px-6 py-8 text-xs text-neutral-500 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-neutral-900 border border-neutral-800 text-orange-500 px-1.5 py-0.5 font-bold rounded">R</span>
            <span>AUTO CENTRS RENCĒNU — Profesionāls auto remonts Rīgā.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Auto Centrs Rencēnu. Visas tiesības aizsargātas.
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
