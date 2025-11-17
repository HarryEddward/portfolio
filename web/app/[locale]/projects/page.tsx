import { LanguageSwitcher } from '@/components/app/LanguageSwitcher';
import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllProjects();

  return (
   <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-col relative min-h-screen w-full max-w-3xl items-center justify-between bg-white dark:bg-black sm:items-start snap-y snap-mandatory overflow-y-scroll h-screen">

      <section 
        className="min-h-screen w-full snap-start snap-always flex flex-col items-center text-center sm:items-start sm:text-left px-16 pt-32 pb-16"
      >
        <div className="w-full flex flex-row justify-end items-end">
          <LanguageSwitcher/>
        </div>
      

        <h1 className="w-full text-4xl font-bold border-b-2 pb-4 mb-8 text-black dark:text-white">Projects</h1>
        <ul className="space-y-4 w-full">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/projects/${post.slug}`}
                className="block p-4 border rounded hover:bg-gray-50"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 text-sm">
                  {new Date(post.date).toLocaleDateString('es-ES')} •{' '}
                  {Math.ceil(post.readingTime.minutes)} min lectura
                </p>
                {post.description && (
                  <p className="mt-1 text-gray-800">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      </main>
    </div>
  );
}
