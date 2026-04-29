/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '/hcc-website' : '';

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