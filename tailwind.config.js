import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // TotalEnergies brand colors — remplace indigo partout
                indigo: {
                    50:  '#fff0f0',
                    100: '#ffe0e0',
                    200: '#ffbbbb',
                    300: '#ff8080',
                    400: '#ff4040',
                    500: '#e2001a',
                    600: '#c40016',
                    700: '#a10012',
                    800: '#80000e',
                    900: '#63000a',
                    950: '#3d0005',
                },
                primary: {
                    50:  '#fff0f0',
                    100: '#ffe0e0',
                    200: '#ffbbbb',
                    300: '#ff8080',
                    400: '#ff4040',
                    500: '#e2001a',
                    600: '#c40016',
                    700: '#a10012',
                    800: '#80000e',
                    900: '#63000a',
                    950: '#3d0005',
                },
            },
        },
    },

    plugins: [forms],
};
