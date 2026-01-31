import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "편도훈 (Pien) - 프로그래머 팬페이지",
  description: "편도훈 프로그래머를 위한 팬페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
