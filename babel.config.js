module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/typings': './src/typings',
          '@/store': './src/store',
          '@/pages': './src/pages',
          '@/utils': './src/utils',
          '@/global': './src/global',
          '@/source': './src/source',
          '@/api': './src/api',
        },
        extensions: [
          '.ts',
          '.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ios.js',
          '.android.js',
        ],
      },
    ],
  ],
};
