module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-property-in-object',
  ],
  overrides: [
    {
      test: /\.js$/,
      plugins: [
        [
          '@babel/plugin-transform-class-properties',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
        [
          '@babel/plugin-transform-private-property-in-object',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
};
