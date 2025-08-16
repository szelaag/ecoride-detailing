import BookingCalendly from "@/components/BookingCalendly";
import BookingBooksy from "@/components/BookingBooksy";

export const metadata = { title: "Kontakt i rezerwacja | EcoRide Detailing" };

export default function Contact(){
  return (
    <section className="container-max my-10">
      <h1>Kontakt</h1>
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="card lg:col-span-2">
          <h2>Dane kontaktowe</h2>
          <ul className="mt-3 text-gray-700">
            <li><strong>Adres:</strong> ul. Wiosenna 12, 02-300 Warszawa (mobilnie)</li>
            <li><strong>Telefon:</strong> +48 505 987 321</li>
            <li><strong>E-mail:</strong> kontakt@ecoridedetailing.pl</li>
          </ul>

          <form
            className="mt-6 grid gap-3"
            action="https://formsubmit.co/your@email.com"
            method="POST"
          >
            {/* FormSubmit konfiguracja: po wdrożeniu podmień e-mail i dodaj _next/redirect */}
            <input type="hidden" name="_subject" value="Nowe zapytanie — EcoRide Detailing" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="grid gap-1">
              <span>Imię</span>
              <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Jan" />
            </label>
            <label className="grid gap-1">
              <span>Telefon</span>
              <input name="phone" required className="border rounded-xl px-3 py-2" placeholder="+48 ..." />
            </label>
            <label className="grid gap-1">
              <span>E-mail</span>
              <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="jan@przyklad.pl" />
            </label>
            <label className="grid gap-1">
              <span>Typ pojazdu</span>
              <select name="vehicle" className="border rounded-xl px-3 py-2">
                <option>Rower</option>
                <option>Hulajnoga</option>
              </select>
            </label>
            <label className="grid gap-1">
              <span>Preferowana data usługi</span>
              <input type="date" name="date" className="border rounded-xl px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span>Dodatkowe informacje</span>
              <textarea name="message" rows={4} className="border rounded-xl px-3 py-2" placeholder="Opisz problem..." />
            </label>
            <button className="btn bg-eco-green text-white">Wyślij</button>
          </form>
        </div>

        <aside className="grid gap-6">
          <BookingCalendly />
          <BookingBooksy />
          <div className="card">
            <h2 className="mb-2">Obszar działania</h2>
            <div className="aspect-[16/9]">
              <iframe
                title="Mapa Warszawa"
                className="w-full h-full rounded-xl border"
                loading="lazy"
                src="https://www.google.com/maps?q=Warszawa&output=embed"
              ></iframe>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
