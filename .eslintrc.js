module.exports = {
  extends: 'airbnb-base',

  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 0,
  },
};
