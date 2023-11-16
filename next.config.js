/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'picsum.photos',
      'via.placeholder.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
