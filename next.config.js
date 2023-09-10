/** @type {import('next').NextConfig} */
const customImageLoader = ({ src, width, quality }) => {
  const domain = 'http://localhost:5000/api'; // Your domain
  return `${domain}${src}?w=${width}&q=${quality || 75}`;
};
console.log(process.env.REACT_APP_API_URL);
const nextConfig = {
    images: {
      // loader: customImageLoader(), // Use the custom loader function
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/api/**',
      },
    ],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },

}
 
module.exports = nextConfig

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  },
};
