export const metadata = { title: "FAQ | EcoRide Detailing" };
const qa = [
  { q: "Czy dojeżdżacie poza Warszawę?", a: "Tak, do 15 km od granic miasta po wcześniejszym ustaleniu."},
  { q: "Jakie środki stosujecie?", a: "Biodegradowalne, bezpieczne dla lakieru i środowiska."},
  { q: "Czy mogę umówić ekspresowy termin?", a: "W miarę dostępności — często w ciągu 24h."},
];
export default function FAQ(){
  return (
    <section className="container-max my-10">
      <h1>Najczęstsze pytania</h1>
      <div className="grid gap-4 mt-6">
        {qa.map(i => (
          <details key={i.q} className="card">
            <summary className="cursor-pointer select-none">{i.q}</summary>
            <p className="text-gray-700 mt-2">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
