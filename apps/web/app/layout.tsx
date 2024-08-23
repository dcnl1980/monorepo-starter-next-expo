"use client"
import React, {Suspense} from 'react';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const LoadingOverlay = () => {
  return (
      <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Suspense fallback={<LoadingOverlay />}>
           {children}
        </Suspense>
        </body>
        </html>
    );
}
