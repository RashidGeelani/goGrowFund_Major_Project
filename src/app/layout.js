import { Inter } from "next/font/google";
import Layout from "./components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gogrowfund.com",
  description: "developed by Syed Rashid Geelani, Saurabh Yamgar and Saurabh Pandey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout />
        {children}
        </body>
    </html>
  );
}
