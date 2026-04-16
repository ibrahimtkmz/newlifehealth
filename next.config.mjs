/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.cuhadaroglu.com"
      },
      {
        protocol: "https",
        hostname: "www.kone.com.tr"
      },
      {
        protocol: "https",
        hostname: "scontent.fist4-1.fna.fbcdn.net"
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net"
      }
    ]
  }
};

export default nextConfig;
