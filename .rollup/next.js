import babel from 'rollup-plugin-babel';

export default {
  dest: 'dist/next.js',
  entry: 'index.js',
  format: 'es6',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: false
    })
  ]
};
