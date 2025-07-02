/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Variables CSS del sistema de diseño
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Colores principales de DevSnap
				'devsnap-primary': '#2C3E50',
				'devsnap-secondary': '#6C63FF',
				'devsnap-accent': '#E91E63',
				'devsnap-success': '#20B2AA',
				'devsnap-orange': '#FF9500',
				'devsnap-white': '#FFFFFF',
				'devsnap-gray': '#F8F9FA',
				'devsnap-dark': '#1a1a1a',
				//Colores adicionales
				brandBlue: '#48cae4',
        		brandPink: '#ec4899',
        		brandGreen: '#10b981',
				brandBlueFuerte: '#03045e',
				
				// Configuración del theme system
				primary: {
					DEFAULT: '#2C3E50',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#6C63FF',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: '#E91E63',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'network-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'25%': { transform: 'translateY(-10px) scale(1.02)' },
					'50%': { transform: 'translateY(-5px) scale(0.98)' },
					'75%': { transform: 'translateY(-15px) scale(1.01)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 10px rgba(108, 99, 255, 0.3)',
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 20px rgba(108, 99, 255, 0.5)',
					},
				},
				'float-particle': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.7',
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(180deg)',
						opacity: '1',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'network-float': 'network-float 20s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 1s ease-in-out infinite',
				'float-particle': 'float-particle 2s ease-in-out infinite',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}