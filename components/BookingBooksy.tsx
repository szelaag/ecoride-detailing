export default function BookingBooksy(){
  return (
    <div className="card">
      <h2 className="mb-2">Rezerwacja przez Booksy</h2>
      <p className="mb-4 text-gray-700 text-sm">Jeśli wolisz Booksy, skorzystaj z poniższego widżetu.</p>
      {/* Wstaw swój skrypt/iframe od Booksy: poniżej placeholder iframe. */}
      <div className="aspect-[16/9]">
        <iframe
          title="Booksy widget"
          src="https://booksy.com/pl-pl/your-embed"
          className="w-full h-full rounded-xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
