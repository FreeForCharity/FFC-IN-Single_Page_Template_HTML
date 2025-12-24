import {
  Open_Sans,
  Lato,
  Raleway,
  Faustina,
  Cantata_One,
  Fauna_One,
  Montserrat,
  Cinzel,
} from 'next/font/google'

// Configure fonts with proper subsets and display strategy
// Using fallbackFont option to provide system fonts as fallback
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700'],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

export const faustina = Faustina({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-faustina',
  weight: ['400', '500', '600', '700'],
  fallback: ['Georgia', 'serif'],
})

export const cantataOne = Cantata_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cantata-one',
  weight: '400',
  fallback: ['Georgia', 'serif'],
})

export const faunaOne = Fauna_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fauna-one',
  weight: '400',
  fallback: ['Georgia', 'serif'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

export const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
  fallback: ['Georgia', 'serif'],
})
