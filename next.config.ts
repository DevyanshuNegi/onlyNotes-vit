module.exports = {
  webpack5: true,
  webpack: (config: { resolve: { fallback: { fs: boolean; }; }; }) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};