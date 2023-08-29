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
    theme: {
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
              60: "var(--primary-60)",
              100: "var(--primary-100)",
              200: "var(--primary-200)",
              250: "var(--primary-250)",
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
              60: "var(--secondary-60)",
              100: "var(--secondary-100)",
              200: "var(--secondary-200)",
              250: "var(--secondary-250)",
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
        extend: {
          fontFamily: {
            poppins: ['var(--font-poppins-regular)'],
            poppins_medium: ['var(--font-poppins-medium)'],
            poppins_bold: ['var(--font-poppins-bold)'],
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
