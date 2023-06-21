import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import SignIn from "@/components/SignIn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plunder",
  description: "A forum app for providing better communities in finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-full pt-12 bg-slate-50 antialiased">
        <div className="container max-w-7xl mx-auto h-full pt-12">
          <SignIn />
          {children}
        </div>
      </body>
    </html>
  );
}
