module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'lato': ['lato']
            },
            animation: {
                fadeLeft: 'fadeLeft 1s ease-out',
                fadeRight: 'fadeRight 1s ease-out',
            },
            keyframes: {
                fadeRight: {
                    '0%': {opacity: '0', transform: 'translateX(-100px)'},
                    '80%': {transform: 'translateX(20px)'},
                    '100%': {opacity: '1', transform: 'translate(0)'},
                },
                fadeLeft:{
                    '0%': {opacity: '0', transform: 'translateX(100px)'},
                    '80%': {transform: 'translateX(-20px)'},
                    '100%': {opacity: '1', transform: 'translate(0)'},
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
