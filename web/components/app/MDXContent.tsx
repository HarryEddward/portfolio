// components/MDXContent.tsx
'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

// Opcional: define tus componentes personalizados aquí
const components = {
  // Ej: h2: ({children}) => <h2 className="text-2xl font-bold mt-6">{children}</h2>,
};

export default function MDXContent({ ...props }: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}