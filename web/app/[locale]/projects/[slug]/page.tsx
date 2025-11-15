// app/[locale]/blog/[slug]/page.tsx
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LanguageSwitcher } from '@/components/app/LanguageSwitcher';
import { MDXRemote } from 'next-mdx-remote/rsc'; // ✨ Importación correcta


export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const { slug, locale } = await params;

  if (!slug || typeof slug !== 'string') notFound();

  let post;
  try {
    post = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-col relative w-full max-w-3xl items-center justify-between bg-white dark:bg-black sm:items-start snap-y snap-mandatory overflow-y-scroll h-screen px-16 pt-32 pb-16">
        <div className="w-full flex flex-row justify-end items-end mb-2">
          <LanguageSwitcher/>
        </div>
        
        <h1 className="w-full text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">
          {post.title}
        </h1>
        
        <article className="w-full">
          <time className="text-gray-500 text-sm">
            {new Date(post.date).toLocaleDateString('es-ES')} • {Math.ceil(post.readingTime.minutes)} min
          </time>
          
          <div className="mt-6 prose prose-lg dark:prose-invert max-w-none">
            {/* ✨ NO necesitas serialize, MDXRemote lo hace automáticamente */}
            <MDXRemote source={post.content}/>
          </div>
        </article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllProjects();
  return posts.flatMap((post) =>
    routing.locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}