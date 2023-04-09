/** @type {import('next').NextConfig} */



// const withPWA = require('next-pwa')({
//   pwa:{
//     dest: 'public',
//     disable: process.env.NODE_ENV !== "production",
//   }
// });
 
// module.exports = withPWA({
//   images:{
//     domains:["res.cloudinary.com", "www.digitalcommerce360.com"]
//   },
// });


const nextConfig = {
  images:{
    domains:["res.cloudinary.com", "www.digitalcommerce360.com"]
  }
}

module.exports = nextConfig


