'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" aria-label="EcoRide Detailing – strona główna">
          <Image src="/favicon.svg" width={28} height={28} alt="Logo EcoRide Detailing" priority />
          <span className="font-semibold">EcoRide Detailing</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link ${pathname===l.href? 'text-eco-green font-medium':''}`}>{l.label}</Link>
          ))}
          <Link href="/kontakt#rezerwacja" className="btn btn-primary">Rezerwuj online</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} aria-label="Menu" className="md:hidden btn btn-outline">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-max py-3 grid gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="nav-link">{l.label}</Link>
            ))}
            <Link href="/kontakt#rezerwacja" onClick={()=>setOpen(false)} className="btn btn-primary mt-2">Rezerwuj online</Link>
          </div>
        </div>
      )}
    </header>
  );
}
