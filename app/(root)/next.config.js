/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',        // ← keep empty or delete this line
  assetPrefix: '',     // ← keep empty or delete this line
};

module.exports = nextConfig;