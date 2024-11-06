import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { INTER } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "1705 Studio Assignment",
  description:
    "Project submission for 1705 Studio's assignment by Thilina Rathnayaka, implementing design and functionality as specified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", INTER.className)}
      >
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
