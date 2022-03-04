const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/layouts': path.resolve(__dirname, '../layouts'),
      '@/pages': path.resolve(__dirname, '../pages'),
      '@/helpers': path.resolve(__dirname, '../helpers'),
      '@/styles': path.resolve(__dirname, '../styles'),
      '/icons': path.resolve(__dirname, '../public/icons'),
    };
    return config;
  },
};
