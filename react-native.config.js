module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: {
          sourceDir: '../node_modules/react-native-vector-icons/Fonts',
          assets: ['*.ttf'],
        },
      },
    },
  },
  assets: ['./assets/fonts/'],
};
