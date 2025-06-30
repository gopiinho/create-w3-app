/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 */
export const dependencyVersionMap = {
  // TailwindCSS
  tailwindcss: "^4.0.15",
  postcss: "^8.5.3",
  "@tailwindcss/postcss": "^4.0.15",

  // Shadcn UI
  "class-variance-authority": "^0.7.1",
  clsx: "^2.1.1",
  "lucide-react": "^0.515.0",
  "tailwind-merge": "^3.3.1",
  "tw-animate-css": "^1.3.4",

  // eslint / prettier
  prettier: "^3.5.3",
  "@eslint/eslintrc": "^3.3.1",
  "prettier-plugin-tailwindcss": "^0.6.11",
  eslint: "^9.23.0",
  "eslint-config-next": "^15.2.3",
  "eslint-plugin-drizzle": "^0.2.3",
  "typescript-eslint": "^8.27.0",
  "@biomejs/biome": "^1.9.4",

  // Wallet packages
  "@privy-io/react-auth": "^2.4.14",
  "@privy-io/wagmi": "^1.0.5",
  "@rainbow-me/rainbowkit": "^2.2.6",
  "@tanstack/react-query": "^5.69.0",
  wagmi: "^2.15.6",
  viem: "^2.31.0",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;
