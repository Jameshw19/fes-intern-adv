/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    stripe_price_monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY,
    stripe_price_yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY,
  },
};

module.exports = nextConfig;
