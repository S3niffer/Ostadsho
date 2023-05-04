/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                lightWhite: '#ffffff',
                lightSecondaryWhite: '#ededed',
                lightThirdWhite: '#f9f9f9',
                lightFourthWhite: '#f5f5f5',
                Gray: '#4b515a',
                SecondaryGray: '#cccccc',
                ThirdGray: '#69727d',
                yellowColor: '#ffc737',
                main: '#52ac66',
                darkBlack: '##101214',
                darkSecondaryBlack: '#201c1c',
                darkThirdBlack: '#1a1d1f',
                darkFourthBlack: '#2b3034'
            }
        }
        ,
        screens: {
            'vsm': '450px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        fontFamily: {
            IRANSans: 'IRANSans'
        }
    },
    theme: {
        extend: {},
    },
    plugins: [],
}

