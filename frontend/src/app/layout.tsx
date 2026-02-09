import { Header } from "@/components/header"
import "./globals.css"
import { Noto_Sans_JP } from "next/font/google"

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
        {children}
      </body>
    </html >
  );
}
