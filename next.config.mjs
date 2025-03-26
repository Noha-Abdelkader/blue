/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/_components/*": ["_components/*"],
    },
  },
};

export default nextConfig;
