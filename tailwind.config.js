function withOpacityValue(variable) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
        return `rgb(var(${variable}))`;
        }
        return `rgb(var(${variable}) / ${opacityValue})`;
    };
}
  
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      "",
    ],
    theme: {
        extend: {
          colors: {
            transparent: "transparent",
            white: withOpacityValue("--white"),
            black: withOpacityValue("--black"),
            success: withOpacityValue("--success"),
            warning: withOpacityValue("--warning"),
            danger: withOpacityValue("--danger"),
            info: withOpacityValue("--info"),
            primary: {
              50: "var(--primary-50)",
              100: "var(--primary-100)",
              200: "var(--primary-200)",
              300: "var(--primary-300)",
              400: "var(--primary-400)",
              500: "var(--primary-500)",
              600: "var(--primary-600)",
              700: "var(--primary-700)",
              800: "var(--primary-800)",
              900: "var(--primary-900)",
            },
            secondary: {
              50: "var(--secondary-50)",
              100: "var(--secondary-100)",
              200: "var(--secondary-200)",
              300: "var(--secondary-300)",
              400: "var(--secondary-400)",
              500: "var(--secondary-500)",
              600: "var(--secondary-600)",
              700: "var(--secondary-700)",
              800: "var(--secondary-800)",
              900: "var(--secondary-900)",
            },
            neutral: {
              50: "var(--neutral-50)",
              100: "var(--neutral-100)",
              200: "var(--neutral-200)",
              300: "var(--neutral-300)",
              400: "var(--neutral-400)",
              500: "var(--neutral-500)",
              600: "var(--neutral-600)",
              700: "var(--neutral-700)",
            },
          },
          fontFamily: {
            poppins: ['var(--font-poppins-regular)'],
            poppins_medium: ['var(--font-poppins-medium)'],
            poppins_bold: ['var(--font-poppins-bold)'],
          },
          boxShadow: {
            sm: 'rgba(149, 157, 165, 0.2) 0 8px 24px',
            DEFAULT: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
            md: 'rgba(99, 99, 99, 0.2) 0 2px 8px 0',
            lg: 'rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px',
            xl: 'rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px, rgba(17, 17, 26, 0.1) 0 24px 80px',
            '2xl': 'rgba(0, 0, 0, 0.2) 0 20px 30px',
            'bottom': '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
    },
    daisyui: {
        themes: [
            {
                customTheme: {
                   "primary": "#1B6FE4",
                    "secondary": "#06B6D4",
                    "accent": "#a3e635",
                    "neutral": "#1f2937",
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
