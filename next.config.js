/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['encrypted-tbn0.gstatic.com']
    },
    env: {
        API_KEY:process.env.API_KEY,
        API_GOOGLE_KEY:process.env.API_GOOGLE_KEY,
        CONTEXT_KEY:process.env.CONTEXT_KEY,
    }
   
}

module.exports = nextConfig
