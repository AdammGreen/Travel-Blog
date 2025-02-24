import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'travel': {
          'beige': '#F5F5DC',
          'sand': '#E8D9B5', 
          'caramel': '#C3955C',
          'espresso': '#6F4E37',
          'accent': '#FF7F50', // Coral accent for pops of color
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/travel-pattern.png')",
      },
    },
  },
  plugins: [],
}

export default config