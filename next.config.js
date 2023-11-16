/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['encrypted-tbn0.gstatic.com']
    },
    env: {
        API_KEY:process.env.API_KEY
    }
   
}

module.exports = nextConfig
