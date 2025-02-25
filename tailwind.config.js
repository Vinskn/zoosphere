/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      './index.html',
      './src/*.{jsx, html}',
      './src/component/**/*.{jsx,html}',
      './src/childPages/**/*.{jsx,html}',
      './src/admin/**/*.{jsx,html}',
    ],
    extract,

  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        lightGreen: '#e4eb9c',
        green2: '#8da750',
        green3: '#537b2f',
        green4: '#2d5128',
        darkGreen: '#142c14',
        cream: '#E7D37F'
      },
      backgroundImage: {
        pattern1: "url('/Pattern/p1.svg')",
        pattern2: "url('/Pattern/p2.svg')",
        pattern3: "url('/Pattern/p3.svg')",
        pattern4: "url('/Pattern/p4.svg')",
        pattern6: "url('/Pattern/p6.svg')",
        pattern7: "url('/Pattern/p7.svg')",
        pattern8: "url('/Pattern/p8.svg')"
      },
      height: {
        121: '31.25rem'
      },
      fontFamily: {
        childHood: ['ChildHood'],
        highMount: ['highMount'],
        mountReal: ['mountReal'],
      },
      fontSize : {
        xxs: '0.4rem',
      }
    },
  },
  plugins: [
    fluid,
    function({ addComponents }) {
      addComponents({
        // For Part Animals

        '.cardDiv': {
            '@apply relative rounded-lg bg-black': {}
        },
        '.cardImage': {
            '@apply lg:h-60 sm:h-32 w-auto object-cover rounded-lg' : {}
        },
        '.cardInfo': {
            '@apply absolute lg:h-60 sm:h-32 inset-0 text-white p-3 rounded-lg bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300' : {}
        },
        '.cardTitle': {
          '@apply ~text-sm/xl font-bold mb-2' : {}
        },
        
        // End part animals

        // Part calendar
        '.react-calendar__month-view__weekdays' : {
          '@apply text-black md:text-xs lg:text-base ~mx-1/2' : {}
        },
        '.react-calendar__navigation' : {
          '@apply bg-green4 py-2 mb-2 text-white md:text-xs lg:text-base font-bold rounded-t-lg' : {}
        },
      })
    }
  ],
}

