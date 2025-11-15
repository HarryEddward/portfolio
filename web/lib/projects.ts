import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const projectDirectory = path.join(process.cwd(), 'projects');

export type ProjectFrontMatter = {
  title: string;
  date: string;
  description?: string;
  published?: boolean;
};

export type Project = {
  slug: string;
  content: string;
  readingTime: ReturnType<typeof readingTime>;
} & ProjectFrontMatter;

export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectDirectory).filter((file) => /\.mdx?$/.test(file));
}

export function getProjectBySlug(slug?: string): Project {
  if (!slug) {
    throw new Error('Slug is required');
  }

  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(projectDirectory, `${realSlug}.mdx`);

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
  } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((post) => post.published !== false) // solo publicados
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}