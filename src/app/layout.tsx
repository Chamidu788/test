import './globals.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

export const metadata = {
  title: 'Gaxios',
  description: 'Helping you build a team of expert developers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        
        
        {children}

        
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}