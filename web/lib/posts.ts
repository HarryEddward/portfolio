import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostFrontMatter = {
  title: string;
  date: string;
  description?: string;
  published?: boolean;
};

export type Post = {
  slug: string;
  content: string;
  readingTime: ReturnType<typeof readingTime>;
} & PostFrontMatter;

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => /\.mdx?$/.test(file));
}

export function getPostBySlug(slug?: string): Post {
  if (!slug) {
    throw new Error('Slug is required');
  }

  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${realSlug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const rt = readingTime(content);

  return {
    slug: realSlug,
    content,
    readingTime: rt,
    ...data,
  } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published !== false) // solo publicados
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}