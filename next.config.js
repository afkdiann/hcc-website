/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;