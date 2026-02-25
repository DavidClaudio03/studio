/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Vuelve el sitio estático para GitHub
  basePath: '/studio', // EL NOMBRE DE TU REPOSITORIO
  images: {
    unoptimized: true, // Requerido para sitios estáticos en Pages
  },
};

export default nextConfig;
