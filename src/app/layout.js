import "./globals.css";
import { Inter, Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Huzaifa - Frontend Developer Portfolio",
  description:
    "Professional portfolio showcasing frontend development skills and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
