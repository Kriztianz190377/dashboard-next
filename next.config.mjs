/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'ccldev.com'
        }
    ]
}

};

export default nextConfig;
