import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Link from "next/link";

export default function Page(){
  return (
    <>
      <Hero />
      <section className="container-max my-12 grid md:grid-cols-3 gap-6">
        {[
          { title: "Mobilnie", desc: "Dojeżdżamy do klienta w Warszawie i okolicach."},
          { title: "Eko", desc: "Biodegradowalne środki bezpieczne dla lakieru i środowiska."},
          { title: "Szybko", desc: "Realizacja nawet w 24h od zgłoszenia."},
        ].map((c)=> (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p className="text-gray-700 mt-2">{c.desc}</p>
          </div>
        ))}
      </section>
      <BeforeAfter />
      <section className="container-max my-12 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2>Pakiety usług</h2>
          <p className="text-gray-700 mt-2">Wybierz zakres prac dopasowany do Twojego sprzętu.</p>
          <ul className="mt-4 list-disc pl-5 text-gray-700">
            <li>Quick Wash — szybkie odświeżenie</li>
            <li>Full Detail — kompleksowa pielęgnacja</li>
            <li>Season Care — przygotowanie do sezonu</li>
          </ul>
          <Link className="btn mt-4 border border-eco-green text-eco-green" href="/oferta">Zobacz pełną ofertę</Link>
        </div>
        <div className="card">
          <h2>Blog / Poradnik</h2>
          <p className="text-gray-700 mt-2">Praktyczne wskazówki jak dbać o rower i hulajnogę.</p>
          <Link className="btn mt-4 bg-eco-green text-white" href="/blog">Czytaj artykuły</Link>
        </div>
      </section>
    </>
  );
}
