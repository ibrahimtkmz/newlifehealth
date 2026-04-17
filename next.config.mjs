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
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com"
      },
      {
        protocol: "https",
        hostname: "cdn.scope.digital"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "clinicego.com"
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
      },
      {
        protocol: "https",
        hostname: "venividigoz.com"
      },
      {
        protocol: "https",
        hostname: "i0.wp.com"
      },
      {
        protocol: "https",
        hostname: "oclinic.com.tr"
      }
    ]
  }
};

export default nextConfig;
