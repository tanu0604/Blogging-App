/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#6C5DD3', // Add your custom color here
              },
        // customRed: '#CC313D', // Add your custom color here
        // customLight:'#F7C5CC'      },
    },
  },
  plugins: [],
}
