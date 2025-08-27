/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem', // 18px for picklist gap
      },
      colors: {
        // Primary Colors - Teal
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        // Surface Colors
        surface: {
          50: 'rgb(var(--color-surface-50) / <alpha-value>)',
          100: 'rgb(var(--color-surface-100) / <alpha-value>)',
          200: 'rgb(var(--color-surface-200) / <alpha-value>)',
          300: 'rgb(var(--color-surface-300) / <alpha-value>)',
          400: 'rgb(var(--color-surface-400) / <alpha-value>)',
          500: 'rgb(var(--color-surface-500) / <alpha-value>)',
          600: 'rgb(var(--color-surface-600) / <alpha-value>)',
          700: 'rgb(var(--color-surface-700) / <alpha-value>)',
          800: 'rgb(var(--color-surface-800) / <alpha-value>)',
          900: 'rgb(var(--color-surface-900) / <alpha-value>)',
        },
        // Navy Colors
        navy: {
          50: 'rgb(var(--color-navy-50) / <alpha-value>)',
          100: 'rgb(var(--color-navy-100) / <alpha-value>)',
          200: 'rgb(var(--color-navy-200) / <alpha-value>)',
          300: 'rgb(var(--color-navy-300) / <alpha-value>)',
          400: 'rgb(var(--color-navy-400) / <alpha-value>)',
          500: 'rgb(var(--color-navy-500) / <alpha-value>)',
          600: 'rgb(var(--color-navy-600) / <alpha-value>)',
          700: 'rgb(var(--color-navy-700) / <alpha-value>)',
          800: 'rgb(var(--color-navy-800) / <alpha-value>)',
          900: 'rgb(var(--color-navy-900) / <alpha-value>)',
        },
        // System Colors
        yellow: {
          50: '#FFFCE7',
          100: '#FEF5B3',
          200: '#FDF08F',
          300: '#FCE95C',
          400: '#FCE53C',
          500: '#FBDE0B',
          600: '#E4CA0A',
          700: '#717509',
          800: '#695D05',
          900: '#514908',
        },
        blue: {
          50: '#F5F9FF',
          100: '#D0E1FD',
          200: '#ABC9FB',
          300: '#85B2F9',
          400: '#609AF8',
          500: '#3B82F6',
          600: '#326FD1',
          700: '#295BAC',
          800: '#204887',
          900: '#183462',
        },
        green: {
          50: '#EDF8EA',
          100: '#C8E8C3',
          200: '#9BD491',
          300: '#6FB864',
          400: '#4B9C3E',
          500: '#1E830E',
          600: '#1A760B',
          700: '#155D0A',
          800: '#174510',
          900: '#11340B',
        },
        red: {
          50: '#FFF5F5',
          100: '#FFE0DF',
          200: '#FFB8B3',
          300: '#FF867F',
          400: '#FF5A4E',
          500: '#EB1000',
          600: '#D60F00',
          700: '#C00B14',
          800: '#990D03',
          900: '#630700',
        }
      },
      fontSize: {
        // Heading Sizes
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['38px', { lineHeight: '1.2', fontWeight: '700' }], 
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '1.2', fontWeight: '700' }],
        'h5': ['12px', { lineHeight: '1.2', fontWeight: '700' }],
        'h6': ['10px', { lineHeight: '1.2', fontWeight: '700' }],
        
        // Body Sizes
        'body-large-bold': ['18px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-large-semibold': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-large-regular': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        
        'body-normal-bold': ['15px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-normal-semibold': ['15px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-normal-regular': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        
        'body-small-bold': ['12px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-small-semibold': ['12px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-small-regular': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        
        'body-xsmall-bold': ['10px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-xsmall-semibold': ['10px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xsmall-regular': ['10px', { lineHeight: '1.5', fontWeight: '400' }],
        
        'body-copy-large': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-copy-medium': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary Colors - Teal
        primary: {
          50: '#EAF6F7',
          100: '#D1EDEF', 
          200: '#ADDDE0',
          300: '#8BD2D7',
          400: '#6BC2C8',
          500: '#32A4AC',
          600: '#138890',
          700: '#047880',
          800: '#186368',
          900: '#18474A',
        },
        // Secondary Colors - Surface (Grays)
        surface: {
          50: '#FFFFFF',
          100: '#FCFCFC',
          200: '#F7F7F7',
          300: '#F4F4F5',
          400: '#EDEDED',
          500: '#E4E4E4',
          600: '#CFCFCF',
          700: '#A2A2A2',
          800: '#7D7D7D',
          900: '#606060',
        },
        // Secondary Colors - Navy
        navy: {
          50: '#EAEBEC',
          100: '#CBCED1',
          200: '#9DA2A6',
          300: '#70777D',
          400: '#555D64',
          500: '#2A343D',
          600: '#262F38',
          700: '#1E252B',
          800: '#171D22',
          900: '#12161A',
        },
        // System Colors - Yellow (Warning)
        yellow: {
          50: '#FFFCE7',
          100: '#FEF5B3',
          200: '#FDF08F',
          300: '#FCE95C',
          400: '#FCE53C',
          500: '#FBDE0B',
          600: '#E4CA0A',
          700: '#717509',
          800: '#695D05',
          900: '#514908',
        },
        // System Colors - Blue (Information)
        blue: {
          50: '#F5F9FF',
          100: '#D0E1FD',
          200: '#ABC9FB',
          300: '#85B2F9',
          400: '#609AF8',
          500: '#3B82F6',
          600: '#326FD1',
          700: '#295BAC',
          800: '#204887',
          900: '#183462',
        },
        // System Colors - Green (Success)
        green: {
          50: '#EDF8EA',
          100: '#C8E8C3',
          200: '#9BD491',
          300: '#6FB864',
          400: '#4B9C3E',
          500: '#1E830E',
          600: '#1A760B',
          700: '#155D0A',
          800: '#174510',
          900: '#11340B',
        },
        // System Colors - Red (Error)
        red: {
          50: '#FFF5F5',
          100: '#FFE0DF',
          200: '#FFB8B3',
          300: '#FF867F',
          400: '#FF5A4E',
          500: '#EB1000',
          600: '#D60F00',
          700: '#C00B14',
          800: '#990D03',
          900: '#630700',
        },
        // Aliases for easier use
        teal: {
          50: '#EAF6F7',
          100: '#D1EDEF', 
          200: '#ADDDE0',
          300: '#8BD2D7',
          400: '#6BC2C8',
          500: '#32A4AC',
          600: '#138890',
          700: '#047880',
          800: '#186368',
          900: '#18474A',
        }
      },
      fontSize: {
        // Heading Sizes
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['38px', { lineHeight: '1.2', fontWeight: '700' }], 
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '1.2', fontWeight: '700' }],
        'h5': ['12px', { lineHeight: '1.2', fontWeight: '700' }],
        'h6': ['10px', { lineHeight: '1.2', fontWeight: '700' }],
        // Body Sizes
        'body-large-bold': ['18px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-large-semibold': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-large-regular': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-normal-bold': ['15px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-normal-semibold': ['15px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-normal-regular': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-small-bold': ['12px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-small-semibold': ['12px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-small-regular': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xsmall-bold': ['10px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-xsmall-semibold': ['10px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xsmall-regular': ['10px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-copy-large': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-copy-medium': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        // 8px base spacing system
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },
      maxWidth: {
        'xs': '20rem',    // 320px
        'sm': '24rem',    // 384px
        'md': '28rem',    // 448px
        'lg': '32rem',    // 512px
        'xl': '36rem',    // 576px
        '2xl': '42rem',   // 672px
        '3xl': '48rem',   // 768px
        '4xl': '56rem',   // 896px
        '5xl': '64rem',   // 1024px
        '6xl': '72rem',   // 1152px
        '7xl': '80rem',   // 1280px
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        // Elevation shadows
        'depth-1': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'depth-2': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'depth-3': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'depth-4': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        // Existing shadows mapped to depth system
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'none': 'none',
      },
      backdropBlur: {
        'button': '30px',
        'scrim': '2px',
      },
      backgroundColor: {
        'scrim': 'rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Button Component Styles
      components: {
        // Checkbox Component Styles
        '.checkbox-input': {
          '@apply appearance-none border-2 border-surface-300 rounded bg-white transition-all duration-200 cursor-pointer': {},
        },
        '.checkbox-input:checked': {
          '@apply bg-primary-500 border-primary-500': {},
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
          'background-size': '100% 100% !important',
          'background-position': 'center !important',
          'background-repeat': 'no-repeat !important',
        },
        '.checkbox-input.checkbox-invalid': {
          '@apply border-red-500': {},
        },
        '.checkbox-input.checkbox-invalid:checked': {
          '@apply bg-red-500 border-red-500': {},
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
          'background-size': '100% 100% !important',
          'background-position': 'center !important',
          'background-repeat': 'no-repeat !important',
        },
        '.checkbox-input:focus': {
          '@apply ring-2 ring-teal-500 ring-offset-2 ring-offset-white focus:rounded': {},
        },
        '.checkbox-input:disabled': {
          '@apply border-surface-300 bg-surface-100 cursor-not-allowed': {},
        },
        '.checkbox-input:disabled:checked': {
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
          'background-size': '100% 100% !important',
          'background-position': 'center !important',
          'background-repeat': 'no-repeat !important',
        },
        '.checkbox-small': {
          '@apply w-4 h-4': {},
        },
        '.checkbox-medium': {
          '@apply w-5 h-5': {},
        },
        '.checkbox-large': {
          '@apply w-6 h-6': {},
        },
        // DatePicker Component Styles
        '.datepicker-container': {
          '@apply relative inline-flex items-center border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm': {},
        },
        '.datepicker-container:focus-within': {
          '@apply border-teal-500 ring-2 ring-teal-500 ring-opacity-20': {},
        },
        '.datepicker-container.datepicker-disabled': {
          '@apply bg-surface-100 opacity-60': {},
        },
        '.datepicker-input': {
          '@apply flex-1 px-3 py-2 text-sm text-surface-900 placeholder-surface-400 bg-transparent border-none outline-none': {},
        },
        '.datepicker-input:disabled': {
          '@apply text-surface-400 cursor-not-allowed': {},
        },
        '.datepicker-trigger': {
          '@apply flex items-center justify-center px-3 py-2 border-l border-surface-300 bg-surface-50 text-surface-500 cursor-pointer transition-colors': {},
        },
        '.datepicker-trigger:hover': {
          '@apply bg-surface-100 text-surface-700': {},
        },
        '.datepicker-trigger.datepicker-disabled': {
          '@apply bg-surface-200 text-surface-400 cursor-not-allowed': {},
        },
        '.datepicker-calendar': {
          '@apply absolute top-full left-0 mt-1 bg-white border border-surface-200 rounded-md shadow-lg z-50 p-3': {},
        },
        '.datepicker-header': {
          '@apply flex items-center justify-between mb-3': {},
        },
        '.datepicker-nav-btn': {
          '@apply p-1 hover:bg-surface-100 rounded transition-colors text-surface-600 hover:text-surface-900': {},
        },
        '.datepicker-month-year': {
          '@apply text-sm font-semibold text-surface-900': {},
        },
        '.datepicker-weekdays': {
          '@apply grid grid-cols-7 gap-1 mb-1': {},
        },
        '.datepicker-weekday': {
          '@apply text-center text-xs font-medium text-surface-500 py-1': {},
        },
        '.datepicker-days': {
          '@apply grid grid-cols-7 gap-1': {},
        },
        '.datepicker-day': {
          '@apply w-7 h-7 flex items-center justify-center text-xs transition-colors rounded cursor-pointer': {},
        },
        '.datepicker-day:hover': {
          '@apply bg-surface-100': {},
        },
        '.datepicker-day.datepicker-day-today': {
          '@apply bg-teal-50 text-teal-700 font-medium border border-teal-200': {},
        },
        '.datepicker-day.datepicker-day-selected': {
          '@apply bg-teal-500 text-white hover:bg-teal-600 font-medium': {},
        },
        '.datepicker-day:disabled': {
          '@apply text-surface-300 cursor-not-allowed hover:bg-transparent': {},
        },
        '.datepicker-day.datepicker-day-outside': {
          '@apply text-surface-300': {},
        },
        // InputText Component Styles
        '.input-group': {
          '@apply space-y-2': {},
        },
        '.input-label': {
          '@apply block text-sm font-medium text-surface-700': {},
        },
        '.input-label-error': {
          '@apply text-red-700': {},
        },
        '.input-text': {
          '@apply w-full px-3 py-2 border border-surface-300 rounded-md text-sm text-surface-900 placeholder-surface-400 bg-white transition-colors duration-200': {},
        },
        '.input-text:focus': {
          '@apply outline-none ring-2 ring-teal-500 ring-opacity-20 border-teal-500': {},
        },
        '.input-text:hover:not(:disabled)': {
          '@apply border-surface-400': {},
        },
        '.input-text:disabled': {
          '@apply bg-surface-100 text-surface-400 cursor-not-allowed border-surface-300': {},
        },
        '.input-text-error': {
          '@apply border-red-500 text-surface-900': {},
        },
        '.input-text-error:focus': {
          '@apply ring-red-500 border-red-500': {},
        },
        '.input-text-small': {
          '@apply px-2 py-1.5 text-xs': {},
        },
        '.input-text-medium': {
          '@apply px-3 py-2 text-sm': {},
        },
        '.input-text-large': {
          '@apply px-4 py-3 text-base': {},
        },
        '.input-text-disabled': {
          '@apply bg-surface-100 text-surface-400 cursor-not-allowed': {},
        },
        '.input-helper': {
          '@apply text-xs text-surface-500': {},
        },
        '.input-error': {
          '@apply text-xs text-red-500': {},
        },
        // ListBox Component Styles
        '.listbox-container': {
          '@apply border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm max-h-48': {},
        },
        '.listbox-container.listbox-focus': {
          '@apply border-teal-500 ring-2 ring-teal-500 ring-opacity-20': {},
        },
        '.listbox-container.listbox-disabled': {
          '@apply bg-surface-100 opacity-60': {},
        },
        '.listbox-search': {
          '@apply p-2 border-b border-surface-200 bg-surface-50': {},
        },
        '.listbox-list': {
          '@apply overflow-y-auto max-h-40': {},
        },
        '.listbox-item': {
          '@apply flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer': {},
        },
        '.listbox-item.listbox-item-focused': {
          '@apply bg-teal-50 border-l-2 border-teal-500': {},
        },
        '.listbox-checkbox': {
          '@apply w-4 h-4 text-teal-500 border-surface-300 rounded focus:ring-teal-500 focus:ring-2 mr-3': {},
        },
        '.listbox-checkbox:checked': {
          '@apply bg-teal-500 border-teal-500': {},
        },
        '.listbox-checkbox:disabled': {
          '@apply opacity-50 cursor-not-allowed': {},
        },
        '.listbox-label': {
          '@apply text-sm text-surface-700 cursor-pointer select-none flex-1': {},
        },
        '.listbox-label-disabled': {
          '@apply text-surface-400 cursor-not-allowed': {},
        },
        '.listbox-group-header': {
          '@apply px-3 py-2 text-xs font-semibold text-surface-500 uppercase tracking-wide bg-surface-100 border-b border-surface-200': {},
        },
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        // Button Component Styles
        '.btn': {
          'border-radius': '30px',
          'font-weight': '600',
          'transition': 'all 0.2s ease',
          'outline': 'none',
          'position': 'relative',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'gap': '0.5rem',
        },
        '.btn:focus': {
          'box-shadow': '0 0 0 2px rgba(15, 118, 110, 0.5), 0 0 0 4px rgba(15, 118, 110, 0.2)',
        },
        '.btn-primary': {
          'background-color': '#047880',
          'color': '#ffffff',
        },
        '.btn-primary:hover': {
          'background-color': '#186368',
          'box-shadow': '0 0 0 4px rgba(234, 246, 247, 0.8)',
        },
        '.btn-primary:focus': {
          'background-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.5), 0 0 0 4px rgba(4, 120, 128, 0.2)',
        },
        '.btn-secondary': {
          'background-color': '#EAF6F7',
          'border': '1px solid #D1EDEF',
          'color': '#047880',
        },
        '.btn-secondary:hover': {
          'background-color': '#D1EDEF',
          'box-shadow': '0 0 0 4px rgba(234, 246, 247, 0.8)',
        },
        '.btn-secondary:focus': {
          'background-color': '#EAF6F7',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.5), 0 0 0 4px rgba(4, 120, 128, 0.2)',
        },
        '.btn-plain': {
          'background-color': 'transparent',
          'color': '#047880',
        },
        '.btn-plain:hover': {
          'background-color': '#EAF6F7',
          'box-shadow': '0 0 0 4px rgba(234, 246, 247, 0.8)',
        },
        '.btn-plain:focus': {
          'background-color': 'transparent',
          'box-shadow': '0 0 0 2px rgba(234, 246, 247, 0.5), 0 0 0 4px rgba(234, 246, 247, 0.2)',
        },
        '.btn-danger': {
          'background-color': '#EB1000',
          'color': '#ffffff',
        },
        '.btn-danger:hover': {
          'background-color': '#D60F00',
          'box-shadow': '0 0 0 4px rgba(255, 245, 245, 0.8)',
        },
        '.btn-danger:focus': {
          'background-color': '#EB1000',
          'box-shadow': '0 0 0 2px rgba(235, 16, 0, 0.5), 0 0 0 4px rgba(235, 16, 0, 0.2)',
        },
        '.btn-disabled': {
          'background-color': '#F4F4F5',
          'color': '#A2A2A2',
          'cursor': 'not-allowed',
          'opacity': '1',
        },
        '.btn-disabled:hover': {
          'background-color': '#F4F4F5',
          'box-shadow': 'none',
        },
        '.btn-disabled:focus': {
          'background-color': '#F4F4F5',
          'box-shadow': 'none',
        },
        '.btn-large': {
          'padding': '12px 24px',
          'font-size': '16px',
          'line-height': '1.5',
        },
        '.btn-medium': {
          'padding': '10px 20px',
          'font-size': '14px',
          'line-height': '1.5',
        },
        '.btn-small': {
          'padding': '8px 16px',
          'font-size': '12px',
          'line-height': '1.5',
        },
        '.btn-xsmall': {
          'padding': '6px 12px',
          'font-size': '10px',
          'line-height': '1.5',
        },
        '.btn-icon-only': {
          'border-radius': '50%',
          'aspect-ratio': '1',
        },
        '.btn-icon-only-large': {
          'width': '48px',
          'height': '48px',
          'padding': '0',
        },
        '.btn-icon-only-medium': {
          'width': '40px',
          'height': '40px',
          'padding': '0',
        },
        '.btn-icon-only-small': {
          'width': '32px',
          'height': '32px',
          'padding': '0',
        },
        '.btn-icon-only-xsmall': {
          'width': '24px',
          'height': '24px',
          'padding': '0',
        },
        '.split-button': {
          'display': 'inline-flex',
          'border-radius': '30px',
          'overflow': 'hidden',
        },
        '.split-button-main': {
          'background-color': '#047880',
          'color': '#ffffff',
          'padding': '10px 20px',
          'font-size': '14px',
          'font-weight': '600',
          'border': 'none',
          'cursor': 'pointer',
          'transition': 'all 0.2s ease',
        },
        '.split-button-main:hover': {
          'background-color': '#186368',
        },
        '.split-button-dropdown-trigger': {
          'background-color': '#047880',
          'color': '#ffffff',
          'padding': '10px 12px',
          'border': 'none',
          'border-left': '1px solid rgba(255, 255, 255, 0.2)',
          'cursor': 'pointer',
          'transition': 'all 0.2s ease',
        },
        '.split-button-dropdown-trigger:hover': {
          'background-color': '#186368',
        },
        '.split-button-dropdown-panel': {
          'position': 'absolute',
          'top': '100%',
          'right': '0',
          'margin-top': '0.5rem',
          'background-color': '#ffffff',
          'border': '1px solid #e2e8f0',
          'border-radius': '8px',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'z-index': '50',
          'min-width': '12rem',
        },
        '.split-button-option': {
          'display': 'block',
          'width': '100%',
          'text-align': 'left',
          'padding': '8px 16px',
          'color': '#334155',
          'background': 'none',
          'border': 'none',
          'cursor': 'pointer',
          'transition': 'background-color 0.2s',
          'font-size': '14px',
        },
        '.split-button-option:hover': {
          'background-color': '#f8fafc',
        },
        '.split-button-option:first-child': {
          'border-top-left-radius': '8px',
          'border-top-right-radius': '8px',
        },
        '.split-button-option:last-child': {
          'border-bottom-left-radius': '8px',
          'border-bottom-right-radius': '8px',
        },
        '.checkbox-input': {
          'appearance': 'none',
          'border': '2px solid #cbd5e1',
          'border-radius': '0.25rem',
          'background-color': '#ffffff',
          'transition': 'all 0.2s',
          'cursor': 'pointer',
        },
        '.checkbox-input:checked': {
          'background-color': '#32A4AC !important',
          'border-color': '#32A4AC !important',
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
          'background-size': '100% 100% !important',
          'background-position': 'center !important',
          'background-repeat': 'no-repeat !important',
        },
        '.checkbox-input.checkbox-invalid': {
          'border-color': '#EB1000',
        },
        '.checkbox-input.checkbox-invalid:checked': {
          'background-color': '#EB1000 !important',
          'border-color': '#EB1000 !important',
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
          'background-size': '100% 100% !important',
          'background-position': 'center !important',
          'background-repeat': 'no-repeat !important',
        },
        '.checkbox-input:focus': {
          'outline': 'none',
          'box-shadow': '0 0 0 2px #32A4AC, 0 0 0 4px rgba(50, 164, 172, 0.2)',
        },
        '.checkbox-input:disabled': {
          'border-color': '#F4F4F5',
          'background-color': '#FCFCFC',
          'cursor': 'not-allowed',
          'opacity': '0.6',
        },
        '.checkbox-input:disabled:checked': {
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") !important`,
        },
        '.checkbox-small': {
          'width': '1rem',
          'height': '1rem',
        },
        '.checkbox-medium': {
          'width': '1.25rem',
          'height': '1.25rem',
        },
        '.checkbox-large': {
          'width': '1.5rem',
          'height': '1.5rem',
        },
        // DatePicker Component Styles
        '.datepicker-container': {
          'display': 'inline-flex',
          'align-items': 'center',
          'border': '1px solid #cbd5e1',
          'border-radius': '0.375rem',
          'background-color': '#ffffff',
          'overflow': 'hidden',
          'box-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'width': '10rem',
          'position': 'relative',
        },
        '.datepicker-container.datepicker-focus': {
          'border-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.2)',
        },
        '.datepicker-container.datepicker-disabled': {
          'background-color': '#FCFCFC',
          'opacity': '0.6',
        },
        '.datepicker-input': {
          'flex': '1',
          'padding': '0.5rem 2.5rem 0.5rem 0.75rem',
          'font-size': '0.875rem',
          'color': '#12161A',
          'background-color': 'transparent',
          'border': 'none',
          'outline': 'none',
        },
        '.datepicker-input::placeholder': {
          'color': '#9DA2A6',
        },
        '.datepicker-input:disabled': {
          'color': '#9DA2A6',
          'cursor': 'not-allowed',
        },
        '.datepicker-trigger': {
          'position': 'absolute',
          'right': '0',
          'top': '0',
          'bottom': '0',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'width': '2.5rem',
          'color': '#70777D',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.datepicker-trigger:hover': {
          'color': '#1E252B',
        },
        '.datepicker-trigger.datepicker-trigger-disabled': {
          'color': '#9DA2A6',
          'cursor': 'not-allowed',
        },
        '.datepicker-calendar': {
          'position': 'absolute',
          'top': '100%',
          'left': '0',
          'margin-top': '0.25rem',
          'background-color': '#ffffff',
          'border': '1px solid #F7F7F7',
          'border-radius': '0.375rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'z-index': '50',
          'padding': '0.75rem',
          'width': '16rem',
        },
        '.datepicker-header': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          'margin-bottom': '0.75rem',
        },
        '.datepicker-nav-btn': {
          'padding': '0.25rem',
          'border-radius': '0.25rem',
          'transition': 'all 0.2s',
          'color': '#70777D',
          'background': 'none',
          'border': 'none',
          'cursor': 'pointer',
        },
        '.datepicker-nav-btn:hover': {
          'background-color': '#FFFFFF',
          'color': '#12161A',
        },
        '.datepicker-month-year': {
          'font-size': '0.875rem',
          'font-weight': '600',
          'color': '#12161A',
        },
        '.datepicker-weekdays': {
          'display': 'grid',
          'grid-template-columns': 'repeat(7, 1fr)',
          'gap': '0.25rem',
          'margin-bottom': '0.25rem',
        },
        '.datepicker-weekday': {
          'text-align': 'center',
          'font-size': '0.75rem',
          'font-weight': '500',
          'color': '#70777D',
          'padding': '0.25rem',
        },
        '.datepicker-days': {
          'display': 'grid',
          'grid-template-columns': 'repeat(7, 1fr)',
          'gap': '0.25rem',
        },
        '.datepicker-day-cell': {
          'width': '1.75rem',
          'height': '1.75rem',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.datepicker-day': {
          'width': '100%',
          'height': '100%',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-size': '0.75rem',
          'transition': 'all 0.2s',
          'border-radius': '0.25rem',
          'cursor': 'pointer',
          'background': 'none',
          'border': 'none',
          'color': '#12161A',
        },
        '.datepicker-day:hover': {
          'background-color': '#FFFFFF',
        },
        '.datepicker-day.datepicker-day-today': {
          'background-color': '#EAF6F7',
          'color': '#047880',
          'font-weight': '500',
          'border': '1px solid #D1EDEF',
        },
        '.datepicker-day.datepicker-day-selected': {
          'background-color': '#047880 !important',
          'color': '#ffffff !important',
          'font-weight': '500',
        },
        '.datepicker-day.datepicker-day-selected:hover': {
          'background-color': '#186368 !important',
        },
        '.datepicker-day:disabled': {
          'color': '#F4F4F5',
          'cursor': 'not-allowed',
        },
        '.datepicker-day:disabled:hover': {
          'background-color': 'transparent',
        },
        // Month Picker Styles
        '.datepicker-month-picker': {
          'background-color': '#ffffff',
          'border': '1px solid #F7F7F7',
          'border-radius': '0.375rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'padding': '0.75rem',
          'width': '16rem',
        },
        '.datepicker-month-grid': {
          'display': 'grid',
          'grid-template-columns': 'repeat(3, 1fr)',
          'gap': '0.5rem',
        },
        '.datepicker-month-item': {
          'padding': '0.5rem',
          'text-align': 'center',
          'font-size': '0.875rem',
          'border-radius': '0.25rem',
          'cursor': 'pointer',
          'background': 'none',
          'border': 'none',
          'color': '#12161A',
          'transition': 'all 0.2s',
        },
        '.datepicker-month-item:hover': {
          'background-color': '#FFFFFF',
        },
        '.datepicker-month-item.datepicker-month-selected': {
          'background-color': '#047880',
          'color': '#ffffff',
          'font-weight': '500',
        },
        // Month Picker Inline Styles (for calendar view switching)
        '.datepicker-month-picker-inline': {
          'padding': '0.75rem',
        },
        '.datepicker-month-picker-inline .datepicker-month-grid': {
          'display': 'grid',
          'grid-template-columns': 'repeat(3, 1fr)',
          'gap': '0.5rem',
        },
        // Year Picker Styles
        '.datepicker-year-picker': {
          'background-color': '#ffffff',
          'border': '1px solid #F7F7F7',
          'border-radius': '0.375rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'padding': '0.75rem',
          'width': '16rem',
        },
        '.datepicker-year-grid': {
          'display': 'grid',
          'grid-template-columns': 'repeat(3, 1fr)',
          'gap': '0.5rem',
        },
        '.datepicker-year-item': {
          'padding': '0.5rem',
          'text-align': 'center',
          'font-size': '0.875rem',
          'border-radius': '0.25rem',
          'cursor': 'pointer',
          'background': 'none',
          'border': 'none',
          'color': '#12161A',
          'transition': 'all 0.2s',
        },
        '.datepicker-year-item:hover': {
          'background-color': '#FFFFFF',
        },
        '.datepicker-year-item.datepicker-year-selected': {
          'background-color': '#047880',
          'color': '#ffffff',
          'font-weight': '500',
        },
        // Year Picker Inline Styles (for calendar view switching)
        '.datepicker-year-picker-inline': {
          'padding': '0.75rem',
        },
        '.datepicker-year-picker-inline .datepicker-year-grid': {
          'display': 'grid',
          'grid-template-columns': 'repeat(3, 1fr)',
          'gap': '0.5rem',
        },
        // DatePicker Footer Styles
        '.datepicker-footer': {
          'display': 'flex',
          'justify-content': 'space-between',
          'margin-top': '0.75rem',
          'padding-top': '0.75rem',
          'border-top': '1px solid #e2e8f0',
        },
        '.datepicker-button': {
          'padding': '0.5rem 1rem',
          'background-color': '#0f766e',
          'color': '#ffffff',
          'border': 'none',
          'border-radius': '0.375rem',
          'font-size': '0.875rem',
          'font-weight': '500',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.datepicker-button:hover': {
          'background-color': '#115e59',
        },
        // Footer Button Styles
        '.datepicker-footer-link-button': {
          'display': 'flex',
          'align-items': 'center',
          'padding': '0.5rem 0',
          'background': 'none',
          'border': 'none',
          'color': '#047880',
          'font-size': '0.625rem',
          'font-weight': '600',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.datepicker-footer-link-button:hover': {
          'color': '#186368',
        },
        '.datepicker-footer-primary-button': {
          'display': 'flex',
          'align-items': 'center',
          'padding': '0.375rem 0.75rem',
          'background-color': '#047880',
          'color': '#ffffff',
          'border': 'none',
          'border-radius': '9999px',
          'font-size': '0.625rem',
          'font-weight': '600',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.datepicker-footer-primary-button:hover': {
          'background-color': '#186368',
        },
        // DataTable Component Styles
        '.datatable-container': {
          'border': '1px solid #e2e8f0',
          'border-radius': '0.5rem',
          'background-color': '#ffffff',
          'overflow': 'visible',
          'box-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
        '.datatable-header': {
          'display': 'flex',
          'background-color': '#f8fafc',
          'border-bottom': '1px solid #e2e8f0',
        },
        '.datatable-header-cell': {
          'flex': '1',
          'padding': '1rem',
          'font-size': '0.875rem',
          'font-weight': '600',
          'color': '#334155',
          'border-right': '1px solid #e2e8f0',
          'position': 'relative',
        },
        '.datatable-header-cell:last-child': {
          'border-right': 'none',
        },
        '.datatable-header-cell-checkbox': {
          'flex': '0 0 auto',
          'width': '3rem',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.datatable-header-cell-sortable': {
          'cursor': 'pointer',
          'user-select': 'none',
        },
        '.datatable-header-cell-sortable:hover': {
          'background-color': '#f1f5f9',
        },
        '.datatable-header-cell-sorted': {
          'background-color': '#f0fdfa',
          'color': '#0f766e',
        },
        '.datatable-header-content': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
        },
        '.datatable-header-label': {
          'flex': '1',
        },
        '.datatable-header-actions': {
          'display': 'flex',
          'align-items': 'center',
          'gap': '0.5rem',
        },
        '.datatable-sort-button': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'width': '1.5rem',
          'height': '1.5rem',
          'border': 'none',
          'background': 'none',
          'cursor': 'pointer',
          'border-radius': '0.25rem',
          'transition': 'all 0.2s',
        },
        '.datatable-sort-button:hover': {
          'background-color': '#e2e8f0',
        },
        '.datatable-sort-icon': {
          'width': '1rem',
          'height': '1rem',
          'color': '#64748b',
        },
        '.datatable-sort-icon-default': {
          'width': '1rem',
          'height': '1rem',
          'background-color': '#cbd5e1',
          'mask': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4\'/%3E%3C/svg%3E")',
        },
        '.datatable-sort-icon-active': {
          'color': '#0f766e',
        },
        '.datatable-filter-button': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'width': '1.5rem',
          'height': '1.5rem',
          'border': 'none',
          'background': 'none',
          'cursor': 'pointer',
          'border-radius': '0.25rem',
          'transition': 'all 0.2s',
        },
        '.datatable-filter-button:hover': {
          'background-color': '#e2e8f0',
        },
        '.datatable-filter-button-active': {
          'background-color': '#0f766e',
          'color': '#ffffff',
        },
        '.datatable-filter-button-active:hover': {
          'background-color': '#115e59',
        },
        '.datatable-filter-icon': {
          'width': '0.875rem',
          'height': '0.875rem',
          'color': 'currentColor',
        },
        '.datatable-filter-popover': {
          'position': 'absolute',
          'top': '100%',
          'right': '0',
          'margin-top': '0.5rem',
          'background-color': '#ffffff',
          'border': '1px solid #e2e8f0',
          'border-radius': '0.5rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'z-index': '50',
          'width': '20rem',
          'max-width': '90vw',
        },
        '.datatable-filter-popover-header': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
          'padding': '1rem',
          'border-bottom': '1px solid #e2e8f0',
        },
        '.datatable-filter-popover-title': {
          'font-size': '0.875rem',
          'font-weight': '600',
          'color': '#1e293b',
        },
        '.datatable-filter-popover-close': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'width': '1.5rem',
          'height': '1.5rem',
          'border': 'none',
          'background': 'none',
          'cursor': 'pointer',
          'border-radius': '0.25rem',
          'color': '#64748b',
          'transition': 'all 0.2s',
        },
        '.datatable-filter-popover-close:hover': {
          'background-color': '#f1f5f9',
          'color': '#1e293b',
        },
        '.datatable-filter-popover-content': {
          'padding': '1rem',
        },
        '.datatable-filter-popover-footer': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'flex-end',
          'gap': '0.5rem',
          'padding': '1rem',
          'border-top': '1px solid #e2e8f0',
          'background-color': '#f8fafc',
        },
        '.datatable-filter-label': {
          'display': 'block',
          'font-size': '0.75rem',
          'font-weight': '600',
          'color': '#374151',
          'margin-bottom': '0.5rem',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
        },
        '.datatable-filter-input': {
          'width': '100%',
          'padding': '0.5rem 0.75rem',
          'border': '1px solid #d1d5db',
          'border-radius': '0.375rem',
          'font-size': '0.875rem',
          'transition': 'border-color 0.2s',
        },
        '.datatable-filter-input:focus': {
          'outline': 'none',
          'border-color': '#0f766e',
          'box-shadow': '0 0 0 2px rgba(15, 118, 110, 0.2)',
        },
        '.datatable-filter-search': {
          'margin-bottom': '0.75rem',
        },
        '.datatable-filter-search-input': {
          'width': '100%',
          'padding': '0.5rem 2rem 0.5rem 0.75rem',
          'border': '1px solid #d1d5db',
          'border-radius': '0.375rem',
          'font-size': '0.875rem',
        },
        '.datatable-filter-search-input:focus': {
          'outline': 'none',
          'border-color': '#0f766e',
          'box-shadow': '0 0 0 2px rgba(15, 118, 110, 0.2)',
        },
        '.datatable-filter-search-icon': {
          'position': 'absolute',
          'right': '0.75rem',
          'top': '50%',
          'transform': 'translateY(-50%)',
          'width': '1rem',
          'height': '1rem',
          'color': '#9ca3af',
        },
        '.datatable-filter-options': {
          'max-height': '12rem',
          'overflow-y': 'auto',
          'space-y': '0.5rem',
        },
        '.datatable-filter-option': {
          'display': 'flex',
          'align-items': 'center',
          'gap': '0.5rem',
          'padding': '0.5rem 0',
          'cursor': 'pointer',
        },
        '.datatable-filter-option-label': {
          'font-size': '0.875rem',
          'color': '#374151',
        },
        '.datatable-filter-text-group': {
          'space-y': '0.5rem',
        },
        '.datatable-filter-select-group': {
          'space-y': '0.75rem',
        },
        '.datatable-filter-date-group': {
          'space-y': '0.75rem',
        },
        '.datatable-filter-date-inputs': {
          'display': 'grid',
          'grid-template-columns': '1fr 1fr',
          'gap': '0.75rem',
        },
        '.datatable-filter-sublabel': {
          'display': 'block',
          'font-size': '0.75rem',
          'font-weight': '500',
          'color': '#6b7280',
          'margin-bottom': '0.25rem',
        },
        '.datatable-filter-date-input': {
          'width': '100%',
          'padding': '0.5rem 0.75rem',
          'border': '1px solid #d1d5db',
          'border-radius': '0.375rem',
          'font-size': '0.875rem',
        },
        '.datatable-filter-date-input:focus': {
          'outline': 'none',
          'border-color': '#0f766e',
          'box-shadow': '0 0 0 2px rgba(15, 118, 110, 0.2)',
        },
        '.datatable-body': {
          'background-color': '#ffffff',
        },
        '.datatable-row': {
          'display': 'flex',
          'border-bottom': '1px solid #f1f5f9',
          'transition': 'background-color 0.2s',
        },
        '.datatable-row:hover': {
          'background-color': '#f8fafc',
        },
        '.datatable-row-selected': {
          'background-color': 'rgb(var(--color-primary-50))',
        },
        '.datatable-row-selected:hover': {
          'background-color': '#ccfbf1',
        },
        '.datatable-row-striped': {
          'background-color': 'rgb(var(--color-surface-50))',
        },
        '.datatable-row-striped:hover': {
          'background-color': '#f3f4f6',
        },
        '.datatable-body-cell': {
          'flex': '1',
          'padding': '0.75rem 1rem',
          'font-size': '0.875rem',
          'color': '#1e293b',
          'border-right': '1px solid #f1f5f9',
          'display': 'flex',
          'align-items': 'center',
        },
        '.datatable-body-cell:last-child': {
          'border-right': 'none',
        },
        '.datatable-body-cell-checkbox': {
          'flex': '0 0 auto',
          'width': '3rem',
          'justify-content': 'center',
        },
        '.datatable-body-cell-left': {
          'justify-content': 'flex-start',
        },
        '.datatable-body-cell-center': {
          'justify-content': 'center',
        },
        '.datatable-body-cell-right': {
          'justify-content': 'flex-end',
        },
        '.datatable-status-badge': {
          'padding': '0.25rem 0.75rem',
          'border-radius': '9999px',
          'font-size': '0.75rem',
          'font-weight': '500',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
        },
        '.datatable-status-badge-active': {
          'background-color': '#dcfce7',
          'color': '#166534',
        },
        '.datatable-status-badge-inactive': {
          'background-color': '#fef3c7',
          'color': '#92400e',
        },
        '.datatable-footer': {
          'background-color': '#f8fafc',
          'border-top': '1px solid #e2e8f0',
          'padding': '0.75rem 1rem',
        },
        '.datatable-footer-content': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
        },
        '.datatable-footer-info': {
          'display': 'flex',
          'align-items': 'center',
          'gap': '0.5rem',
        },
        '.datatable-footer-text': {
          'font-size': '0.875rem',
          'color': '#64748b',
        },
        '.datatable-footer-clear-filters': {
          'font-size': '0.875rem',
          'color': '#0f766e',
          'background': 'none',
          'border': 'none',
          'cursor': 'pointer',
          'text-decoration': 'underline',
          'transition': 'color 0.2s',
        },
        '.datatable-footer-clear-filters:hover': {
          'color': '#115e59',
        },
        // MultiSelect Component Styles
        '.multiselect-container': {
          'display': 'inline-flex',
          'align-items': 'center',
          'border': '1px solid #F4F4F5',
          'border-radius': '0.375rem',
          'background-color': '#ffffff',
          'min-width': '12rem',
          'position': 'relative',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.multiselect-container.multiselect-focus': {
          'border-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.2)',
        },
        '.multiselect-container.multiselect-disabled': {
          'background-color': '#FCFCFC',
          'opacity': '0.6',
          'cursor': 'not-allowed',
        },
        '.multiselect-container.multiselect-small': {
          'min-width': '10rem',
        },
        '.multiselect-container.multiselect-large': {
          'min-width': '14rem',
        },
        '.multiselect-input': {
          'display': 'flex',
          'align-items': 'center',
          'width': '100%',
          'padding': '0.5rem 0.75rem',
          'gap': '0.5rem',
        },
        '.multiselect-input.multiselect-input-chips': {
          'flex-wrap': 'wrap',
          'min-height': '2.5rem',
        },
        '.multiselect-container.multiselect-small .multiselect-input': {
          'padding': '0.375rem 0.75rem',
        },
        '.multiselect-container.multiselect-large .multiselect-input': {
          'padding': '0.75rem 1rem',
        },
        '.multiselect-display': {
          'flex': '1',
          'font-size': '0.875rem',
          'color': '#12161A',
          'white-space': 'nowrap',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.multiselect-placeholder': {
          'flex': '1',
          'font-size': '0.875rem',
          'color': '#9DA2A6',
        },
        '.multiselect-trigger': {
          'width': '1rem',
          'height': '1rem',
          'color': '#70777D',
          'transition': 'transform 0.2s',
          'flex-shrink': '0',
        },
        '.multiselect-chips': {
          'display': 'flex',
          'flex-wrap': 'wrap',
          'gap': '0.25rem',
          'flex': '1',
        },
        '.multiselect-chip': {
          'display': 'inline-flex',
          'align-items': 'center',
          'gap': '0.25rem',
          'padding': '0.125rem 0.5rem',
          'background-color': '#047880',
          'color': '#ffffff',
          'border-radius': '9999px',
          'font-size': '0.75rem',
          'font-weight': '500',
        },
        '.multiselect-chip-remove': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'width': '1rem',
          'height': '1rem',
          'border-radius': '50%',
          'background': 'none',
          'border': 'none',
          'color': '#ffffff',
          'cursor': 'pointer',
          'transition': 'background-color 0.2s',
        },
        '.multiselect-chip-remove:hover': {
          'background-color': 'rgba(255, 255, 255, 0.2)',
        },
        '.multiselect-panel': {
          'position': 'absolute',
          'top': '100%',
          'left': '0',
          'right': '0',
          'margin-top': '0.25rem',
          'background-color': '#ffffff',
          'border': '1px solid #F7F7F7',
          'border-radius': '0.375rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'z-index': '50',
          'max-height': '16rem',
          'overflow': 'hidden',
        },
        '.multiselect-search': {
          'position': 'relative',
          'padding': '0.75rem',
          'border-bottom': '1px solid #F7F7F7',
        },
        '.multiselect-search-input': {
          'width': '100%',
          'padding': '0.5rem 2rem 0.5rem 0.75rem',
          'font-size': '0.875rem',
          'border': '1px solid #F4F4F5',
          'border-radius': '0.375rem',
          'outline': 'none',
          'transition': 'border-color 0.2s',
        },
        '.multiselect-search-input:focus': {
          'border-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.2)',
        },
        '.multiselect-search-icon': {
          'position': 'absolute',
          'right': '1.25rem',
          'top': '50%',
          'transform': 'translateY(-50%)',
          'width': '1rem',
          'height': '1rem',
          'color': '#9DA2A6',
        },
        '.multiselect-items': {
          'max-height': '12rem',
          'overflow-y': 'auto',
        },
        '.multiselect-item': {
          'display': 'flex',
          'align-items': 'center',
          'padding': '0.5rem 0.75rem',
          'cursor': 'pointer',
          'transition': 'background-color 0.2s',
        },
        '.multiselect-item:hover': {
          'background-color': '#FFFFFF',
        },
        '.multiselect-item.multiselect-item-selected': {
          'background-color': '#EAF6F7',
        },
        '.multiselect-checkbox': {
          'width': '1rem',
          'height': '1rem',
          'margin-right': '0.75rem',
          'accent-color': '#047880',
        },
        '.multiselect-label': {
          'font-size': '0.875rem',
          'color': '#12161A',
          'cursor': 'pointer',
          'user-select': 'none',
        },
        '.multiselect-group-header': {
          'padding': '0.5rem 0.75rem',
          'font-size': '0.75rem',
          'font-weight': '600',
          'color': '#70777D',
          'background-color': '#FCFCFC',
          'border-bottom': '1px solid #F7F7F7',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
        },
        // RadioButton Component Styles
        '.radiobutton-input': {
          'appearance': 'none',
          'border': '2px solid #F4F4F5',
          'border-radius': '50%',
          'background-color': '#ffffff',
          'transition': 'all 0.2s',
          'cursor': 'pointer',
          'position': 'relative',
        },
        '.radiobutton-input:checked': {
          'background-color': '#32A4AC !important',
          'border-color': '#32A4AC !important',
        },
        '.radiobutton-input:checked::before': {
          'content': '""',
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)',
          'width': '8px',
          'height': '8px',
          'border-radius': '50%',
          'background-color': '#ffffff',
        },
        '.radiobutton-input:focus': {
          'outline': 'none',
          'box-shadow': '0 0 0 2px #32A4AC, 0 0 0 4px rgba(50, 164, 172, 0.2)',
        },
        '.radiobutton-input:disabled': {
          'border-color': '#EDEDED',
          'background-color': '#F7F7F7',
          'cursor': 'not-allowed',
          'opacity': '0.6',
        },
        '.radiobutton-input:disabled:checked': {
          'background-color': '#9DA2A6 !important',
          'border-color': '#9DA2A6 !important',
        },
        '.radiobutton-input:disabled:checked::before': {
          'background-color': '#ffffff',
        },
        '.radiobutton-small': {
          'width': '1rem',
          'height': '1rem',
        },
        '.radiobutton-small:checked::before': {
          'width': '6px',
          'height': '6px',
        },
        '.radiobutton-medium': {
          'width': '1.25rem',
          'height': '1.25rem',
        },
        '.radiobutton-medium:checked::before': {
          'width': '8px',
          'height': '8px',
        },
        '.radiobutton-large': {
          'width': '1.5rem',
          'height': '1.5rem',
        },
        '.radiobutton-large:checked::before': {
          'width': '10px',
          'height': '10px',
        },
        // Select Component Styles
        '.select-container': {
          'display': 'inline-flex',
          'align-items': 'center',
          'border': '1px solid #F4F4F5',
          'border-radius': '0.375rem',
          'background-color': '#ffffff',
          'min-width': '12rem',
          'position': 'relative',
          'cursor': 'pointer',
          'transition': 'all 0.2s',
        },
        '.select-container.select-focus': {
          'border-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.2)',
        },
        '.select-container.select-disabled': {
          'background-color': '#FCFCFC',
          'opacity': '0.6',
          'cursor': 'not-allowed',
        },
        '.select-container.select-invalid': {
          'border-color': '#EB1000',
          'box-shadow': '0 0 0 2px rgba(235, 16, 0, 0.2)',
        },
        '.select-container.select-small': {
          'min-width': '10rem',
        },
        '.select-container.select-large': {
          'min-width': '14rem',
        },
        '.select-input': {
          'display': 'flex',
          'align-items': 'center',
          'width': '100%',
          'padding': '0.5rem 0.75rem',
          'gap': '0.5rem',
        },
        '.select-container.select-small .select-input': {
          'padding': '0.375rem 0.75rem',
        },
        '.select-container.select-large .select-input': {
          'padding': '0.75rem 1rem',
        },
        '.select-display': {
          'flex': '1',
          'font-size': '0.875rem',
          'color': '#12161A',
          'white-space': 'nowrap',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.select-placeholder': {
          'flex': '1',
          'font-size': '0.875rem',
          'color': '#9DA2A6',
        },
        '.select-trigger': {
          'width': '1rem',
          'height': '1rem',
          'color': '#70777D',
          'transition': 'transform 0.2s',
          'flex-shrink': '0',
        },
        '.select-panel': {
          'position': 'absolute',
          'top': '100%',
          'left': '0',
          'right': '0',
          'margin-top': '0.25rem',
          'background-color': '#ffffff',
          'border': '1px solid #F7F7F7',
          'border-radius': '0.375rem',
          'box-shadow': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'z-index': '50',
          'max-height': '16rem',
          'overflow': 'hidden',
        },
        '.select-search': {
          'position': 'relative',
          'padding': '0.75rem',
          'border-bottom': '1px solid #F7F7F7',
        },
        '.select-search-input': {
          'width': '100%',
          'padding': '0.5rem 2rem 0.5rem 0.75rem',
          'font-size': '0.875rem',
          'border': '1px solid #F4F4F5',
          'border-radius': '0.375rem',
          'outline': 'none',
          'transition': 'border-color 0.2s',
        },
        '.select-search-input:focus': {
          'border-color': '#047880',
          'box-shadow': '0 0 0 2px rgba(4, 120, 128, 0.2)',
        },
        '.select-search-icon': {
          'position': 'absolute',
          'right': '1.25rem',
          'top': '50%',
          'transform': 'translateY(-50%)',
          'width': '1rem',
          'height': '1rem',
          'color': '#9DA2A6',
        },
        '.select-items': {
          'max-height': '12rem',
          'overflow-y': 'auto',
        },
        '.select-item': {
          'display': 'flex',
          'align-items': 'center',
          'padding': '0.5rem 0.75rem',
          'cursor': 'pointer',
          'transition': 'background-color 0.2s',
          'font-size': '0.875rem',
          'color': '#12161A',
        },
        '.select-item:hover': {
          'background-color': '#FFFFFF',
        },
        '.select-item.select-item-selected': {
          'background-color': '#EAF6F7',
          'color': '#047880',
          'font-weight': '500',
        },
        '.select-group-header': {
          'padding': '0.5rem 0.75rem',
          'font-size': '0.75rem',
          'font-weight': '600',
          'color': '#70777D',
          'background-color': '#FCFCFC',
          'border-bottom': '1px solid #F7F7F7',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
        },
        // ToggleSwitch Component Styles
        '.toggleswitch-container': {
          'position': 'relative',
          'display': 'inline-block',
          'cursor': 'pointer',
        },
        '.toggleswitch-input': {
          'position': 'absolute',
          'opacity': '0',
          'width': '0',
          'height': '0',
        },
        '.toggleswitch-track': {
          'position': 'relative',
          'width': '2.75rem',
          'height': '1.5rem',
          'background-color': '#F4F4F5',
          'border-radius': '0.75rem',
          'transition': 'all 0.2s ease',
          'cursor': 'pointer',
        },
        '.toggleswitch-track.toggleswitch-track-hover': {
          'background-color': '#9DA2A6',
        },
        '.toggleswitch-track.toggleswitch-track-focus': {
          'box-shadow': '0 0 0 2px rgba(50, 164, 172, 0.2)',
        },
        '.toggleswitch-handle': {
          'position': 'absolute',
          'top': '2px',
          'left': '2px',
          'width': '1.25rem',
          'height': '1.25rem',
          'background-color': '#ffffff',
          'border-radius': '50%',
          'transition': 'all 0.2s ease',
          'box-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        },
        '.toggleswitch-input:checked + .toggleswitch-track': {
          'background-color': '#32A4AC',
        },
        '.toggleswitch-input:checked + .toggleswitch-track.toggleswitch-track-hover': {
          'background-color': '#138890',
        },
        '.toggleswitch-input:checked + .toggleswitch-track > .toggleswitch-handle': {
          'transform': 'translateX(1.25rem)',
        },
        '.toggleswitch-input:focus + .toggleswitch-track': {
          'box-shadow': '0 0 0 2px rgba(50, 164, 172, 0.2)',
        },
        '.toggleswitch-input:disabled + .toggleswitch-track': {
          'background-color': '#F7F7F7',
          'cursor': 'not-allowed',
          'opacity': '0.6',
        },
        '.toggleswitch-input:disabled:checked + .toggleswitch-track': {
          'background-color': '#9DA2A6',
        },
        '.toggleswitch-input:disabled + .toggleswitch-track > .toggleswitch-handle': {
          'cursor': 'not-allowed',
        },
      })
    })
  ],
};