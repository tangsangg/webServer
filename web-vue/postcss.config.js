import postcssPresetEnv from 'postcss-preset-env'

export default{
  plugins: [
    postcssPresetEnv({
      stage: 0,
      autoprefixer: { 
        overrideBrowserslist: [
          'last 2 versions'
        ],
       }
    })
  ]
}
