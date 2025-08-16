import { getPostBySlug, getAllPostsMeta } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams(){
  const posts = getAllPostsMeta();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props){
  const { meta } = await getPostBySlug(params.slug);
  return { title: `${meta.title} | EcoRide Detailing`, description: meta.description };
}

export default async function Post({ params }: Props){
  const { meta, htmlContent } = await getPostBySlug(params.slug);
  return (
    <section className="container-max my-10">
      <article className="prose max-w-none prose-h1:text-3xl prose-p:text-gray-800 prose-a:text-eco-green">
        <h1>{meta.title}</h1>
        <p className="text-gray-600 text-sm">{meta.date} • {meta.readTime}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </section>
  );
}
