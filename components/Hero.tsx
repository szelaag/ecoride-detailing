import Image from 'next/image';
import Link from 'next/link';
export default function Hero(){
  return (
    <section className="hero-gradient">
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1>Mobilne mycie i detailing rowerów oraz hulajnóg w Warszawie</h1>
          <p className="mt-4 text-lg text-gray-700">
            Dojeżdżamy do Ciebie! Ekologiczne środki, profesjonalny sprzęt i szybkie terminy – nawet w 24h.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/kontakt#rezerwacja" className="btn btn-primary">Umów wizytę online</Link>
            <Link href="/oferta" className="btn btn-outline">Zobacz ofertę</Link>
          </div>
          <ul className="mt-6 grid md:grid-cols-2 gap-2 text-sm text-gray-700">
            <li>• 100% mobilnie – bez dojazdu do serwisu</li>
            <li>• Biodegradowalne środki czyszczące</li>
            <li>• Konserwacja: smarowanie, regulacje</li>
            <li>• Pakiety sezonowe i rabaty</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/4]">
          <Image src="/images/hero-bike.jpg" alt="Mycie roweru – mobilna usługa" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-2xl shadow-md" priority />
        </div>
      </div>
    </section>
  );
}
