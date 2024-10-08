"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex bg-blue-500 py-4 px-40 justify-between">
        <li>
          <Link href="/" className={pathname === "/" ? "font-bold " : ""}>
            홈
          </Link>
        </li>
        <li>
          <Link
            href="/champions"
            className={pathname === "/champions" ? "font-bold" : ""}
          >
            챔피언 목록
          </Link>
        </li>
        <li>
          <Link
            href="/items"
            className={pathname === "/items" ? "font-bold" : ""}
          >
            아이템 목록
          </Link>
        </li>
        <li>
          <Link
            href="/rotation"
            className={pathname === "/rotation" ? "font-bold" : ""}
          >
            챔피언 로테이션
          </Link>
        </li>
      </ul>
    </nav>
  );
}
