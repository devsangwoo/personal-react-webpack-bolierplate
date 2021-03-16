const path = require('path')

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  
    'plugin:prettier/recommended'
   
  ],
  "plugins": [
    "json-format"
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js')
      }
    }
  }
}
