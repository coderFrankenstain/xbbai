import "@/style/globals.css";
import { Inter } from "next/font/google";
import { Nav } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AwesomeAI",
  description: "您的AI工具集合",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
