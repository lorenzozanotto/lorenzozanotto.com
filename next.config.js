/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://bento.me/zanotto',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
