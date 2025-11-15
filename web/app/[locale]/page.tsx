import ViewHome from '@/components/app/ViewHome';
import { getAllPosts } from '@/lib/posts';
import { getAllProjects } from '@/lib/projects';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const posts = getAllPosts().slice(0, 2); // Obtener solo los 3 posts más recientes
  const projects = getAllProjects().slice(0, 4); // Obtener solo los 3 proyectos más recientes

  const tResponsiveWeb = await getTranslations('ResponsiveWeb');

  return (
    <>
      {/* 📱 Vista móvil/tablet */}
      <div className="block lg:hidden h-screen w-full flex items-center justify-center bg-white text-gray-400 text-center p-6">
        <p className="text-xl">
          {tResponsiveWeb('errorResponsiveSizeMessage')}
        </p>
      </div>

      {/* 💻 Vista desktop */}
      <div className="hidden lg:block">
        <ViewHome posts={posts} projects={projects}/>
      </div>
    </>
  )
}