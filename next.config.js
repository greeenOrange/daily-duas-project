// next.config.js
const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Adds the src directory to the module search path
    const srcPath = path.join(__dirname, 'src');
    config.resolve.modules.push(srcPath);

    return config;
  },
};

module.exports = nextConfig;

