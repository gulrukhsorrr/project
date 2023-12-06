import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
