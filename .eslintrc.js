/* eslint no-undef: off -- Here's a description about why this directive-comment is necessary. */
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

const config = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    'jsx-a11y': {
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
      },
    },
  },
  rules: {
    'sort-imports': [
      0,
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/no-default-export': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
  },
};

module.exports = config;
