module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  rules: {
    'react/jsx-filename-extension': 0,
    semi: 0,
    'implicit-arrow-linebreak': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'no-shadow': 0,
    'arrow-parens': 'as-neeed',

    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1,
        {
            'maximum': 1
        }
    ]}
}
