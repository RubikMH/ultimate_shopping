module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './Components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            body: ['Shabnam'],
        },
        screens: {
            mobile: { min: ' 320px ', max: '639' },
            // => @media (min-width: 320px) { ... }
            tablet: { min: '640px', max: '1023px' },
            // => @media (min-width: 640px) { ... }

            laptop: { min: '1024px', max: '1279px' },
            // => @media (min-width: 1024px) { ... }

            desktop: { min: '1280px' },
            // => @media (min-width: 1280px) { ... }
        },
        extend: {},
    },
    plugins: [],
}