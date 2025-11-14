// app/[locale]/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize'; 
import { routing } from '@/i18n/routing';
import MDXContent from '@/components/app/MDXContent';
import { LanguageSwitcher } from '@/components/app/LanguageSwitcher';

// ✅ El tipo SÍ debe ser una Promesa, para que coincida con tu layout
export default async function PostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
 
    // ✅ ¡SÍ necesitas 'await params' por culpa de tu layout.tsx!
    const { slug, locale } = await params;

    if (!slug || typeof slug !== 'string') notFound();

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    const mdxSource = await serialize(post.content);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex-col relative w-full max-w-3xl items-center justify-between bg-white dark:bg-black sm:items-start snap-y snap-mandatory overflow-y-scroll h-screen px-16 pt-32 pb-16">
                <div className="w-full flex flex-row justify-end items-end mb-2">
                    <LanguageSwitcher/>
                </div>
                <h1 className="w-full text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">{post.title}</h1>
                <article className=" p-6 prose">
                    <time className="text-gray-500">
                        {new Date(post.date).toLocaleDateString('es-ES')} • {Math.ceil(post.readingTime.minutes)} min
                    </time>
                    <div className="mt-6">
                        <MDXContent {...mdxSource} />
                    </div>
                </article>
            </main>
        </div>
    );
}

// generateStaticParams (igual que antes)
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.flatMap((post) =>
        routing.locales.map((locale) => ({
        locale,
        slug: post.slug,
        }))
    );
}