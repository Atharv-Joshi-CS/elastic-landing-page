/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// const path = require('path');
// const withSass = require('@zeit/next-sass');

// module.exports = withSass({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: require('sass-loader'),
//           options: {
//             additionalData: `
//               @import "variables";
//               @import "mixins";
//             `,
//             sassOptions: {
//               includePaths: [path.join(__dirname, 'styles')],
//             },
//           },
//         },
//       ],
//     });

//     return config;
//   },
// });
