module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        'blue-600': 'rgba(37, 99, 235, 1)',
        'coolgray-60': 'rgba(105, 112, 119, 1)',
        'defaultwhite': 'rgba(255, 255, 255, 1)',
        'fb-error-1': 'rgba(252, 95, 98, 1)',
        'fb-error-2': 'rgba(226, 55, 59, 1)',
        'fb-error-3': 'rgba(252, 93, 96, 1)',
        'fb-error-4': 'rgba(253, 129, 130, 1)',
        'fb-info-1': 'rgba(18, 104, 243, 1)',
        'fb-info-2': 'rgba(12, 83, 193, 1)',
        'fb-info-3': 'rgba(94, 143, 236, 1)',
        'fb-info-4': 'rgba(158, 192, 247, 1)',
        'fb-primary': 'rgba(91, 142, 199, 1)',
        'fb-secondary': 'rgba(254, 214, 76, 1)',
        'fb-subtle': 'rgba(242, 248, 255, 1)',
        'fb-success': 'rgba(32, 193, 115, 1)',
        'fb-success-2': 'rgba(26, 165, 98, 1)',
        'fb-success-3': 'rgba(67, 216, 140, 1)',
        'fb-success-4': 'rgba(94, 234, 163, 1)',
        'fb-warning-1': 'rgba(254, 229, 135, 1)',
        'fb-warning-2': 'rgba(228, 183, 41, 1)',
        'fb-warning-3': 'rgba(252, 220, 86, 1)',
        'fb-warning-4': 'rgba(252, 236, 122, 1)',
        'primary-dark': 'rgba(69, 114, 163, 1)',
        'primary-light': 'rgba(242, 248, 255, 1)',
        'white': 'rgba(255, 255, 255, 1)',
        'wireframe-g': 'rgba(57, 57, 57, 1)',
        'table-header': 'rgba(15, 20, 25, 1)',
        'activeBg': 'rgba(205, 255, 205, 1)',
        'activeText': 'rgba(0, 127, 0, 1)',
        'closedBg': 'rgba(225, 225, 225, 1)',
        'closedText': 'rgba(93, 93, 93, 1)',
        'tableBorder': 'rgba(205, 205, 205, 1)',
        'lineBorder': 'rgba(213, 213, 213, 1)',
        'custom-finance': '#598dc9',
        'custom-buddha': '#50c5e8',
      },
      letterSpacing: {
        'body-XS': '0px',
        'button-m': '0.5px',
      },
      padding: {
        'custom-padding': '12px', //not for pdf
        'custom-pt': '5px',  //not for pdf
      },
      borderWidth: {
        '0.56': '0.56px',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'Helvetica'],
        'arista': ['"Arista Pro Trial"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}