/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/products/**',
            },
            {
                protocol: 'https',
                hostname: 'random.imagecdn.app',
                port: '',
//                pathname: '/data/products/**',
            },
        ],
    },
}

module.exports = nextConfig
