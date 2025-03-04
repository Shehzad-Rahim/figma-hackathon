/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"]
    },
    env: {
        SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    }
};

export default nextConfig;
