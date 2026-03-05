import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ActiveThemeProvider } from "@/components/active-theme";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";

const META_THEME_COLORS = {
	light: "#fff",
	dark: "#0909b",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saldanha Ltda.",
  description: "Saldanha Ltda. é uma empresa de tecnologia especializada em soluções de software personalizadas para atender às necessidades específicas de cada cliente. Com uma equipe altamente qualificada e dedicada, a Saldanha Ltda. oferece serviços de desenvolvimento de software, consultoria tecnológica e suporte técnico, garantindo a entrega de produtos inovadores e eficientes que impulsionam o sucesso dos negócios de seus clientes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

	const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
				className={cn(
          "bg-background overscroll-none font-sans antialiased",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : ""
        )}      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
					<ActiveThemeProvider initialTheme={activeThemeValue}>
            {children}
					</ActiveThemeProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
