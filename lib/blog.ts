import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export type PostMeta = {
  slug: string; title: string; description: string; date: string; readTime: string;
};
const postsDir = path.join(process.cwd(), 'content', 'blog');

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const { text } = readingTime(content);
    return {
      slug,
      title: String(data.title),
      description: String(data.description),
      date: String(data.date),
      readTime: text,
    };
  });
  return posts.sort((a,b)=> (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string){
  const file = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  return {
    meta: {
      slug,
      title: String(data.title),
      description: String(data.description),
      date: String(data.date),
      readTime: readingTime(content).text,
    },
    htmlContent,
  };
}
