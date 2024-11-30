import Navbar from '@/components/Navbar'
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
        </body>
    </html>
  )
}

export default MainLayout;