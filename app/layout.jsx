import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Next Property',
    description: 'Find your dream property',
    keywords: 'rentals, find rentals, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Navbar />
            <main>{children}</main>            
            <Footer />
        </body>
    </html>
  )
}

export default MainLayout;