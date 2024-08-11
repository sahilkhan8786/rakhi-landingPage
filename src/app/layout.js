import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Montserrat({ subsets: ["latin-ext"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Gift and App",
  description: "The modern gifting platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="max-w-screen-2xl mx-auto ">

          {children}
        </section>
      </body>
    </html>
  );
}
