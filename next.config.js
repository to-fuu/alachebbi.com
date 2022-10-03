/** @type {import('next').NextConfig} */
module.exports = {

  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['www.datocms-assets.com']
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/git',
        destination: 'https://github.com/to-fuu',
        permanent: true,
      },
       {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/ala-chebbi-32266b168/',
        permanent: true,
      },
    ]
  },


  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
