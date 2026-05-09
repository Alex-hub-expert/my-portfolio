import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'ice-wood.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prettygirlcollection.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'atoms.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sleekfits.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cognivita.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hcmore.nl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'watchsights.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'spanx.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prettygirllcollectionn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uploads.onecompiler.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
