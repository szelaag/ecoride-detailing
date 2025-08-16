export const metadata = { title: "Oferta | EcoRide Detailing" };
const tiers = [
  {
    name: "Quick Wash",
    items: ["Mycie bezdotykowe", "Osuszenie i przetarcie", "Kontrola opon"],
  },
  {
    name: "Full Detail",
    items: ["Mycie etapowe + dekontaminacja", "Detailing napędu (odtłuszczenie + smar)", "Konserwacja i regulacje"],
  },
  {
    name: "Season Care",
    items: ["Kompleksowy przegląd", "Konserwacja elementów ruchomych", "Zabezpieczenie lakieru"],
  },
];
export default function Offer(){
  return (
    <section className="container-max my-10">
      <h1>Oferta</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {tiers.map(t => (
          <div key={t.name} className="card">
            <h3>{t.name}</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              {t.items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
