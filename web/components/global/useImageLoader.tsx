

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://www.cafebuy.com/cv/${src}?w=${width}&q=${quality || 75}`
}
