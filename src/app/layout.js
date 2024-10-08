import localFont from "next/font/local";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from "./header/page";
import "./globals.css";


export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
        <Header />
        {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
