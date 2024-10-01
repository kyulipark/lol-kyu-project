import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    
      <body>
      <header>
        헤더입니다
      </header>
      {children}
      </body>
    </html>
  );
}


// 글로벌 레이아웃 컴포넌트입니다.
// 파일에서 글로벌 네비게이션을 설정하고, 공통 레이아웃을 정의합니다.