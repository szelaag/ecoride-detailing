export const metadata = { title: "O nas | EcoRide Detailing" };
export default function About(){
  return (
    <section className="container-max my-10">
      <div className="card">
        <h1>O nas</h1>
        <p className="mt-4 text-gray-700">
          Świadczymy mobilne usługi mycia, czyszczenia i detailingu rowerów oraz hulajnóg w Warszawie i okolicach (od kwietnia 2023).
          Dojeżdżamy bezpośrednio do klienta, korzystając z ekologicznych środków i profesjonalnych narzędzi.
          Naszą misją jest połączenie profesjonalnej pielęgnacji z mobilnością i troską o środowisko.
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li>Usługi w pełni mobilne</li>
          <li>Biodegradowalne środki bezpieczne dla lakieru</li>
          <li>Szybkie terminy – nawet 24h</li>
          <li>Konserwacja po czyszczeniu (smarowanie, regulacje)</li>
          <li>Atrakcyjne pakiety sezonowe</li>
        </ul>
      </div>
    </section>
  );
}
