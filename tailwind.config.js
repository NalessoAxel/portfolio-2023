const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],

	theme: {
		fontFamily: {
			body: ['Satoshi-Regular', 'sans-serif'],
			title: ['ClashGrotesk-Regular', 'sans-serif'],
			numbers: ['RX100-Regular', 'sans-serif'],
		},
		colors: {
			black: '#080808',
			white: '#ffffff',
			body: '#797979',
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'translate-z': (value) => ({
						'--tw-translate-z': value,
						transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
					}),
				},
				{ values: theme('translate') },
			);
		}),
	],
};
