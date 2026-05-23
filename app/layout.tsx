import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 export const metadata: Metadata = {
  title: "Forever Sénégal",
  description: "Produits Forever au Sénégal",

  openGraph: {
    title: "Forever Sénégal",
    description: "Berry Nectar et Vitolize",
    url: "https://senebio-site.vercel.app",
    siteName: "Forever Sénégal",

    images: [
      {
        url: "/gamme-prostate.jpeg",
        width: 1200,
        height: 630,
        alt: "Gamme Prostate",
      },
    ],

    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="min-h-full flex flex-col">

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-NSGWFDH62T"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NSGWFDH62T');
    `}
  </Script>

  {children}

</body>
 
</html>
  );
}
