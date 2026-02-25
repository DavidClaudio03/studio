// next.config.ts
const nextConfig = {
  output: 'export', // Obligatorio para GitHub Pages
  basePath: '/studio', // El nombre de tu repositorio
  images: {
    unoptimized: true, // Pages no soporta optimización de imágenes dinámica
  },
};

export default nextConfig;
