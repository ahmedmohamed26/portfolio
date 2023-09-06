/** @type {import('next').NextConfig} */
const nextConfig = {
      eslint: {
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [{loader:"@svgr/webpack",options:{icon:true}}]
        });
    
        return config;
      }
}

module.exports = nextConfig
