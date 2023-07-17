module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
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
    plugins: [require('daisyui')],
};
