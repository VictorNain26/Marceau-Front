import "./globals.css";

import { Merriweather } from 'next/font/google';
 
const merriweather = Merriweather({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata = {
  title: "Marceau Lutin",
  description: "Marceau Lutin Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={merriweather.className}>
        {children}
      </body>
    </html>
  );
}
