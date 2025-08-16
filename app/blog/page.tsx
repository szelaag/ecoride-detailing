import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = { title: "Blog | EcoRide Detailing" };

export default function Blog(){
  const posts = getAllPostsMeta();
  return (
    <section className="container-max my-10">
      <h1>Blog / Poradnik</h1>
      <p className="text-gray-700 mt-2">Praktyczne artykuły o pielęgnacji rowerów i hulajnóg.</p>
      <div className="grid gap-6 mt-6">
        {posts.map(p => (
          <article key={p.slug} className="card">
            <h2 className="text-xl">{p.title}</h2>
            <p className="text-gray-600 text-sm">{p.date} • {p.readTime}</p>
            <p className="text-gray-700 mt-2">{p.description}</p>
            <Link className="btn mt-4 bg-eco-green text-white" href={`/blog/${p.slug}`}>Czytaj dalej</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
