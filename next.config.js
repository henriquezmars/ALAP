/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        // Captura todas las rutas de alapescuela.com
        source: '/:path*',
        // Las sirve desde el dominio externo
        destination: 'http://pay.boardlatinoamericanodeperfusion.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
