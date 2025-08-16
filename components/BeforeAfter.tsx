import Image from 'next/image';
export default function BeforeAfter(){
  return (
    <section className="container-max my-12 grid md:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="mb-3">Przed</h3>
        <div className="relative aspect-[4/3]">
          <Image src="/images/sample-before.jpg" alt="Rower przed czyszczeniem" fill className="object-cover rounded-xl" loading="lazy" />
        </div>
      </div>
      <div className="card">
        <h3 className="mb-3">Po</h3>
        <div className="relative aspect-[4/3]">
          <Image src="/images/sample-after.jpg" alt="Rower po detailingu" fill className="object-cover rounded-xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
