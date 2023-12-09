import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './styles/other.css'
import './styles/headerFooter.css'
import './styles/fonts.css';
import Header from './components/Header';
import Footer from './components/Footer';



export const metadata = {
  title: 'Continuum insights',
  description: 'Online survey company',
  metadataBase: new URL('https://www.continuuminsights.com/'),
  
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: 'https://nextjs.org/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
