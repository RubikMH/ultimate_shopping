/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig

// const withImages = require('next-images')
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// const withYaml = require('next-plugin-yaml')
// const babel = require('babel-plugin-import-glob-array')

// module.exports = (phase) =>
//     withYaml(
//         withImages({
//             target: 'serverless',
//             env: {
//                 isDev: phase === PHASE_DEVELOPMENT_SERVER,
//             },
//             webpack5: true,
//             webpack: (config, options) => {
//                 config.module.rules.push({
//                     test: /\.mdx/,
//                     use: [
//                         options.defaultLoaders.babel,
//                         {
//                             loader: '@mdx-js/loader',
//                             options: babel.options,
//                         },
//                     ],
//                 })
//                 config.module.rules.unshift({
//                     test: /\.svg$/,
//                     use: ['@svgr/webpack'],
//                 })
//                 console.log(options.webpack.version) // 5.18.0
//                     // eslint-disable-next-line no-param-reassign
//                 config.experiments = {}
//                 return config
//             },
//         })
//     )
