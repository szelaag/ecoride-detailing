'use client';
import dynamic from 'next/dynamic';
const InlineWidget = dynamic(() => import('react-calendly').then(m => m.InlineWidget), { ssr: false });

export default function BookingCalendly(){
  return (
    <div className="card" id="rezerwacja">
      <h2 className="mb-2">Rezerwacja online</h2>
      <p className="mb-4 text-gray-700 text-sm">Wybierz termin, a my przyjedziemy pod wskazany adres. Potwierdzenie otrzymasz e-mailem.</p>
      {/* Podmień URL na własny link Calendly lub użyj zakładki Booksy (komponent poniżej). */}
      <InlineWidget url="https://calendly.com/Twoj-Login/ecoride-detailing" styles={{ height: '760px' }} />
    </div>
  );
}
