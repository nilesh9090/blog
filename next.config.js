/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains:[
      'cdn.pixabay.com',
      'images.unsplash.com',
      'images.pexels.com',
      'media.istockphoto.com',
      'static.vecteezy.com',
      'images.rawpixel.com'
    ]
  },
}

module.exports = nextConfig
