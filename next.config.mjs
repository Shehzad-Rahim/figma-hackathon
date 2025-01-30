/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // App Router enabled
    },
    images: {
        domains: ["cdn.sanity.io"]
    },
    
};

export default nextConfig;
