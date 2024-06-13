import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/sonner"
import { BillingProvider } from "@/providers/billing-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autumn 8",
  description: "Welcome to Autumn 8, your ultimate Automation Builder for Slack, Discord, and Notion messaging! Effortlessly streamline your communication workflows across platforms with Autumn 8. Craft and schedule automated messages with precision and ease, ensuring timely updates and seamless collaboration. Whether you're managing teams, communities, or projects, Autumn 8 empowers you to automate your messaging needs with unparalleled efficiency and flexibility.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BillingProvider>
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
            </BillingProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
