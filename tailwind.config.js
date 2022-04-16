module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            neue: ["Neue Metana"],
        },
    },
    plugins: [require("tailwindcss-border-gradient-radius")],
};
