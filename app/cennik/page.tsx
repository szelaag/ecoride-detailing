export const metadata = { title: "Cennik | EcoRide Detailing" };
export default function Pricing(){
  const rows = [
    { name: "Quick Wash (rower/hulajnoga)", price: "od 79 zł" },
    { name: "Full Detail (rower/hulajnoga)", price: "od 149 zł" },
    { name: "Season Care (rower/hulajnoga)", price: "od 199 zł" },
    { name: "Dojazd (Warszawa)", price: "w cenie pakietu" },
  ];
  return (
    <section className="container-max my-10">
      <h1>Cennik</h1>
      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Usługa</th>
              <th className="py-2">Cena</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name} className="border-b last:border-none">
                <td className="py-3 pr-4">{r.name}</td>
                <td className="py-3">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 mt-4 text-sm">Ceny orientacyjne. Ostateczna wycena po weryfikacji stanu sprzętu.</p>
    </section>
  );
}
