/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const config = {
  assetPrefix: isProd ? '/max172-hqt.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = config;