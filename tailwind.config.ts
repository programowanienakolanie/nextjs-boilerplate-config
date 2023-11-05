import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            height: {
                'custom-image-height': '9646px',
                'custom-hero-height': '1600px',
                'custom-component-height': '800px',
                'custom-1700-height': '1700px',
                'custom-1500-height': '1500px',
                'custom-1400-height': '1400px',
                'custom-1100-height': '1100px',
                'custom-700-height': '700px',
                'custom-550-height': '550px',
            },
            width: {
                'custom-image-width': '1176px',
            },
        },
    },
    plugins: [],
};
export default config;
