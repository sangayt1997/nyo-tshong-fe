module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    daisyui: {
        themes: [
            {
                customTheme: {
                    "primary": "#257eea",
                    "secondary": "#67e8f9",
                    "accent": "#a3e635",
                    "neutral": "#1f2937",
                    "base-100": "#e0e1eb",
                    "info": "#1b6fe4",
                    "success": "#199f4c",
                    "warning": "#f5b770",
                    "error": "#f44d3e",
                },
            },
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
