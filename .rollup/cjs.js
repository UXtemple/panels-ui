import babel from 'rollup-plugin-babel';

export default {
  dest: 'dist/cjs.js',
  entry: 'index.js',
  format: 'cjs',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
