// next.config.ts
const nextConfig = {
  output: 'export', // Indica que queremos un sitio estático
  basePath: '/studio', // Reemplaza 'studio' por el nombre exacto de tu repositorio
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes nativa de Next.js
  },
};

export default nextConfig;
