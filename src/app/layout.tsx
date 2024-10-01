import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import './globals.css';

export const metadata = {
  title: '리그 오브 레전드 정보 앱',
  description: 'Next.js를 이용한 리그 오브 레전드 정보 앱, 개인과제',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Navigation />
      {children} 
      </body>
    </html>
  );
}
