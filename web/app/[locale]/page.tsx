"use server";

import ViewHome from '@/components/app/ViewHome';
import { getAllPosts } from '@/lib/posts';

export default async function Home() {
  const posts = getAllPosts().slice(0, 2); // Obtener solo los 3 posts más recientes

  return <ViewHome posts={posts}/>
}


