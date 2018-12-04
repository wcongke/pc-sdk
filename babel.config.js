module.exports = {
  presets: [
    ['env', {
      modules: false,
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
      }
    }],
    'stage-2',
    '@vue/app'
  ],
  plugins: ['transform-runtime'],
  env: {
    test: {
      presets: ['env', 'stage-2'],
      plugins: ['istanbul']
    }
  }
}
