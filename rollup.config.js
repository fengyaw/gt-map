import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  babel({
    exclude: 'node_modules/**'
  }),
  nodeResolve(),
  commonjs(),
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())


module.exports = {
  input: './lib/index.js',
  output: [
    {
      exports: 'auto',
      file: "dist/cjs/index.js",
      format: 'cjs'
    },
    {
      exports: 'auto',
      file: "dist/es/index.js",
      format: 'es'
    },
  ],
  plugins: plugins,
}