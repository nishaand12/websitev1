/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.optimization.minimize = false; // Disabling minification temporarily
        return config;
    },
};

export default nextConfig;
