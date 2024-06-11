/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'aceternity.com'
            },
            {
                hostname: 'ucarecdn.com'
            },
            {
                hostname: 'img.clerk.com',
            }
        ],
    },
};

export default nextConfig;
