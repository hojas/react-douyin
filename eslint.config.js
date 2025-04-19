import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    react: true,
    formatters: {
      html: true,
      css: true,
    },
  },
  ...compat.config({
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    // extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
)
