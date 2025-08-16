export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t">
      <div className="container-max py-8 grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-semibold">EcoRide Detailing – Mobilna Myjnia Rowerów i Hulajnóg</p>
          <p>ul. Wiosenna 12, 02-300 Warszawa</p>
          <p>Tel.: +48 505 987 321 • E-mail: kontakt@ecoridedetailing.pl</p>
        </div>
        <div className="md:text-right text-gray-600">
          <p>© {year} EcoRide Detailing. Wszelkie prawa zastrzeżone.</p>
          <p>Projekt i wdrożenie: EcoRide Studio</p>
        </div>
      </div>
    </footer>
  );
}
