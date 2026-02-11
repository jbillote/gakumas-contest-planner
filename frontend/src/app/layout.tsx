import { Header } from "@/components/header"
import "./globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { Providers } from "./providers";

const noto = Noto_Sans_JP({
  style: ["normal"],
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto.className + " dark"} >
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  );
}
