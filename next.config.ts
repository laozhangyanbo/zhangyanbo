import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 禁用 TypeScript 类型检查
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
