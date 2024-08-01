import "./globals.css";

import { Merriweather } from 'next/font/google';
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
 
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

const merriweather = Merriweather({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata = {
  title: "Marceau Lutin",
  description: "Marceau Lutin Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="fr">
        <body className={merriweather.className}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
